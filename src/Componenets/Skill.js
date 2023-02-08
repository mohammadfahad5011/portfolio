import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skill = () => {
  return (
    <>
      <section id="Skills" className="skills-section">
        <Container>
            <Row className="text-center">
                <Col>
                    <h1 style={{textTransform: "uppercase"}} className="about-row"> Skills </h1>
                </Col>
            </Row>  
          <Row className="progress_bar">
            <Col className="" lg="6" md="12">
              <ul style={{listStyle:"none"}}>
                <li>
                  <div className="progress_icon">
                    <i className="fab fa-html5"></i>
                  </div>
                  <h3>
                    HTML
                    <div>
                      <span className="counter">95</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="html"></span>
                  </div>
                </li>
                <li>
                  <div className="progress_icon">
                    <i className="fab fa-css3"></i>
                  </div>
                  <h3>
                    {" "}
                    CSS3
                    <div>
                      <span className="counter">90</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="css"></span>
                  </div>
                </li>
                <li>
                  <div className="progress_icon">
                    <i className="fab fa-bootstrap"></i>
                  </div>
                  <h3>
                    {" "}
                    BOOTSTRAP
                    <div>
                      <span className="counter">95</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="html"></span>
                  </div>
                </li>
                <li>
                  <div className="progress_icon">
                    <i className="fa-brands fa-js"></i>
                  </div>
                  <h3>
                    {" "}
                    JAVASCRIPT
                    <div>
                      <span className="counter">70</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="javascript"></span>
                  </div>
                </li>
              </ul>
            </Col>

            <Col className="" lg="6" md="12">
              <ul style={{listStyle:"none"}}>
                <li>
                  <div className="progress_icon">
                    <i className="fa-brands fa-node"></i>
                  </div>
                  <h3>
                    {" "}
                    NODE-JS
                    <div>
                      <span className="counter">75</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="node"></span>
                  </div>
                </li>
                <li>
                  <div className="progress_icon">
                    <i className="fa-brands fa-react"></i>
                  </div>
                  <h3>
                    {" "}
                    REACT-JS
                    <div>
                      <span className="counter">85</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="react"></span>
                  </div>
                </li>
                <li>
                  <div className="progress_icon">
                    <i className="fa-brands fa-node-js"></i>
                  </div>
                  <h3>
                    {" "}
                    EXPRESS-JS
                    <div>
                      <span className="counter">89</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="express"></span>
                  </div>
                </li>
                <li>
                  <div className="progress_icon">
                    <i className="fa-brands fa-envira"></i>
                  </div>
                  <h3>
                    {" "}
                    MONGODB
                    <div>
                      <span className="counter">85</span>
                      <span>%</span>
                    </div>
                  </h3>
                  <div className="bar">
                    <span className="mongo"></span>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skill;
