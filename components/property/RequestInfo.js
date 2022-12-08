
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RequestInfo({ address }) {
    const schema = yup.object().shape({
        phone_code: yup.string().required().label('Phone Code'),
        full_name: yup.string().required().label('Full Name'),
        request_email: yup.string().email().required().label('Email Address'),
        request_phone: yup.string().required().matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Enter a valid phone number"
        ).label('Phone Number'),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const handleRequestInfo = (data) => {
        console.log(data)
        reset();
    }
    return (
        <div className="first_box second_box">
          <h2>Request more information</h2>
            <form className="row g-3" onSubmit={handleSubmit(handleRequestInfo)}>
                <div className="col-md-12">
                    <label for="" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="full_name" name="full_name" { ...register('full_name') } />
                    <span className="text-danger">{errors.full_name?.message}</span>
                </div>

                <div className="col-12">
                    <div className="col-auto">
                    <label className="form-label" for="phone_code">Phone Number</label>
                    <div className="input-group">
                        <div className="col-auto">
                            <select className="form-select" name="phone_code" id="phone_code" { ...register('phone_code') }>
                                <option value=""></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <input type="text" className="form-control" name="request_phone" id="request_phone" placeholder="414-266-9847" { ...register('request_phone') } />
                        
                    </div>
                    <span className="text-danger">{errors.phone_code?.message || errors.request_phone?.message}</span>
                </div>
                </div>
                <div className="col-12">
                    <label for="request_email" className="form-label">Email Address</label>
                    <input type="text" className="form-control" id="request_email" name="request_email" placeholder="john.doe@gmail.com" { ...register('request_email') } />
                    <span className="text-danger">{errors.request_email?.message}</span>
                </div>

                <div className="col-12">
                    <div className="form-group">
                        <label for="request_message" className="form-label">Message</label>
                        <textarea className="form-control" placeholder="Leave a comment here" name="request_message" id="request_message" style={{height: '100px'}} value={`I would like more information on ${address}`} { ...register('request_message') }/>
                        <span className="text-danger">{errors.request_message?.message}</span>
                    </div>
                </div>
                
                <p className="agent_content">By clicking "contact agent" you agree that Rush Home, it’s affiliates or associated third parties may contact you, including with calls or texts by automated means. You also agree to our Terms of Service and Privacy Policy. Message/data rates may apply. Consent is not a condition to access real estate services.</p>
                
                <div className="col-12 text-center">
                    <button type="submit" className="btn style2 contact_button">Contact Agent</button>
                </div>

            </form>
      </div>
    )
}