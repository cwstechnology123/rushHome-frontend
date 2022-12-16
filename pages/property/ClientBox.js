import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { MdSquareFoot } from "react-icons/md";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ClientBox({ type, address, price, pricearea, amenity }) {

    const [showscheduletour, setShowscheduletour] = useState(false);
    const curdate = new Date();

    const schema = yup.object().shape({
        // schedule_date: yup.string().default(() => curdate.toISOString()).required().label('Schedule Date'),
        // schedule_time: yup.string().default(() => (
        //     curdate.getHours()+':'+curdate.getMinutes()
        // )).required().label('Schedule Time'),
        schedule_datetime: yup.string().required().label('Date-Time'),
        full_name: yup.string().required().label('Full Name'),
        schedule_email: yup.string().email().required().label('Email Address'),
        schedule_phone_prefix: yup.string().required().label('Phone Prefix'),
        schedule_phone: yup.string().required().matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Enter a valid phone number"
        ).label('Phone Number'),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const ScheduleTourModal = () => (
        <div className={`modal fade ${showscheduletour? 'show' : ''}`} id="scheduleModal" style={{display: (showscheduletour? 'block' : 'none')}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Schedule a Tour with Your Agent</h2>
                        <button type="button" className="btn-close" onClick={() => setShowscheduletour(false)} aria-label="Close"></button>
                    </div>
                    <div className="first_box second_box">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label">DateTime</label>
                                <input type="datetime-local" className="form-control" name="schedule_datetime" id="schedule_datetime" {...register('schedule_datetime')} />
                                <span className="text-danger">{errors.schedule_datetime?.message}</span>
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="full_name" id="full_name" placeholder="Full Name" {...register('full_name')} />
                                <span className="text-danger">{errors.full_name?.message}</span>
                            </div>
                            <div className="col-12">
                                <div className="col-auto">
                                    <label className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <div className="col-auto">
                                            <select className="form-select" id="autoSizingSelect" {...register('schedule_phone_prefix')}>
                                                <option className="">Cell</option>
                                                <option className="1">One</option>
                                                <option className="2">Two</option>
                                                <option className="3">Three</option>
                                            </select>
                                        </div>
                                        <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="414-266-9847" {...register('schedule_phone')} />
                                    </div>
                                    <span className="text-danger">{errors.schedule_phone_prefix?.message}{errors.schedule_phone?.message}</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Email Address</label>
                                <input type="text" className="form-control" name="schedule_email" id="schedule_email" placeholder="john.doe@gmail.com" {...register('schedule_email')} />
                                <span className="text-danger">{errors.schedule_email?.message}</span>
                            </div>

                            <label className="review">Reviews</label>
                            <p className="agent_content">By pressing Request Showing, you agree that Rush Home and it’s real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. </p>
                            
                            <div className="col-12 text-center">
                                <button type="submit" className="btn style2 contact_button">Request Showing</button>
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
                                <h3>{amenity.beds}</h3>
                            </div>
                        </li>
                        <li>
                            <span className="icon-box"><MdSquareFoot/></span>
                            <div className="icon-facts">
                                <span>SQFT</span>
                                <h3>{parseFloat(amenity.area).toFixed(0)}</h3>
                            </div>
                        </li>
                        <li>
                            <span className="icon-box"><FaBath/></span>
                            <div className="icon-facts">
                                <span>Bathrooms</span>
                                <h3>{amenity.baths}</h3>
                            </div>
                        </li>
                        <li>
                            <span className="icon-box"><GiHomeGarage/></span>
                            <div className="icon-facts">
                                <span>Garage</span>
                                <h3>{amenity.garages}</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <button type="button" className="btn style1 mb-3 w-100" style={{borderRadius: 15}} onClick={() => setShowscheduletour(true)}>Schedule a Tour</button>
                <button type="button" className="btn style2 contact_button w-100" style={{borderRadius: 15}}>Message Agent</button>
            </div>
        </div>
        <ScheduleTourModal/>
        </>
    )
}