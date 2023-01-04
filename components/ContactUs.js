import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import splitName from "../utils/splitName";
import fubApiCall from "../utils/FubApiCall";
import { fetchFubApi, fubApiBaseUrl } from "../utils/fubFetchApi";

export default function ContactUs({ type }) {
    const [isLoading, setIsLoading] = useState(false);
    const {pathname} = useRouter();
    const schema = yup.object().shape({
        contact_name: yup.string().required("Please enter fullname").label('Full Name'),
        contact_email: yup.string().email().required("Please enter email address").label('Email Address'),
        contact_subject: yup.string().required("Please enter your subject").label('Subject'),
        contact_message: yup.string().required("Please enter your enquiry").label('Message'),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const handleFUBLeads = async (contact_data) => {
        // console.log(data)
        setIsLoading(true)
        const {firstName, lastName} = splitName(contact_data.contact_name);
        // console.log(firstName, lastName)
        let leadObj = {
            person: {
              contacted: false,
              emails: [{isPrimary: true, type: 'work', value: contact_data.contact_email}],
              firstName: firstName,
              lastName: lastName,
              stage: 'Lead',
              sourceUrl: process.env.NEXT_PUBLIC_HOST_NAME+pathname
            },
            type: type? type : 'General Inquiry',
            system: 'NextJS',
            source: 'RushHome',
            message: contact_data.contact_message,
            description: 'subject: '+contact_data.contact_subject
        };

        try{
            const toastId = toast.loading('Loading...');
            const res = await fubApiCall(leadObj);
            if(res.status){
                toast.success("Request send");
            }else{
                toast.error("Failed to send, Error: "+res.message);
            }
            toast.dismiss(toastId);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
        };
        reset();
    }
    return (
      <>
        <Toaster />
        <div className="video-wrap video-bg-1 style2 bg-f ptb-100">
            <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                </div>
                <div className="col-xl-6 col-lg-6">
                <div className="content-title">
                    <h2>Need Help! Contact Us.</h2>
                    <hr className="center left" />
                    <p className="text-left">Our local experts are ready to guide you on your real estate journey. </p>
                </div>
                <div className="contact-form">
                    <form className="form-wrap" id="contactForm" onSubmit={handleSubmit(handleFUBLeads)}>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="contact_name" placeholder="Name*" id="contact_name" {...register('contact_name', {value: ""})} />
                                <span className="text-danger">{errors.contact_name?.message}</span>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" name="contact_email" id="contact_email" placeholder="Email*" {...register('contact_email', {value: ""})} />
                                <span className="text-danger">{errors.contact_email?.message}</span>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" name="contact_subject" placeholder="Subject*" id="contact_subject" {...register('contact_subject', {value: ""})} />
                                <span className="text-danger">{errors.contact_subject?.message}</span>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group v1">
                                <textarea name="contact_message" id="contact_message" placeholder="Your Messages.." cols={30} rows={10} {...register('contact_message', {value: ""})} />
                                <span className="text-danger">{errors.contact_message?.message}</span>
                            </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn style1 send_mess" disabled={isLoading}>{isLoading? 'Loading' : 'Send Message'}</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
      </>
    )
}