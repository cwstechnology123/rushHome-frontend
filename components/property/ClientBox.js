import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { MdSquareFoot } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import DatePicker from "../../components/property/DatePicker";
import { scheduleTime } from "../../utils/propertyFilters";
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import moment from "moment/moment";
import { useSession } from "next-auth/react";
import splitName from "../../utils/splitName";
import { toast } from "react-hot-toast";
import { getAgentFubDetails, sendFubLeads } from "../../utils/fubApiCall";
import Image from "next/image";

export default function ClientBox({ type, address, price, pricearea, amenity, fubObj, agent }) {

    const {data: session} = useSession();
    const [curTime, setCurTime] = useState(null);
    const [selectDate, setSelectDate] = useState(new Date());
    const [scheduleModal, setScheduleModal] = useState(false);
    const [sendModal, setSendModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);
    const [asrc, setAsrc] = useState(defaultAgentImage.src);
    const [agentForm, setAgentForm] = useState({
        id: 0,
        email: agent.listAgentEmail,
        name: agent.listAgentFullName,
        message: `I would like more information on ${address}`,
    });
    async function findFubAgent(){
        let res =  await getAgentFubDetails(agent.listAgentEmail);
        if(res.status){
            let user = res.message.users;
            if(user[0].role === 'Agent'){
                let agentImage = res.message.users[0].picture?.original;
                if(agentImage){
                    setAsrc(agentImage);
                }
                setAgentForm({...agentForm, id: user[0].id})
            }
        }
    }

    useEffect(() => {
        setCurTime(moment().format('HH:00:00'));
        findFubAgent();
        return () => true;
    }, []);
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
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const selectedDay = (val) =>{
        setSelectDate(val)
    };
    // console.log(agentForm)
    //request send modal

    const RequestSendModal = () => (
        <div className={`modal fade ${sendModal? 'show' : ''}`} id="messageModal" style={{display: (sendModal? 'block' : 'none')}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <h3 className="text-center my-5">Request Send</h3>
                    </div>
                    <div className="modal-footer justify-content-center border-0">
                        <button type="button" className="btn style2 contact_button" onClick={setSendModal(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
    //schedule tour modal
    const handleTourClose = () => {
        reset();
        setScheduleModal(false);
    }
    const handleScheduleTour = async (data) => {
        data.schedule_date = moment(selectDate).format('YYYY-MM-DD');
        data.schedule_time = moment(selectDate).format('YYYY-MM-DD')+" "+data.schedule_time;
        // console.log("Data: ",data)
        setScheduleModal(false);
        const {firstName, lastName} = splitName(data.contact_name);
        // console.log(firstName, lastName)
        let leadObj = {
            person: {
              emails: [{isPrimary: true, type: 'work', value: data.contact_email}],
              phones: [{isPrimary: false, value: data.schedule_phone, type: 'mobile'}],
              firstName: firstName,
              lastName: lastName,
              stage: 'Lead',
              sourceUrl: fubObj.propertyURL
            },
            property: fubObj.property,
            type: type? type : 'Property Inquiry',
            system: 'NextJS',
            source: 'RushHome',
            message: `I want to schedule a tour for this property on ${data && moment(data.schedule_date).format('dddd, MMMM Do')} at ${data && moment(data.schedule_time).format('hh:mm a')}`,
        };
        try{
            const toastId = toast.loading('Loading...');
            const res = await sendFubLeads(leadObj)
            if(res.status){
                setSendModal(true)
                // alert("Leads send successfully")
            }else{
                toast.error('Request failed to send');
            }
            toast.dismiss(toastId);
        } catch (error) {
            // console.log(error)
            toast.dismiss();
            toast.error('Request failed. Please try again.');
        };
        reset();
        
    }
    const ScheduleModal = () => (
        <div className={`modal fade ${scheduleModal? 'show' : ''}`} id="scheduleModal" style={{display: (scheduleModal? 'block' : 'none')}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Request more information</h2>
                        <button type="button" className="btn-close" onClick={()=>handleTourClose()} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form_wraper_box" id="schedule_box">
                        
                            <form onSubmit={handleSubmit(handleScheduleTour)}>
                                <div className="form-group mb-3">
                                    <DatePicker 
                                        startDate={new Date()}
                                        days={100}
                                        selectDate={selectDate}
                                        getSelectedDay={selectedDay}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    {/* <input type="time" className="form-control" name="schedule_time" id="schedule_time" step={30} { ...register('schedule_time', {value: curTime.current}) } /> */}
                                    <select className="form-control" name="schedule_time" id="schedule_time" placeholder="Full Name"  { ...register('schedule_time', {value: curTime}) }>
                                        {scheduleTime.items.map((item, i)=>(
                                            <option key={`optime-${i}`} value={item.value}>{item.name}</option>
                                        ))}
                                    </select>
                                    <span className="text-danger">{errors.schedule_time?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <input type={'text'} className="form-control" name="full_name" id="full_name" placeholder="Full Name" { ...register('full_name', {value: session?.user.name || ""}) } />
                                    <span className="text-danger">{errors.full_name?.message}</span>
                                </div>
                                <div className="for-group mb-3">
                                    <input type={'email'} className="form-control" name="schedule_email" id="schedule_email" placeholder="Your Email Address" { ...register('schedule_email', {value: session?.user.email || ""}) } />
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
                                <label className="review">Reviews</label>
                                <p className="agent_content">By pressing Request Showing, you agree that Rush Home and it&#39;s real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. </p>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn style2 contact_button">Request Showing</button>
                                </div>                   
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
    //message agent modal
    const handleAgentMsg = async () => {
        setMessageModal(false);
        if(agentForm.id != 0){
            const {firstName, lastName} = splitName(session.user.name);
            let leadObj = {
                person: {
                    // assignedUserId: 1, //NEED TO CHECK FOR AGENT ONLY NOT BROKER
                    // assignedTo: agent.listAgentFullName,
                    emails: [{isPrimary: true, type: 'work', value: session.user.email}],
                    firstName: firstName,
                    lastName: lastName,
                    stage: 'Lead',
                    sourceUrl: fubObj.propertyURL
                },
                property: fubObj.property,
                type: type? type : 'Property Inquiry',
                system: 'NextJS',
                source: 'RushHome',
                message: agentForm.message,
            };
            try{
                const toastId = toast.loading('Loading...');
                const res = await sendFubLeads(leadObj)
                if(res.status){
                    setSendModal(true)
                    // alert("Leads send successfully")
                }else{
                    toast.error('Request failed to send');
                }
                toast.dismiss(toastId);
            } catch (error) {
                // console.log(error)
                toast.dismiss();
                toast.error('Request failed. Please try again.');
            };
            reset();
        }else{
            toast.error('Unable to send request.');
        }
    }
    const AgentModal = () => (
        <div className={`modal fade ${messageModal? 'show' : ''}`} id="scheduleModal" style={{display: (messageModal? 'block' : 'none')}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Listing Agent</h2>
                        <button type="button" className="btn-close" onClick={()=>setMessageModal(false)} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="listing_agentbox">
                            <div className="row">
                                <div className="col-4">
                                    <Image src={asrc} className="align-self-center mr-3 img-circle" alt="Agent Image" width={100} height={100} />
                                </div>
                                <div className="col-8">
                                    <h5>{agent.listAgentFullName}</h5>
                                    <h6>Rush<span style={{color: '#FFC107'}}>Home</span></h6>
                                    {agent.listAgentEmail}
                                    {(agent.listAgentOfficePhone!="") && (
                                        <>
                                        <br/>P: ({agent.listAgentOfficePhoneExt}) {agent.listAgentOfficePhone}
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="askquestion">
                                <h2>Ask a question:</h2>
                                <div className="col-12">
                                    <div className="form-group">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 150}} value={agentForm.message || ""} onChange={(ev)=> setAgentForm({...agentForm, [message]: ev.target.value})}/>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn style2 contact_button" onClick={()=>handleAgentMsg()}>Ask a Question</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <>
        <div className="card" style={{borderRadius: 15}}>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{type}</h5>
                <small style={{wordBreak:'break-all'}}><HiOutlineLocationMarker /> {address}</small>
                <div className="row justify-content-between align-items-center">
                    <div className="col-6" style={{fontWeight:600, color: 'black', fontSize: 16}}>{Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</div>
                    <div className="col-6 text-right">{Number(pricearea).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}/SqFt</div>
                </div>
                <div className="client_factsicons mt-4">
                    <ul>
                        <li>
                            <span className="icon-box"><IoBedOutline/></span>
                            <div className="icon-facts">
                                <span>Bedrooms</span>
                                <h3>{amenity?.beds || '-'}</h3>
                            </div>
                        </li>
                        <li>
                            <span className="icon-box"><MdSquareFoot/></span>
                            <div className="icon-facts">
                                <span>SQFT</span>
                                <h3>
                                {(amenity?.area)? Number(amenity.area).toLocaleString('en-US') : '-'}
                                </h3>
                            </div>
                        </li>
                        <li>
                            <span className="icon-box"><FaBath/></span>
                            <div className="icon-facts">
                                <span>Bathrooms</span>
                                <h3>{amenity?.baths || '-'}</h3>
                            </div>
                        </li>
                        <li>
                            <span className="icon-box"><GiHomeGarage/></span>
                            <div className="icon-facts">
                                <span>Garage</span>
                                <h3>{amenity?.garages || '-'}</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <button type="button" className="btn style1 mb-3 w-100" style={{borderRadius: 15}} onClick={() => setScheduleModal(true)}>Schedule a Tour</button>
                {agent.listAgentEmail.endsWith("@rushhome.com") && (
                    <button type="button" className="btn style2 contact_button w-100" style={{borderRadius: 15}} onClick={()=>setMessageModal(true)}>Message Agent</button>
                )}
                
            </div>
        </div>
        <RequestSendModal/>
        <AgentModal/>
        <ScheduleModal/>
        </>
    )
}