import React, { useRef } from 'react'
import{Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j0i75ab', 'template_729mjv7', form.current, 'VfARvZNsY590Du5n5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (

    <>
        <section className="contact-section" id="Contact">
            <Container>
                <Row className="text-center">
                    <Col sm="12">
                        <h1 className="about-row" style={{ textTransform: "uppercase" , paddingBottom:"40px"}}>
                            Get in touch
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xl="5" md = "6" sm="12" className='dis-flex'>
                        <div className="contact-left">
                            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_GTuUknTpTI.json"  background="transparent"  speed="1"  style={{width: "500px", height: "auto"}}  loop  autoplay ></lottie-player>
                        </div>
                    </Col>
                    <Col xl='7' md= "6" sm="12">
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Name :</Form.Label>
                                <Form.Control type="text" name='user_name' placeholder="Enter name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address :</Form.Label>
                                <Form.Control type="email"  name='user_email' placeholder="Enter email" required/>
                                <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text"  name='user_subject' placeholder="Enter subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={3}  name='message'/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Contact