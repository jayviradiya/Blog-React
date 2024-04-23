import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";



import { Link, Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../component/Footer';

function Blog() {

  const history = useHistory()
  const [data, setData] = useState([])
  const [blog, setBlog] = useState([])

  let id = localStorage.getItem('blogid')

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

  const getBlogone = () => {
    axios.get('https://blog-node-q2al.onrender.com/blog/findone/'+id)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getBlog();
  }, [])

  // delete
  const Delet = (id) => {
    axios.delete('https://blog-node-q2al.onrender.com/blog/delete/' + id)
      .then((res) => {
        history.push('/blog');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  const card = (id) => {
    console.log(id);
    localStorage.setItem('blogid',id)
    // history.push('/blog')
  }

  // Update
  const Update = (id) => {
    history.push('/blog/create')
  }

  useEffect(() => {
    getBlogone()
  }, [])



  return (
    <div className="bg">
      <header className="py-4">
        <div>
          <h2 className='text-white text-center py-3 font-monospace bg-dark'><IoRemoveOutline className='icon1' /> Blogs <IoRemoveOutline className='icon1' /></h2>
        </div>
      </header>
      {/* letest*/}
      {/* <Container fluid className='bg-dark py-4'>
        <Container>
          <h5 className='text-white font-monospace'>Letest</h5>
          <div className="row d-flex g-3 pb-4  align-items-center ">
            <hr className='text-white' />
            <div className="col-lg-5 col-12">
              <div className="">
                <h3 className='fw-bold text-white d-sm-none mb-3 d-block res-txt3'>{data.title}</h3>
                <img className='w-100 imgradus' src={'https://blog-node-q2al.onrender.com/images/' + data.image} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className='ms-271 mt-2'>
                <p className='text-white jst-txt res-txt4'>{data.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </Container> */}

      <Container fluid className='bg-dark text-dark mt-2'>
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
          {/* blog*/}
          {blog.map((el, index) => {
            return <div className="row d-flex g-3 py-4  align-items-center " key={index}>
              <hr className='text-white' />
              <div className="col-lg-5 col-12">
                <div className="">
                  <h3 className='fw-bold text-white d-sm-none mb-3 d-block res-txt3'>Best food for good health</h3>
                  <img className='w-100 imgradus' onClick={() => card(el._id)} src={'https://blog-node-q2al.onrender.com/images/' + el.image} alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className='ms-271 mt-2'>
                  <h3 className='fw-bold text-white d-sm-block d-none'>{el.title}</h3>
                  <p className='text-white jst-txt res-txt4'>{el.description}</p>
                </div>
              </div>
              <div className='d-flex'>
            <div className='me-2 text-center button' onClick={() => Delet(el._id)}>Delete</div>
            <div className=' text-center button' onClick={() => Update(el._id)}>Upate</div>
          </div>
            </div>
          })}
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
          </div>
        </Container>
      </Container>
      <Container fluid className='pt-2'>
        <Container>
          <Row>
          <Col sm={6} className='order-sm-1 order-2'>
          <div className='d-flex justify-content-evenly py-sm-3 p-1'>
            <Link to="/" className="text-decoration-none"><button class="cssbuttons-io-button res-txt7">Back to Home<div class="icon"><IoIosArrowRoundBack className='fs-2' /></div></button></Link>
          </div>
            </Col>
            <Col sm={6} className='order-sm-2 order-1'>
          <div className='d-flex justify-content-evenly py-sm-3 p-1'>
             <Link to="/login"> <button className='button rounded-4 res-txt7'><span>+ Add</span></button></Link>
           </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default Blog