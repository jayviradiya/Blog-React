import axios from 'axios'

import React, { useEffect, useState, } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoRemoveOutline } from "react-icons/io5";
import Footer from './Footer';


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
                <Row className='align-items-center py-sm-3 py-2 px-sm-3 px-0'>
                    <Col>
                        <img src="https://cdn-icons-png.flaticon.com/512/60/60736.png" alt="" className='lw' width={50} />
                        <span className='fw-bold res-txt2 ps-2'>Blogger</span>
                    </Col>
                    <Col className='justify-content-end d-flex'>
                        <Link to="/login" ><button className='button1'>LogIn</button></Link>
                    </Col>
                </Row>
            </Container>
            <Container className='topic'>
                <Row>
                    <h1 className='pb-2 res-txt'>Publish your passions, your way</h1>
                    <h4 className='pb-4 res-txt1'>Create a unique and beautiful blog easily.</h4>
                </Row>
                <Container>
                    <Link to="/login"> <button className='button'><span>Create</span></button></Link>
                </Container>
            </Container>
            <Container fluid className='bg-dark text-white mrg1 p-sm-0 p-2'>
                <div className='p-sm-5 p-3'>
                    <Row className='align-items-center'>
                        <Col className='col-sm-6 col-12 order-sm-1 order-2 mt-sm-0 mt-4'>
                            <h1 className='mb-sm-4 mb-2 res-txt3'>Choose the perfect design</h1>
                            <h5 className='jst-txt res-txt4'>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.</h5>
                        </Col>
                        <Col className='col-sm-6 col-12 order-sm-2 order-1 bshadow'>
                            <img src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post-760x406.jpeg" width="100%" alt="" />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className='bg-dark text-dark mrg'>
                <h2 className='text-white text-center pt-3 font-monospace'><IoRemoveOutline className='icon1' /> Blogs <IoRemoveOutline className='icon1' /></h2>
                <Container>
                    {/* blog = 1 */}
                    <div className="row d-flex g-3 py-4  align-items-center">
                        <hr className='text-white' />
                        <div className="col-lg-5 col-12">
                            <div className="">
                                <h3 className='fw-bold text-white d-sm-none mb-3 d-block res-txt3'>Best food for good health</h3>
                                <img className='w-100 imgradus' onClick={() => card()} src='https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className='ms-271 mt-2'>
                                <h3 className='fw-bold text-white d-sm-block d-none'>Best food for good health</h3>
                                <p className='text-white jst-txt res-txt4'>When it comes to maintaining a healthy lifestyle, proper nutrition plays a crucial role. Choosing the right foods can provide our bodies with essential nutrients, support our immune system, and boost our overall well-being. In this blog, we’ll explore a variety of wholesome foods that are not only delicious but also offer numerous health benefits. Join us on this culinary journey as we discover the best foods for optimal health.Choosing the right foods for optimal health doesn’t mean sacrificing taste or enjoyment. these wholesome options and make them a part of your daily routine. Your body will thank you as you embark on a journey towards better health and well-being.</p>
                            </div>
                        </div>
                    </div>
                    {/*blog = 2*/}
                    <div className="row d-flex g-3 py-4 align-items-center">
                        <hr className='text-white' />
                        <div className="col-lg-7 col-12 order-sm-1 order-2">
                            <div className='ms-271 mt-2'>
                                <h3 className='fw-bold text-white d-sm-block mb-3 d-none'>Gain weight at home</h3>
                                <p className='text-white jst-txt res-txt4'>If you’re looking to gain weight at home, there are several approaches you can take to achieve your goal. Here are some tips to help you gain weight in a healthy and controlled manner :<br />Increase calorie intake: To gain weight, you need to consume more calories than you burn. Calculate your daily calorie needs using an online calculator and aim to consume around 300-500 calories above that number.Remember, gaining weight in a healthy manner requires patience and consistency. Focus on a balanced diet and regular exercise to promote overall well-being while achieving your weight gain goals.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 order-sm-2 order-1">
                            <div className="">
                                <h3 className='fw-bold text-white d-sm-none mb-3 d-block'>Gain weight at home</h3>
                                <img className='w-100 imgradus' onClick={() => card()} src='https://hips.hearstapps.com/hmg-prod/images/young-woman-is-weighing-herself-in-a-weighing-scale-royalty-free-image-1688136307.jpg?crop=1xw:0.84691xh;center,top&resize=1200:*' alt="" />
                            </div>
                        </div>
                    </div>
                    {/*blog = 3*/}
                    <div className="row d-flex g-3 py-4 align-items-center">
                        <hr className='text-white' />
                        <div className="col-lg-5 col-12">
                            <div className="">
                                <h3 className='fw-bold text-white mb-3 d-sm-none d-block res-txt5'>WHY TRAVELLING IS IMPORTANT</h3>
                                <img className='w-100 imgradus' onClick={() => card()} src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*_Qr6Zjkt5nPobb2SBb8GHg.jpeg' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className='ms-271 mt-2'>
                                <h3 className='fw-bold text-white d-sm-block d-none res-txt5'>WHY TRAVELLING IS IMPORTANT</h3>
                                <p className='text-white jst-txt res-txt4'>Travel is important for people. We are social beings of the same species, but our environment determines social actions based on cultural and governmental laws. We are very similar, but our little worlds are completely different. Traveling to places outside our hometown is important to gaining a global trend. Whether someone goes home or abroad, it can be a lifelong reminder. The unfolding of these things allows us to have an open mind and to understand that although we are different, it is our humanity that brings us together. Travel is very good for the human race of the world.</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center py-sm-3 p-1'><Link to="/blog" className="text-decoration-none"><button class="cssbuttons-io-button">
                            Visit More
                            <div class="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                        </Link>
                        </div>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div >
    )
}

export default Home
