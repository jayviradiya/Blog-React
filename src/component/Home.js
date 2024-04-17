import axios from 'axios'

import React, { useEffect, useState, } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                        <Link to="/blog" ><button className='button1'>Blogs</button></Link>
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
            <Container fluid className='bg-dark text-white mrg1'>
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
            <div className='container-fluid bg-dark text-dark mrg '>

                <div className="container">
                    <div className="row d-flex g-5">
                        {
                            blog.map((el, index) => {
                                return <div key={index} className='mb-5 col-4'>
                                 {/* <Card style={{ width: '24 rem' }} className='box1'>
                                 <Card.Img variant="top" onClick={() => card(el._id)} src={'https://blog-node-q2al.onrender.com/images/' + el.image}/>
                                 <Card.Body>
                                  <div className='ms-271'>
                                  <Card.Title className='fw-bold'>{el.title}</Card.Title>
                                   <Card.Text>{el.description}</Card.Text>
                                   <div><span onClick={() => card(el._id)} className="text-dark details fw-bold">Read More..!</span></div>
                                  </div>
                                 </Card.Body>
                               </Card> */}
                               <div className='row'>
                                    <div className='col-6'>
                                        <img src="" alt="" />
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




{/* <div className="col-5">
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
                                    </div> */}