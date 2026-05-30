import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import profileImg from '../assets/image/home.jpg';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100 pb-0" style={{ paddingTop: '100px' }}>
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={7} className="text-center text-lg-start mt-5 mt-lg-0">
            <Badge bg="primary" pill className="px-3 py-2 mb-3 shadow-sm fs-6">
              Full Stack Developer
            </Badge>
            <h1 className="display-4 fw-bold mb-4">
              Hi, I'm <span className="text-primary">Sangeetha</span>
            </h1>
            <p className="lead text-secondary mb-5" style={{ lineHeight: '1.8' }}>
              I am a B.Sc Information Technology graduate who completed a Full Stack Python Development course with 4 months of training. I have knowledge in frontend and backend web development including HTML, CSS, JavaScript, React.js, Bootstrap, Node.js, Express.js, and Python. I enjoy building responsive websites and learning modern web technologies.
            </p>
            <Button variant="primary" size="lg" href="#projects" className="px-5 py-3 shadow-sm rounded-pill">
              View Projects
            </Button>
          </Col>
          <Col lg={5} className="text-center">
            <div className="position-relative d-inline-block">
              {/* Optional background blob for modern aesthetic */}
              <div className="position-absolute bg-primary rounded-circle w-100 h-100 opacity-25" style={{ filter: 'blur(30px)', top: '10%', left: '-10%', zIndex: '-1' }}></div>
              <img 
                src={profileImg} 
                alt="Sangeetha" 
                className="img-fluid rounded-circle shadow-lg border border-4 border-white object-fit-cover"
                style={{ width: '400px', height: '400px' }}
                id="hero-profile-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
