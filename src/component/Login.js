import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { IoIosArrowRoundBack } from "react-icons/io";



function Login() {

    const history = useHistory()
    let userToken = localStorage.getItem('usertoken')
    if (userToken) {
        history.push('/blog/create')
    }

    const Ulogin = async(values) => {
        await axios.post('https://blog-node-q2al.onrender.com/user/login', values)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('usertoken', res.data.usertoken)
                history.push('/')
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }


    return (
        <div className='d-flex justify-content-center p-sm-5 p-4 bg1'>
            <div className='box'>
                <h1 className='text-center pt-4 mt-sm-5 mt-3'>LogIn</h1>
                <Formik
                    initialValues={{
                        email: '',
                        pass: '',
                    }}
                    onSubmit={async (values) => {
                        Ulogin(values)
                    }}>

                    <Form className='text-center mt-5'>
                        {/* <Field id="firstName" name="uname" placeholder="UserName" className="rounded-pill border-1 ps-4 pt-2 pe-5 pb-2" /><br/><br/> */}

                        <Field id="email" name="email" placeholder="Email" type="email" className="rounded-pill border-1 ps-sm-4 ps-2 pt-2 pe-sm-5 pe-2 pb-2" /><br /><br />

                        <Field id="password" name="password" placeholder="Password" type="pass" className="rounded-pill border-1 ps-sm-4 ps-2 pt-2 pe-sm-5 pe-2 pb-2" /><br /><br />

                        <button className="button1 mb-3" type="submit">Login</button><br />
                        <span className='fs-6'>Don't have an account?<a href="/signup" className='fw-bold text-decoration-none'> Sign Up </a></span>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login