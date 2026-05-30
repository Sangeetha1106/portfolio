import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPython, FaServer } from 'react-icons/fa';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" size={50} /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" size={50} /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={50} /> },
    { name: 'React.js', icon: <FaReact color="#61DAFB" size={50} /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" size={50} /> }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs color="#339933" size={50} /> },
    { name: 'Express.js', icon: <FaServer color="#000000" size={50} /> },
    { name: 'Python', icon: <FaPython color="#3776AB" size={50} /> }
  ];

  return (
    <section id="skills" className="bg-light">
      <Container>
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="mb-5">
          <h4 className="text-center mb-4 text-secondary">Frontend Development</h4>
          <Row className="justify-content-center g-4">
            {frontendSkills.map((skill, index) => (
              <Col xs={6} md={4} lg={2} key={`fe-${index}`}>
                <Card className="h-100 border-0 shadow-sm glass-card text-center align-items-center py-4 transition-hover">
                  {skill.icon}
                  <Card.Body className="p-2 mt-2">
                    <Card.Title className="fs-6 fw-bold m-0">{skill.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <h4 className="text-center mb-4 text-secondary">Backend Development</h4>
          <Row className="justify-content-center g-4">
            {backendSkills.map((skill, index) => (
              <Col xs={6} md={4} lg={2} key={`be-${index}`}>
                <Card className="h-100 border-0 shadow-sm glass-card text-center align-items-center py-4 transition-hover">
                  {skill.icon}
                  <Card.Body className="p-2 mt-2">
                    <Card.Title className="fs-6 fw-bold m-0">{skill.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default Skills;
