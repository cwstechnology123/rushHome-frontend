import Link from "next/link";
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from 'react'
import { useRouter } from "next/router"
import { apiBaseUrl, fetchApi } from '../utils/fetchApi'
import { handleSuccess, handleError, handleLoading } from "../utils/notify";
import splitName from "../utils/splitName";
import { sendFubLeads } from "../utils/fubApiCall";

export default function SignUp() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)

    //form validations schema 
    const signupSchema = Yup.object().shape({
        full_name: Yup.string().required('Full name is required.'),
        email: Yup.string().email('Enter valid email id.').required('Email id is required.'),
        password: Yup.string().required('Password is required.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        confirm_password: Yup.string().required('Confirm password is required.').oneOf([Yup.ref('password')], 'Passwords does not match.'),
    })
    //validation schema end

    const formOptions = { resolver: yupResolver(signupSchema) }
    const { register, formState: { errors }, handleSubmit } = useForm(formOptions);

    //signup submit handler
    const onSubmit = async formValue => {
        setIsLoading(true)
        handleLoading('Please wait...');
        try{
            const payload = {url : `${apiBaseUrl}/signup`, method : 'POST', data : formValue}
            const res = await fetchApi(payload)
            setIsLoading(false)
            if (res && res.type == 'error') handleError(res.message)
            if (res && res.type == 'success') {
                const {firstName, lastName} = splitName(formValue.full_name);
                let leadObj = {
                    person: {
                      contacted: false,
                      emails: [{isPrimary: true, type: 'work', value: formValue.email}],
                      firstName: firstName,
                      lastName: lastName,
                      stage: 'Lead',
                      sourceUrl: `${process.env.NEXT_PUBLIC_HOST_NAME}/signup`,
                      source: 'RushHome',
                    },
                    type: 'Registration',
                    system: 'NextJS',
                    source: 'RushHome',
                };
                let respond = await sendFubLeads(leadObj);
                // if(res.status){
                //     let fub_id = res.message.id;
                //     console.log(fub_id)
                // }
                handleSuccess(res.message)
                router.push('/auth/client-signin')
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            handleError('Something went wrong! Please try again.')
            return false;
        };
    }

  return (
    <>
    {/*  */}
        <section className="pt-50 pb-75 ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12 client_sign">
                        <div className="heading_login">
                            <h2>Sign Up</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="g-3" autoComplete="off">
                        <div className="col-md-12">
                            <div className="form-group mb-2">
                                <label htmlFor="full_name" className="form-label">Name</label>
                                <input type="text" className="form-control" {...register("full_name")} id="full_name" placeholder="Full Name" />
                                <span className="text-danger">{errors.full_name?.message}</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-2">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control"  {...register("email")} id="email" placeholder="Email"/>
                                <span className="text-danger">{errors.email?.message}</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-2">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register("password")} id="password" placeholder="Create Password" />
                                <span className="text-danger">{errors.password?.message}</span>
                            </div>
                            
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-2">
                                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register("confirm_password")} id="confirm_password" placeholder="Confirm Password" />
                                <span className="text-danger">{errors.confirm_password?.message}</span>
                            </div>
                        </div>
                        <div className="col-md-12 text-center mb-3">
                            <button type="submit" disabled={isLoading} className="btn style1 button_agent w-100">Sign Up</button>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="button" className="btn style1 button_agent w-100" onClick={() => signIn("google", { callbackUrl: '/client/dashboard' })}><span className="googleicon"><img src="assets/img/googleicon.png" /></span>Continue with Google</button>
                        </div>
                        <p className="policy_content">Already have an account? <Link href="/auth"> Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}