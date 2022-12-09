import { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/fa";

// const LeftArrow = () => {
//     const { scrollPrev } = useContext(VisibilityContext)
//     return (
//         <div className="justify-content-center align-items-center mr-1">
//             <span onClick={() => scrollPrev()}><IoIosArrowBack /></span>
//         </div>
//     )
// };

// const RightArrow = () => {
//     const { scrollNext } = useContext(VisibilityContext)
//     return (
//         <div className="justify-content-center align-items-center mr-1">
//             <span onClick={() => scrollNext()}><IoIosArrowForward /></span>
//         </div>
//     )
// };

function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);
  
    const dates = [];
  
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
}

export default function ScheduleTour() {

    const curdate = new Date();
    const dates = getAllDaysInMonth(curdate.getFullYear(), curdate.getMonth());
    const [showmodal, setShowmodal] = useState(false);
    const [schedule, setSchedule] = useState({});
    const [reqmodal, setReqmodal] = useState(false);

    const schema = yup.object().shape({
        schedule_date: yup.string().default(() => curdate.toISOString()).required().label('Schedule Date'),
        schedule_time: yup.string().default(() => (
            curdate.getHours()+':'+curdate.getMinutes()
        )).required().label('Schedule Time'),
        full_name: yup.string().required().label('Full Name'),
        schedule_email: yup.string().email().required().label('Email Address'),
        schedule_phone: yup.string().required().matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Enter a valid phone number"
        ).label('Phone Number'),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const handleScheduleTour = (data) => {
        // console.log(data)
        // reset()
        setSchedule(data);
        setShowmodal(true);
        // console.log("reqmodal: ",reqmodal)
        // console.log("showmodal: ",showmodal)
    }
    const handleModalClose = (respond) => {
        if(respond){
            setReqmodal(true);
        }
        setShowmodal(false);
        setSchedule({});
        //console.log(reqmodal)
        reset();
    }

    const ScheduleModal = () => (
        <div className={`modal fade ${showmodal? 'show' : ''}`} id="myModal" style={{display: (showmodal? 'block' : 'none')}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Request more information</h2>
                        <button type="button" className="btn-close" onClick={()=>(handleModalClose(0))} aria-label="Close"></button>
                    </div>
                    <div className="first_box second_box">
                        <h2>Tuesday, March 9th <br/>at 12:30 PM</h2>
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="inputEmail4" value={''} readOnly/>
                            </div>

                            <div className="col-12">
                                <div className="col-auto">
                                    <label className="form-label" for="autoSizingInputGroup">Phone Number</label>
                                    <div className="input-group">
                                        <div className="col-auto">
                                            <select className="form-select" id="autoSizingSelect">
                                                <option className="">Cell</option>
                                                <option className="1">One</option>
                                                <option className="2">Two</option>
                                                <option className="3">Three</option>
                                            </select>
                                        </div>
                                        <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="414-266-9847" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="john.doe@gmail.com" />
                            </div>

                            <label className="review">Reviews</label>
                            
                            <p className="agent_content">By pressing Request Showing, you agree that Rush Home and it’s real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. </p>
                            
                            <div className="col-12 text-center">
                                <button type="submit" className="btn style2 contact_button" onClick={()=>(handleModalClose(1))}>Request Showing</button>
                            </div>

                        </form>
                    </div> 
                </div>
            </div>
        </div>
    )

    const ScheduleRequestModal = () => (
        <div className={`modal fade ${reqmodal? 'show' : ''}`} id="requestModal" style={{display: (reqmodal? 'block' : 'none')}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h6 className="text-center">Request Send</h6>
                        <div className="col-12 text-center">
                            <button type="button" className="btn style2 contact_button" onClick={()=>(handleRequestModalClose())}>Close</button>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="form_wraper_box" id="schedule_box">
                <form onSubmit={handleSubmit(handleScheduleTour)}>
                    <div className="form-group mb-3">
                        {/* <div className="calenter_box">
                            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
                                {dates.map((item) => (
                                    <div className="day_box">
                                        <p>Tue</p>
                                        <h3>7</h3>
                                        <p>Mar</p> 
                                    </div>
                                ))}
                            </ScrollMenu>
                        </div> */}
                        <input type={'date'} className="form-control" name="schedule_date" id="schedule_date" { ...register('schedule_date') } />
                        <span className="text-danger">{errors.schedule_date?.message}</span>
                    </div>
                    <div className="form-group mb-3">
                        <input type={'time'} className="form-control" name="schedule_time" id="schedule_time" { ...register('schedule_time') } />
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
                        <input type={'number'} className="form-control" name="schedule_phone" id="schedule_phone" placeholder="Your Phone" { ...register('schedule_phone') } />
                        <span className="text-danger">{errors.schedule_phone?.message}</span>
                    </div>
                    <div className="for-group mb-3">
                        <button type="submit" className="btn style1">Schedule a Tour</button>
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </label>
                        </div>
                    </div>
                    
                </form>
            </div>
            <ScheduleModal />
            <ScheduleRequestModal />
            {/* {reqmodal && <ScheduleRequestModal />} */}
        </>
    )
}