import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaLaptopCode, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <p className="lead text-secondary" style={{ lineHeight: '1.8' }}>
              I completed full stack training where I learned both frontend and backend development. During this training I built several projects to improve my practical development skills.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm glass-card text-center transition-hover">
              <Card.Body className="p-4">
                <div className="mb-3 text-primary">
                  <FaGraduationCap size={40} />
                </div>
                <Card.Title className="fw-bold mb-3">Education</Card.Title>
                <Card.Text className="text-secondary">
                  B.Sc Information Technology
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm glass-card text-center transition-hover">
              <Card.Body className="p-4">
                <div className="mb-3 text-primary">
                  <FaLaptopCode size={40} />
                </div>
                <Card.Title className="fw-bold mb-3">Course</Card.Title>
                <Card.Text className="text-secondary">
                  Full Stack Python Development
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm glass-card text-center transition-hover">
              <Card.Body className="p-4">
                <div className="mb-3 text-primary">
                  <FaClock size={40} />
                </div>
                <Card.Title className="fw-bold mb-3">Duration</Card.Title>
                <Card.Text className="text-secondary">
                  4 Months Intensive Training
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
