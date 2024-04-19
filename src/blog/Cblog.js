import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Container } from 'react-bootstrap';
import { IoIosArrowRoundBack } from "react-icons/io";



const Cblog = () => {

    const [data, setData] = useState([]);
    const [initialValues, setInitialValues] = useState([]);
    const [row, setRow] = useState(null);

    const history = useHistory()

    let usertoken = localStorage.getItem('usertoken')
    if(!usertoken){
        history.push('/login')
    }

    function update(id) {
        axios.get('https://blog-node-q2al.onrender.com/contact/findone/' + id)
            .then((res) => {
                setInitialValues(res.data.data)
                setRow(id)
            })
            .catch((error) => {
                console.log("error", error.response.data.message);
            })
    }


    const BlogData = (values) => {

        const form = new FormData();
        form.append('image', values.image);
        form.append('title', values.title);
        form.append('description', values.description);

        axios.post('https://blog-node-q2al.onrender.com/blog/create', form,
            {
                headers: {
                    usertoken: usertoken,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log(res.data.data);
                history.push('/blog')
            })
            .catch((error) => {
                console.log(error.response);
            })

    }
    return (
       <Container fluid className='bg1 p-0'>
            <Container>
            <a className='fs-1 text-dark ps-3' href='/'><IoIosArrowRoundBack className='bg-light rounded shadow mt-5'/></a>
            <div className='d-flex justify-content-center align-items-center p-0'>
            <div className="box_1 p-sm-5 p-3">
                <h1 className='res-txt5 fw-bold'>Create Blog </h1>
                <Formik
                    initialValues={{
                        image: '',
                        title: '',
                        description: '',
                    }}
                    onSubmit={async (values) => {
                        BlogData(values)
                    }}
                >
                    {
                        (props) => (
                            <Form className='d-flex flex-column p-2'>
                                <label htmlFor="image" className='fw-bold res-txt7'>Image</label>
                                <input type="file" className='in-gov' onChange={(e) => props.setFieldValue("image", e.target.files[0])} />
                                <span><ErrorMessage name='image' /><br></br></span>

                                <label htmlFor="title" className='fw-bold res-txt7'>Title</label>
                                <Field id="title" className='in-gov' name="title" placeholder="title" />
                                <span><ErrorMessage name='title' /><br></br></span>

                                <label htmlFor="description" type="text-box" className='fw-bold res-txt7'>Description</label>
                                <Field id="description" className='in-gov' name="description" placeholder="description" />
                                <span> <ErrorMessage name='description' /><br></br></span>

                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className='button submit'>Submit</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
            </Container>
       </Container>
    )
}

export default Cblog