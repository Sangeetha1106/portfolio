import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted. Payload:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-light">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-lg glass-card overflow-hidden">
              <Row className="g-0">
                <Col md={5} className="bg-primary text-white p-5 d-flex flex-column justify-content-center">
                  <h3 className="fw-bold mb-4 text-white">Contact Information</h3>
                  <p className="mb-4 opacity-75">
                    Feel free to reach out for collaborations, project inquiries, or simply to say hello!
                  </p>

                  <div className="d-flex align-items-center mb-4">
                    <FaMapMarkerAlt className="me-3 fs-4" />
                    <span>Based in India</span>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <FaEnvelope className="me-3 fs-4" />
                    <span>m.sangeetha8760@gmail.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPhoneAlt className="me-3 fs-4" />
                    <span>+91 8667212672</span>
                  </div>
                </Col>

                <Col md={7} className="p-5">
                  <h3 className="fw-bold mb-4">Send a Message</h3>
                  {submitted ? (
                    <div className="alert alert-success">
                      Thank you! Your message has been sent successfully.
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="contactName">
                        <Form.Label className="fw-semibold">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-light border-0 py-2"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label className="fw-semibold">Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-light border-0 py-2"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="contactMessage">
                        <Form.Label className="fw-semibold">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={4}
                          placeholder="Type your message here..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="bg-light border-0 py-2"
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100 py-2 fw-bold text-white shadow-sm d-flex align-items-center justify-content-center">
                        <FaPaperPlane className="me-2" /> Send Message
                      </Button>
                    </Form>
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
