import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { MdSquareFoot } from "react-icons/md";
import { useRef, useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Toast } from "react-bootstrap";
import DatePicker from "../../components/property/DatePicker";
import { scheduleTime } from "../../utils/propertyFilters";
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import moment from "moment/moment";
import { useSession } from "next-auth/react";
import splitName from "../../utils/splitName";
import { fetchFubApi, fubApiBaseUrl } from "../../utils/fubFetchApi";
import { toast, Toaster } from "react-hot-toast";

export default function ClientBox({ type, address, price, pricearea, amenity, fubObj }) {
    const { data: session } = useSession();
    const [showscheduletour, setShowscheduletour] = useState(false);
    const [showsrequest, setShowsrequest] = useState(false);
    const curTime = useRef();
    const curdate = new Date();
    const [selectDate, setSelectDate] = useState(new Date());
    curTime.current = ("0"+curdate.getHours()).slice(-2)+':00:00';
    // console.log(session)
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
    const handleScheduleModalClose = () => {
        reset();
        setShowscheduletour(false);
    }
    const handleScheduleTour = async (data) => {
        data.schedule_date = moment(selectDate).format('YYYY-MM-DD');
        data.schedule_time = moment(selectDate).format('YYYY-MM-DD')+" "+data.schedule_time;
        // console.log("Data: ",data)
        setShowscheduletour(false);
        const {firstName, lastName} = splitName(data.contact_name);
        // console.log(firstName, lastName)
        let leadObj = {
            person: {
              contacted: false,
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
            message: `I want to schedule a tour for this property on ${data && new Date(data.schedule_date).toLocaleDateString('en-US', { weekday:"long", month:"long", day:"numeric"})} at ${data && moment(data.schedule_time).format('hh:mm a')}`,
        };
        try{
            toast.loading('Waiting...');
            const payload = {url : `${fubApiBaseUrl}/events`, method : 'POST', data: leadObj}
            const res = await fetchFubApi(payload)
            if(res){
                setShowsrequest(true)
                // alert("Leads send successfully")
            }else{
                toast.error('Request failed to send');
            }
        } catch (error) {
            toast.error('Request failed. Please try again.');
        };
        reset();
        
    }
    const ScheduleTourModal = (props) => (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{color:'black'}}>
                Schedule a Tour with Your Agent
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                            <select className="form-control" name="schedule_time" id="schedule_time" placeholder="Full Name"  { ...register('schedule_time', {value: curTime.current}) }>
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
                        <p className="agent_content">By pressing Request Showing, you agree that Rush Home and it’s real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. </p>
                        <div className="form-group text-center">
                            <button type="submit" className="btn style2 contact_button">Request Showing</button>
                        </div>                   
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
    const RequestSendModal = (props) => (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter" style={{color:'black'}}>
                Schedule a Tour with Your Agent
                </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <h6 className="font-weight-bolf text-center m-5">Request Sent</h6>
                <div className="form-group text-center">
                    <button type="button" className="btn style2 contact_button" onClick={props.onHide}>Close</button>
                </div> 
            </Modal.Body>
        </Modal>
    )

    return (
        <>
        <Toaster />
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
                <button type="button" className="btn style1 mb-3 w-100" style={{borderRadius: 15}} onClick={() => setShowscheduletour(true)}>Schedule a Tour</button>
                <button type="button" className="btn style2 contact_button w-100" style={{borderRadius: 15}}>Message Agent</button>
            </div>
        </div>
        <ScheduleTourModal 
            show={showscheduletour}
            onHide={handleScheduleModalClose}
        />
        <RequestSendModal
            show={showsrequest}
            onHide={() => setShowsrequest(false)}
        />
        </>
    )
}