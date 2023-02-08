import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

const Welcome = () => {
  return (
    <>
        <section className="hero-section" id="home">
            <div className="left-gmail">
                <p>kaziahosan1998@gmail.com</p>
            </div>
            <div className="right-Social-icon">
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
            <Container>
                <Row>
                    <Col>
                        <div className="hero-element">
                            <h1>I'm Ahosan Kabir </h1>
                            <p>
                                <span className="animated_text">
                                    <Typewriter
                                        words={[
                                            "front-end developer",
                                            "back-end developer",
                                            "MERN stack developer",
                                            "REST API developer",
                                            "React developer",
                                        ]}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle="🖊"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                            <span>I build the things for the web</span>
                            <span>Welcome to my personal portfolio</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Welcome