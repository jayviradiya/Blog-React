import axios from 'axios'

import React, { useEffect, useState, } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { VscFeedback } from "react-icons/vsc";
import { IoRemoveOutline } from "react-icons/io5";


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
                        <Col className='col-sm-6 col-12 order-sm-2 order-1'>
                            <img src="https://i0.wp.com/hirewebdesignagency.com/wp-content/uploads/2023/09/webb-designn-bennr.png?w=1000&ssl=1" width="100%" alt="" />
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
                        <div className="col-lg-7 col-12">
                            <div className='ms-271 mt-2'>
                                <h3 className='fw-bold text-white'>Gain weight at home</h3>
                                <p className='text-white jst-txt res-txt4'>If you’re looking to gain weight at home, there are several approaches you can take to achieve your goal. Here are some tips to help you gain weight in a healthy and controlled manner :<br />Increase calorie intake: To gain weight, you need to consume more calories than you burn. Calculate your daily calorie needs using an online calculator and aim to consume around 300-500 calories above that number.Remember, gaining weight in a healthy manner requires patience and consistency. Focus on a balanced diet and regular exercise to promote overall well-being while achieving your weight gain goals.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="">
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
            <Container fluid className='bg-dark text-white mt-5 pb-5'>
                <Container>
                    <Row className='pt-3'>
                        <Col className='col-sm-3 col-6  py-sm-5 py-2'>
                            <ul className='p-0 list-unstyled lh-lg'>
                                <h4 className='fw-bold mb-sm-4 mb-2 res-txt8'>Help</h4>
                                <li className='fn-color res-txt7'>Help Center</li>
                                <li className='fn-color res-txt7'>Help Forum</li>
                                <li className='fn-color res-txt7'>Video Tutorials</li>
                            </ul>
                        </Col>
                        <Col className='col-sm-3 col-6 py-sm-5 py-2 d-flex justify-content-sm-start justify-content-end'>
                            <ul className='p-0 list-unstyled lh-lg'>
                                <h4 className='fw-bold mb-sm-4 mb-2 res-txt8'>Community</h4>
                                <li className='fn-color res-txt7'>Blogger Buzz</li>
                            </ul>
                        </Col>
                        <Col className='col-sm-6 col-12 py-sm-5 py-2 d-flex justify-content-sm-start justify-content-end'>
                            <ul className='p-0 list-unstyled lh-lg'>
                                <h4 className='fw-bold mb-sm-4 mb-2 res-txt8'>Developers</h4>
                                <li className='fn-color res-txt7'>Blogger API</li>
                                <li className='fn-color res-txt7'>Developer Forum</li>
                            </ul>
                        </Col>
                        <hr className='text-white' />
                        <Row className='pt-4 d-flex'>
                            <Col className='col-md-6 col-12'>
                                <ul className='d-flex list-unstyled'>
                                    <li className='pe-sm-2 pe-lg-3 pe-1 res-txt6 fn-color'>Terms of Service</li>
                                    <li className='pe-sm-2 pe-lg-3 pe-1 res-txt6'>|</li>
                                    <li className='pe-sm-2 pe-lg-3 pe-1 res-txt6 fn-color'>Privacy</li>
                                    <li className='pe-sm-2 pe-lg-3 pe-1 res-txt6'>|</li>
                                    <li className='pe-sm-2 pe-lg-3 pe-1 res-txt6 fn-color'>Content Policy</li>
                                </ul>
                            </Col>
                            <Col className='col-md-6 col-12 d-flex justify-content-md-end justify-content-start'>
                                <div><input type="text" placeholder='Feedback' className='me-2 fs-6' /><VscFeedback className='fs-4' /></div>
                            </Col>
                        </Row>

                    </Row>
                </Container>
            </Container>
        </div >
    )
}

export default Home




{
    // blog.map((el, index) => {
    //     return <div key={index} className='mb-5 col-4'>
    //         <Card style={{ width: '24 rem' }} className='box1'>
    //      <Card.Img variant="top" onClick={() => card(el._id)} src={'https://blog-node-q2al.onrender.com/images/' + el.image}/>
    //      <Card.Body>
    //       <div className='ms-271'>
    //       <Card.Title className='fw-bold'>{el.title}</Card.Title>
    //        <Card.Text>{el.description}</Card.Text>
    //        <div><span onClick={() => card(el._id)} className="text-dark details fw-bold">Read More..!</span></div>
    //       </div>
    //      </Card.Body>
    //    </Card>
    //     </div>
    // })
}