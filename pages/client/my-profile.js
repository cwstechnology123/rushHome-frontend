import Image from 'next/image'
import Sidebar from '../../components/client/Sidebar'
import { useSession } from "next-auth/react"
import ProfileLoader from "../../components/skeletonLoader/ProfileLoader";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import React, { useState, useEffect } from 'react'
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import splitName from "../../utils/splitName";
import { handleSuccess, handleError } from "../../utils/notify";
import axios from 'axios';

export default function MyProfile() {
    const [userData, setUserData] = useState(null);
    const [isLoader, setIsLoader] = useState(false)
    const { data: session, loading } = useSession()
    useEffect( () => {
        console.log(session)
        setIsLoader(true)
        if(session && !loading){
            getUserData();
        }
    }, [session, loading]);

    useEffect( () => {
        setIsLoader(false)
    }, [userData]);

    async function getUserData() {
        const userId = session && session.user?.userId
        const accessToken = session && session.user?.accessToken;
        let payload = {url : `${apiBaseUrl}/users/profile/${userId}`, accessToken: accessToken, method : 'GET'}
        let response = await fetchApi(payload);
        if(response && response.data){
            const profile = response.data.profile
            const {firstName, lastName} = splitName(profile.full_name);
            setValue("first_name", firstName)
            setValue("last_name", lastName)
            setValue("phone_number", profile.phone_number)
            setUserData({...profile, first_name : firstName, last_name: lastName})
            console.log(userData)
        }
        else{
            setIsLoader(false)
            setUserData(null)
        }
    }

     //form schema 
     const Schema = Yup.object().shape({
        first_name: Yup.string().required('First Name is required.'),
        last_name: Yup.string().required('Last Name is required.'),
        phone_number: Yup.string().required(({value}) => {
            // console.log("Val:", value);
            if(!value || value?.length === 0){
                return "Phone number is required";
            }else if((typeof value === 'string') && (isPossiblePhoneNumber(value) === false)){
                return "Please enter valid phone number";
            }
        }).matches(
            /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g,
                "Please enter valid phone number"
        ).label('Phone Number'),
    })
    //validation schema end

    const formOptions = { resolver: yupResolver(Schema) }
    const { register, setValue, formState: { errors }, handleSubmit } = useForm(formOptions);

    //signup submit handler
    const onSubmit = async formValue => {
        setIsLoader(true)
        const userId = session && session.user?.userId
        const accessToken = session && session.user?.accessToken;
        try{
            let updateData = {
                full_name : `${formValue.first_name} ${formValue.last_name}`,
                phone_number : formValue.phone_number
            }
            const payload = {url : `${apiBaseUrl}/users/updateProfile/${userId}`, accessToken: accessToken, method : 'POST', data : updateData}
            const res = await fetchApi(payload)
            setIsLoader(false)
            if (res && res.type == 'error') handleError(res.message)
            if (res && res.type == 'success') {
                await axios.get('/api/auth/session?update');
                handleSuccess(res.message)
            }
        } catch (error) {
            setIsLoader(false)
            console.log(error)
            handleError('Something went wrong! Please try again.')
            return false;
        };
    }

    if (session && session.user.role === "client") {
        return (
            <>
                <section className="pt-50 pb-75 myprofile_box">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9 col-lg-9 col-xl-9">
                            <div className="personal_box">
                            <div className="personal_wrpaer">
                                <h2>Personal Info</h2>
                                {/* <p>Photo</p> */}
                                <div className="profile_box">
                                <ul>
                                    <li className="profile_pic">
                                    {session && !loading && session.user && session.user.image? 
                                    <>
                                        {/* <img src={session.user.image} alt="Image"/> */}
                                        {session.user.name.charAt(0)}
                                    </>
                                    :
                                    <>
                                        {session.user.name.charAt(0)}
                                    </>
                                    }
                                    </li>
                                    {/* <li>
                                    <button type="button" className="btn style1">Upload</button>
                                    </li>
                                    <li><button type="button" className="btn style3">Remove</button></li> */}
                                </ul>
                                </div>
                            </div>
                            <div className="form_wraper">
                                <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                    <input type="text" className="form-control" {...register("first_name")} id="inputEmail4" placeholder='First Name' />
                                    <span className="text-danger">{errors.first_name?.message}</span>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor className="form-label">Last Name</label>
                                    <input type="text" className="form-control" {...register("last_name")} id="last_name" placeholder='Last Name'/>
                                    <span className="text-danger">{errors.last_name?.message}</span>
                                </div>
                                <div className="col-12">
                                    <div className="col-auto">
                                    <label className="visually-hidden" htmlFor="autoSizingInputGroup">414-266-9847</label>
                                    <div className="input-group">
                                        <div className="col-auto">
                                        <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                        <select className="form-select" id="autoSizingSelect">
                                            <option selected>Cell</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                        </div>
                                        <input type="text" className="form-control" {...register("phone_number")} id="autoSizingInputGroup" placeholder="Enter Phone number" maxLength={10} />
                                    </div>
                                    <span className="text-danger">{errors.phone_number?.message}</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Email Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="example@gmail.com" value={session && !loading? session.user.email : '' } disabled/>
                                </div>
                                <div className="col-12">
                                    <div className="form_content">
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Reviews
                                    </label>
                                    <p>Manage the reviews you&#39;ve written for professionals and more.</p>
                                    <span>Manage</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" disabled={isLoader} className="btn style1 button_save">Save changes</button>
                                </div>
                                </form>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    else{
        return (
            isLoader || loading ? 
            <>
                <ProfileLoader />
            </> : 
            <section className="pt-50 pb-75 myprofile_box">
                <div className="container">
                    <div className="row text-center">
                        <h1>You are not authorized to view this page!</h1>
                    </div>
                </div>
            </section>
        )
    }
}