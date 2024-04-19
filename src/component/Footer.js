import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { VscFeedback } from "react-icons/vsc";


export const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer
