import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


function Signup() {

    const history = useHistory()

    const UsignUp = async(values) => {
        axios.post('https://blog-node-q2al.onrender.com/user/signup', values)
            .then((res) => {
                console.log(res.data.data);
                history.push('/login')
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    return (
        <div>
            <div className='d-flex justify-content-center p-sm-5 p-4 bg1'>
                <div className='box'>
                    <h1 className='text-center mt-sm-5 mt-3'>SignUp</h1>
                    <Formik
                        initialValues={{
                            uname: '',
                            email: '',
                            pass: '',
                        }}
                        onSubmit={async (values) => {
                            UsignUp(values)
                        }}>

                        <Form className='text-center mt-5'>
                            <Field id="firstName" name="uname" placeholder="UserName" className="rounded-pill border-1 ps-sm-4 ps-2 pt-2 pe-sm-5 pe-3 pb-2" /><br /><br />

                            <Field id="email" name="email" placeholder="Email" type="email" className="rounded-pill border-1 ps-sm-4 ps-2 pt-2 pe-sm-5 pe-3 pb-2" /><br /><br />

                            <Field id="password" name="password" placeholder="Password" type="pass" className="rounded-pill border-1 ps-sm-4 ps-2 pt-2 pe-sm-5 pe-3 pb-2" /><br /><br />

                            <button className="button1 mb-3" type="submit">SignUp</button><br />
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Signup