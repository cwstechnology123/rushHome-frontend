import { signIn } from "next-auth/react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { handleSuccess, handleError, handleLoading } from "../../utils/notify";

export default function Client() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const [redirectUrl, setRedirectUrl] = useState('/homes-for-sale/delaware-de');
    useEffect(()=>{
        let newPath = '';
        if(localStorage.getItem('overridePath') !== null){
            newPath = localStorage.getItem('overridePath');
            localStorage.removeItem('overridePath');
        }
        if(newPath){
            setRedirectUrl(newPath);
        }
    }, []);
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
    console.log(redirectUrl)
    const formOptionsLogin = { resolver: yupResolver(loginSchema) }
    const { register, formState: { errors }, handleSubmit } = useForm(formOptionsLogin);

    const onSubmit = async formValue => {
        setIsLoading(true)
        handleLoading('Please wait...');
        // console.log(JSON.stringify(formValue));//print form data to console
        const res = await signIn('credentials',
            {
                email : formValue.email,
                password : formValue.password,
                callbackUrl: `${process.env.NEXT_PUBLIC_HOST_NAME}${redirectUrl}`,
                redirect: false,
            }
        )
        // console.log('resss',res)
        setIsLoading(false)
        if (res?.error) handleError(res.error)
        if (res.url) {
            handleSuccess("Login Successfully!")
            router.push(res.url)
        }
    }

    return (
      <>
      {/* client_sign */}
        <section className="pt-50 pb-75 ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div className="heading_login">
                        <h2>Sign In</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="g-3" autoComplete="off">
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
                            <button type="submit" disabled={isLoading} className="btn style1 button_agent">Login</button>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="button" className="btn style1 button_agent" onClick={() => signIn("google", { callbackUrl: `${process.env.NEXT_PUBLIC_HOST_NAME}${redirectUrl}`})}><span className="googleicon"><img src="../../assets/img/googleicon.png" /></span>Continue with Google</button>
                        </div>
                        <p className="policy_content">Don’t have an account? <Link href="/signup">Sign up for free</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            
            
        </section>
      </>
    )
}