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

    const schema = yup.object().shape({
        schedule_time: yup.string().default(`${curdate.getHours()+':'+curdate.getMinutes()}`).required().label('Schedule Time'),
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
        console.log(data)
    }

    return (
        <>
            <div className="form_wraper_box">
                <form onSubmit={handleSubmit(handleScheduleTour)}>
                    <div className="form-group mb-3">
                        <div className="calenter_box">
                            {/* <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
                                {dates.map((item) => (
                                    <div className="day_box">
                                        <p>Tue</p>
                                        <h3>7</h3>
                                        <p>Mar</p> 
                                    </div>
                                ))}
                            </ScrollMenu> */}
                        </div>
                        
                        <span className="text-danger">{errors.schedule_time?.message}</span>
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
                        <button type="submit" className="btn style1" data-bs-toggle="modal" data-bs-target="#exampleModal">Schedule a Tour</button>
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </label>
                        </div>
                    </div>
                    
                </form>
            </div>
        </>
    )
}