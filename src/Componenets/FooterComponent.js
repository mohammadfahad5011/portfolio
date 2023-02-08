import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

const FooterComponent = () => {
  return (
    <>
        <section className="footer">
            <Container>
                <Row className='text-center align-items-center'>
                    
                    <Col  xl="6" md="12" sm="12">
                        <h4> Designed and Built by Ahosan Kabir </h4>
                        <p> &#169; 2023 Ahosan Kabir. All rights reserved</p>
                        <h3>🧡</h3>
                    </Col>
                    <Col xl="6" md="12" sm="12">
                        <div className="footer-icons">
                            <a href='https://www.facebook.com/ahosan.kabir.73' target="_blank" rel="noreferrer" >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href='https://www.linkedin.com/in/ahosan-kabir-48a893213/' target="_blank" rel='noreferrer'>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href='https://github.com/AhosanKabir' target="_blank" rel='noreferrer'>
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="mailto:kaziahosan1998@gmail.com" target="_blank" rel='noreferrer'>
                                <i className="fa-solid fa-envelope-circle-check"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className="bactToTop">
                <a href="#home" className='BackToTop'>
                    <i class="fa-solid fa-arrow-up"></i>
                </a>
            </div> */}
        </section>
    </>
  )
}

export default FooterComponent