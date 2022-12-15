import { signIn } from "next-auth/react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from 'react'
import { useRouter } from "next/router"
import Notiflix from 'notiflix'

export default function Client() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    //form validations schema
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Enter valid email id.').required('Email id is required.'),
        password: Yup.string().required('Password is required.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    })
    //validation schema end

    const formOptionsLogin = { resolver: yupResolver(loginSchema) }
    const { register, formState: { errors }, handleSubmit, } = useForm(formOptionsLogin);

    const onSubmit = async formValue => {
        setIsLoading(true)
        Notiflix.Loading.standard('Please wait...');
        console.log(JSON.stringify(formValue));//print form data to console
        const res = await signIn('credentials',
        {
            email : formValue.email,
            password : formValue.password,
            callbackUrl: `${window.location.origin}/client/dashboard`,
            redirect: false,
        }
        )
        console.log('resss',res)
        if (res?.error) handleError(res.error)
        if (res.url) router.push(res.url);
    }

    const handleError = (err) => {
        console.log(err)
        setIsLoading(false)
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Please enter valid credentials');
    }

    return (
      <>
        <section className="pt-50 pb-75 client_sign">
            <div className="col-md-4 col-lg-4 col-xl-4 offset-lg-4">
                <div className="heading_login">
                <h2>Sign In</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="g-3">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" {...register("email")} className="form-control" id="inputEmail4" placeholder="Enter Email" />
                    <span style={{ color: 'red' }}>{errors.email?.message}</span>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" {...register("password")}  className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="inputPassword" placeholder="Enter Password" />
                    <span style={{ color: 'red' }}>{errors.password?.message}</span>
                </div>
                <div className="forgot_box"><Link href="#">Forgot Password?</Link></div>
                <div className="col-md-12 text-center">
                    <button type="submit" disabled={isLoading}  className="btn style1 button_agent">Login</button>
                </div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_agent" onClick={() => signIn("google", { callbackUrl: '/client/dashboard' })}><span className="googleicon"><img src="../../assets/img/googleicon.png" /></span>Continue with Google</button>
                </div>
                <p className="policy_content">Don’t have an account? <Link href="/signup">Sign up for free</Link></p>
                </form>
            </div>
        </section>
      </>
    )
}