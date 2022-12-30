
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function RequestInfo({ address, onInit, fubObj }) {
    const {data: session} = useSession();
    const router = useRouter();
    const schema = yup.object().shape({
        // phone_code: yup.string().required().label('Phone Code'),
        full_name: yup.string().required("Please enter your fullname").label('Full Name'),
        request_email: yup.string().email().required("Please enter your email address").label('Email Address'),
        request_phone: yup.string().required(({value}) => {
            // console.log("Val:", value);
            if(!value || value?.length === 0){
                return "Please enter your phone number";
            }else if((typeof value === 'string') && (isPossiblePhoneNumber(value) === false)){
                return "Please enter valid phone number";
            }
        }).label('Phone Number'),
    });
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        resolver: yupResolver(schema),
    });

    const handleRequestInfo = (data) => {
        // if(session){

        // }else{
        //     localStorage.setItem('overridePath', '/property/'+slug);
        //     localStorage.setItem('request_info', data);
        //     router.push('/auth')
        // }
        console.log(data)
        reset();
    }
    useEffect(()=>{
        if(onInit){
            reset()
        }
    }, [onInit]);
    return (
        <div className="form_wraper_box container">
            <h5 className="text-center">Request more information</h5>
            <hr className="my-3" />
            <form className="row g-3" onSubmit={handleSubmit(handleRequestInfo)}>
                <div className="col-md-12">
                    <label htmlFor="full_name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="full_name" name="full_name" { ...register('full_name') } />
                    <span className="text-danger">{errors.full_name?.message}</span>
                </div>

                <div className="col-12">
                    <div className="col-auto">
                        <label className="form-label" htmlFor="request_phone">Phone Number</label>
                        <Controller
                            name="request_phone"
                            control={control}
                            className="form-control"
                            { ...register('request_phone') }
                            render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                    placeholder="414-266-9847"
                                    defaultCountry="US"
                                    value={value}
                                    onChange={onChange}
                                    id="request_phone"
                                />
                            )}
                        />
                        
                        {/* <div className="input-group">
                            <div className="col-auto">
                                <select className="form-select" name="phone_code" id="phone_code" { ...register('phone_code') }>
                                    <option value=""></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <input type="text" className="form-control" name="request_phone" id="request_phone" placeholder="414-266-9847" { ...register('request_phone') } />
                        </div> */}
                        <span className="text-danger">{errors.request_phone?.message}</span>
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="request_email" className="form-label">Email Address</label>
                    <input type="text" className="form-control" id="request_email" name="request_email" placeholder="john.doe@gmail.com" { ...register('request_email') } />
                    <span className="text-danger">{errors.request_email?.message}</span>
                </div>

                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="request_message" className="form-label">Message</label>
                        <textarea className="form-control" placeholder="Leave a comment here" name="request_message" id="request_message" style={{height: '100px'}} value={`I would like more information on ${address}`} { ...register('request_message') }/>
                        <span className="text-danger">{errors.request_message?.message}</span>
                    </div>
                </div>
                
                <p className="agent_content">By clicking &apos;contact agent&apos; you agree that Rush Home, it&apos;s affiliates or associated third parties may contact you, including with calls or texts by automated means. You also agree to our Terms of Service and Privacy Policy. Message/data rates may apply. Consent is not a condition to access real estate services.</p>
                
                <div className="col-12 text-center">
                    <button type="submit" className="btn style2 contact_button">Contact Agent</button>
                </div>

            </form>
        </div>
    )
}