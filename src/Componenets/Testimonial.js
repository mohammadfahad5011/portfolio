import React, { useState } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { testimonialData } from '../data/TestimonialData'

const Testimonial = () => {

    const [selected , setSelected] = useState(0)
    const tlength = testimonialData.length;
  return (
        <>
            <section className='testimonial-section'>
                <Container>
                    <Row className='text-center'>
                        <Col sm="12">
                            <h1 className="about-row" style={{ textTransform: "uppercase" , paddingBottom: "50px"}}>
                                What they say about me ?
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="testimonial-left">
                                <div>
                                    {testimonialData[selected].review}
                                </div>
                                <span>
                                    <span>
                                        {testimonialData[selected].name}
                                        -{testimonialData[selected].status}
                                    </span>
                                </span>
                            </div>

                        </Col>

                        <Col lg="6" md="6" className='d-flex align-items-center justify-content-end'>
                            <div className="testimonial-right">
                                <div></div>
                                <div></div>
                                <img src={testimonialData[selected].image} alt=""/>
                                

                                <div className="arrows">
                                    <i className="fa-solid fa-arrow-left"
                                    onClick={()=>{
                                        selected ===0 ? setSelected(tlength-1) : setSelected((prev)=>prev-1)
                                    }}></i>
                                    <i className="fa-sharp fa-solid fa-arrow-right" 
                                    onClick={()=>{
                                        selected ===tlength-1? setSelected(0) : setSelected((prev)=>prev+1)
                                    }}></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
  )
}

export default Testimonial