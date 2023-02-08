import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myPic from "../../public/img/pic.png"
import myPicture from "../image/pic.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="text-center">
          <Col sm="12">
            <h1 className="about-row" style={{ textTransform: "uppercase" }}>
              About me
            </h1>
          </Col>
        </Row>
        <Row className=" align-items-center ">
          <Col
            lg="5"
            sm="12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <img src="/img/pic.png" alt="my-pictures" className="img-fluid" /> */}
            <div className="about-image">
              <img
                src={myPicture}
                alt="my-pictures"
                className="img-fluid owner_img"
              />
            </div>
          </Col>
          <Col lg="7" sm="12" className="about-p">
            <h2 className=" text-success about-h">
              "Hi there! My name is Ahosan kabir Riad.
            </h2>
            <p className="py-3">
              I am a web developer with a passion for creating intuitive,
              visually appealing, and high-performing websites. With 4years of
              experience in the industry, I have honed my skills in{" "}
              <strong className=" text-success about-h">
                <i>
                  Mongodb , Node js , html, css , Javascript , React, Bootstrap
                  and many more
                </i>
              </strong>
              , and have a deep understanding of the latest web development
              methodologies and practices. I am dedicated to delivering
              top-notch results to my clients, whether it's by building a brand
              new website or improving an existing one. My aim is to always
              create user-friendly and accessible websites that provide an
              enjoyable and seamless experience for users. In my free time, I
              love to stay up-to-date with the latest advancements in web
              development and explore new technologies.I believe that a person
              should work on developing their professional skills and learning
              new things all the time. I am always seeking new challenges and
              opportunities to grow as a developer. If you're looking for a
              reliable, skilled, and dedicated web developer, I'd love to hear
              from you! Let's work together to bring your vision to life."
            </p>

            <p>Contact Details:</p>
            <ul className="about-ul">
              <li>Ahosan Kabir</li>
              <li>kaziahosan1998@gmail.com</li>
              <li>Dhaka, Bangladesh</li>
            </ul>

            <a
              type="button"
              className="btn btn-primary about-btn"
              fdprocessedid="5p07z9"
              href="Resume-Ahosan-Kabir-.pdf"
              download
            >
              Download Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
