import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "./DatePicker";
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import moment from "moment/moment";
import { scheduleTime } from "../../utils/propertyFilters";
import { fetchFubApi, fubApiBaseUrl } from "../../utils/fubFetchApi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function ScheduleTour({onInit, fubObj}) {
    const router = useRouter();
    const curTime = useRef();
    const curdate = new Date();
    curTime.current = ("0"+curdate.getHours()).slice(-2)+':00:00';
    const [showmodal, setShowmodal] = useState(false);
    const [schedule, setSchedule] = useState({});
    const [reqmodal, setReqmodal] = useState(false);
    const [selectDate, setSelectDate] = useState(new Date());

    const schema = yup.object().shape({
        schedule_time: yup.string().required("Please enter schedule time").label('Schedule Time'),
        full_name: yup.string().required("Please enter fullname").label('Full Name'),
        schedule_email: yup.string().email().required("Please enter email address").label('Email Address'),
        schedule_phone: yup.string().required(({value}) => {
            // console.log("Val:", value);
            if(!value || value?.length === 0){
                return "Please enter your phone number";
            }else if((typeof value === 'string') && (isPossiblePhoneNumber(value) === false)){
                return "Please enter valid phone number";
            }
        }).matches(
            /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g,
                  "Please enter valid phone number"
        ).label('Phone Number'),
    });
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        resolver: yupResolver(schema),
    });

    const handleScheduleTour = async (data) => {
        // console.log("Data: ",data)

        try {
            let toastId = toast.loading('Checking...');
            const payload = {url : `${fubApiBaseUrl}/people?sort=created&limit=1&offset=0&email=${data.schedule_email}&includeTrash=true&includeUnclaimed=true`, method : 'GET'};
            const res = await fetchFubApi(payload);
            // console.log(res)
            toast.dismiss(toastId);
            if(res.status){
                let people = res.message.people;
                if(people.length){
                    data.fub_id = people.id;
                    data.firstName = people.firstName;
                    data.lastName = people.lastName;
                    data.schedule_date = moment(selectDate).format('YYYY-MM-DD');
                    data.schedule_time = moment(selectDate).format('YYYY-MM-DD')+" "+data.schedule_time;
                    setSchedule(data);
                    // console.log("Schedule Time: ",data.schedule_time)
                    setShowmodal(true);
                }else{
                    reset();
                    toast.error("You need to register yourself.");
                    router.push('/signup');
                }
            }else{
                reset();
                toast.error("Unable to connect, Error: "+res.message);
            }
        } catch (error) {
            // console.log(error)
            reset();
            toast.error("Something went wrong. Please try again.");
        }
        
    }
    const handleModalClose = async (respond) => {
        // console.log(schedule);
        if(respond){
            // console.log(firstName, lastName)
            let leadObj = {
                person: {
                    id: schedule.fub_id,
                    contacted: false,
                    emails: [{isPrimary: true, type: 'work', value: schedule.schedule_email}],
                    phones: [{isPrimary: false, value: schedule.schedule_phone, type: 'mobile'}],
                    firstName: schedule.firstName,
                    lastName: schedule.lastName,
                    stage: 'Lead',
                    sourceUrl: fubObj.propertyURL
                },
                property: fubObj.property,
                type: 'Property Inquiry',
                system: 'NextJS',
                source: 'RushHome',
                message: `I want to schedule a tour for this property on ${schedule && new Date(schedule.schedule_date).toLocaleDateString('en-US', { weekday:"long", month:"long", day:"numeric"})} at ${schedule && moment(schedule.schedule_time).format('hh:mm a')}`,
            };
            try{
                let toastId = toast.loading('Loading...');
                const payload = {url : `${fubApiBaseUrl}/events`, method : 'POST', data: leadObj}
                const res = await fetchFubApi(payload)
                if(res){
                    reset();
                    setReqmodal(true);
                    // alert("Leads send successfully")
                }else{
                    toast.error('Request failed to send');
                }
                toast.dismiss(toastId);
            } catch (error) {
                toast.error('Request failed. Please try again.');
            };
            
        }
        setShowmodal(false);
        setSchedule({});
        reset();
    }
    const handleRequestModalClose = () => {
        setReqmodal(false)
    }
    const handleTest = (val) => {
        schedule.schedule_phone = val;
        // setSchedule({...schedule, [schedule_phone]:val})
        // console.log(val)
    }

    const ScheduleModal = () => (
        <div className={`modal fade ${showmodal? 'show' : ''}`} id="myModal" style={{display: (showmodal? 'block' : 'none')}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Request more information</h2>
                        <button type="button" className="btn-close" onClick={()=>(handleModalClose(0))} aria-label="Close"></button>
                    </div>
                    <div className="form_wraper_box container">
                        {/* <h2>Tuesday, March 9th <br/>at {format(new Date(schedule.schedule_time).getTime(), 'p')}</h2> */}
                        <h5 className="text-center">{schedule && new Date(schedule.schedule_date).toLocaleDateString('en-US', { weekday:"long", month:"long", day:"numeric"})} <br /> at {schedule && moment(schedule.schedule_time).format('hh:mm a')}</h5>
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" id="inputEmail4" value={schedule?.full_name} readOnly/>
                            </div>

                            <div className="col-12">
                                <div className="col-auto">
                                    <label className="form-label">Phone Number</label>
                                    <PhoneInput
                                        defaultCountry="US"
                                        international={true}
                                        value={schedule?.schedule_phone}
                                        onChange={handleTest}
                                        control={control}
                                        rules={{ required: true }}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="john.doe@gmail.com" value={schedule?.schedule_email} readOnly/>
                            </div>

                            <label className="review">Reviews</label>
                            
                            <p className="agent_content">By pressing Request Showing, you agree that Rush Home and it’s real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. </p>
                            
                            <div className="col-12 text-center">
                                <button type="button" className="btn style2 contact_button" onClick={()=>(handleModalClose(1))}>Request Showing</button>
                            </div>

                        </form>
                    </div> 
                </div>
            </div>
        </div>
    )

    const ScheduleRequestModal = () => (
        <div className={`modal fade ${reqmodal? 'show' : ''}`} id="requestModal" style={{display: (reqmodal? 'block' : 'none')}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <h6 className="text-center my-5">Request Send</h6>
                        <div className="col-12 text-center">
                            <button type="button" className="btn style2 contact_button" onClick={()=>(handleRequestModalClose())}>Close</button>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    )

    const selectedDay = (val) =>{
        setSelectDate(val)
    };
    
    useEffect(()=>{
        if(onInit){
            curTime.current = ("0"+curdate.getHours()).slice(-2)+':00:00';
            reset()
        }
    }, [onInit]);

    return (
        <>
            <div id="schedule_box">
                <DatePicker 
                    startDate={new Date()}
                    days={100}
                    selectDate={selectDate}
                    getSelectedDay={selectedDay}
                />
                <div className="form_wraper_box container">
                    <form onSubmit={handleSubmit(handleScheduleTour)}>
                        <div className="form-group mb-3">
                            {/* <input type="time" className="form-control" name="schedule_time" id="schedule_time" step={30} { ...register('schedule_time', {value: curTime.current}) } /> */}
                            <select className="form-control" name="schedule_time" id="schedule_time" placeholder="Full Name"  { ...register('schedule_time', {value: curTime.current}) }>
                                {scheduleTime.items.map((item, i)=>(
                                    <option key={`optime-${i}`} value={item.value}>{item.name}</option>
                                ))}
                            </select>
                            <span className="text-danger">{errors.schedule_time?.message}</span>
                        </div>
                        <div className="form-group mb-3">
                            <input type={'text'} className="form-control" name="full_name" id="full_name" placeholder="Full Name" { ...register('full_name') } />
                            <span className="text-danger">{errors.full_name?.message}</span>
                        </div>
                        <div className="for-group mb-3">
                            <input type={'email'} className="form-control" name="schedule_email" id="schedule_email" placeholder="Your Email Address" { ...register('schedule_email') } />
                            <span className="text-danger">{errors.schedule_email?.message}</span>
                        </div>
                        <div className="for-group mb-3">
                            <Controller
                                name="schedule_phone"
                                control={control}
                                className="form-control"
                                { ...register('schedule_phone') }
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        placeholder="414-266-9847"
                                        defaultCountry="US"
                                        international={true}
                                        withCountryCallingCode={true}
                                        value={value}
                                        onChange={onChange}
                                        id="schedule_phone"
                                    />
                                )}
                            />
                            {/* <input type="tel" className="form-control" name="schedule_phone" id="schedule_phone" placeholder="Your Phone Number" { ...register('schedule_phone') } /> */}
                            <span className="text-danger">{errors.schedule_phone?.message}</span>
                        </div>
                        <div className="for-group mb-3">
                            <button type="submit" className="btn style1" style={{borderRadius:15}}>Schedule a Tour</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <ScheduleModal />
            <ScheduleRequestModal />
        </>
    )
}