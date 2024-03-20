import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";


import { Link, Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
    axios.get('https://blog-node-q2al.onrender.com/blog/findone/' + id)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getBlog()
}, [])

  // delete
  const Delet = (id) => {
    axios.delete('https://blog-node-q2al.onrender.com/blog/delete/' + id)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  const card = (id) => {
    console.log(id);
    localStorage.setItem('blogid', id)
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
    <div className="bg1">
      <header className="py-4">
        <div className="text-center text-white bgcolor p-1">
          <h1 className="fs-2">Blogs</h1>
        </div>
      </header>

      <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="blog-post box1 p-3 mb-4">
                        <img src={'https://blog-node-q2al.onrender.com/images/' + data.image} alt="Blog Post 1" className="img-fluid mb-3 rounded" />
                        <h2>{data.title}</h2>   
                        <p>{data.description}</p>
                        <p>{data.description}</p>
                    </div>
                <div className='d-flex'>
                <div className='me-2 text-center button' onClick={() => Delet(data._id)}>Delete</div>
                <div className=' text-center button' onClick={() => Update(data._id)}>Upate</div>
                </div>
                <div className='mt-5 text-center pb-5'>
                  <a href="/" className="text-dark fs-5 p-3 blog-btn rounded-0 fw-bold"> <FaArrowLeftLong /> Back To Home</a>
                </div>
                </div>
            </div>
        </div>

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
    </div>
  )
}

export default Blog