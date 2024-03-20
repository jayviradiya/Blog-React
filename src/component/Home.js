import axios from 'axios'

import React, { useEffect, useState, } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Home = () => {


    const [blog, setBlog] = useState([])

    const history = useHistory()

    const getBlog = () => {
        axios.get('https://blog-node-q2al.onrender.com/blog/find')
            .then((res) => {
                console.log(res.data.data);
                setBlog(res.data.data)
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

        useEffect(() => {
            getBlog()
        }, [])

    const card = (id) => {
        console.log(id);
        localStorage.setItem('blogid', id)
        history.push('/blog')
    }

    return (
        <div className='bg'>
            <Container fluid className='pt-2'>
                <Row>
                    <Col>
                        <img src="https://cdn-icons-png.flaticon.com/512/60/60736.png" alt="" height={50} />
                        <span className='fw-bold fs-5 ps-2'>Blogger</span>
                    </Col>
                    <Col className='justify-content-end d-flex m-3'>
                        <Link to="/blog" ><button className='button1'>Blogs</button></Link>
                    </Col>
                </Row>
            </Container>
            <Container className='topic'>
                <Row>
                    <h1 className='pb-2'>Publish your passions, your way</h1>
                    <h4 className='pb-4'>Create a unique and beautiful blog easily.</h4>
                </Row>
                <Container>
                    <Link to="/login"> <button className='button'><span>Create</span></button></Link>
                </Container>
            </Container>
            <div className='container-fluid bg-white text-dark mrg'>
                <div className="container">
                    <div className="row d-flex g-5">
                        {
                            blog.map((el, index) => {
                                return <div className="d-flex box1" key={index} >
                                    <div className="col-5">
                                        <div className="">
                                            <img className='w-100 p-5 imgradus' onClick={() => card(el._id)} src={'https://blog-node-q2al.onrender.com/images/' + el.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className='ms-271 mt-5'>
                                            <h3 className='fw-bold'>{el.title}</h3>
                                            <p>{el.description}</p>
                                            <div>
                                                <span onClick={() => card(el._id)} className="text-dark details fw-bold">Read More..!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home