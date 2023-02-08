import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Process = () => {
  return (
    <>
        <section className="work-process">
            <Container>
                <Row className="text-center">
                    <Col sm="12">
                        <h1 className="about-row" style={{ textTransform: "uppercase" , paddingBottom:"60px"}}>
                            Work Process
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_wfv3mjpf.json"  background="transparent"  speed="1"  style={{width :"100%" ,height:"300px"}} loop  autoplay></lottie-player>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='workProcess-text'>
                            <p>As a Human Being , I'm work in process</p>
                            <p>Work in progress, or WIP, is a term used to describe the ongoing development of a website or web application. In web development, a project can often be considered "work in progress" while its design, functionality, and content are still being refined and tested. The goal of work in progress is to improve the overall quality and user experience of the website, and to identify and resolve any issues before the site is launched. The process typically involves collaboration between designers, developers, content creators, and stakeholders, and may include iterations and testing until the desired outcome is achieved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Process