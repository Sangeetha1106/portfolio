import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';
import coffeeImg from '../assets/image/coffee.png';
import schoolImg from '../assets/image/school.png';
import foodImg from '../assets/image/food.png';

const Projects = () => {
  const projectData = [
    {
      title: "Coffee Shop Website",
      image: coffeeImg,
      description: "A website developed to showcase coffee products and provide information about the coffee shop to customers.",
      useCase: "Helps customers explore coffee products, view menu items, read customer reviews, and contact the shop for inquiries.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      pages: ["Navbar", "Home Page", "About Page", "Menu Page", "Testimonials Page", "Gallery Page", "Contact Page"],
      features: [
        "Home: Displays a coffee image and a paragraph explaining coffee and the coffee shop.",
        "About: Displays a coffee shop image and a short two-line description about the shop.",
        "Menu: Shows coffee images and other beverage images available in the shop.",
        "Testimonials: Displays customer reviews and feedback.",
        "Gallery: Shows multiple coffee shop and product images.",
        "Contact: Allows customers to contact the coffee shop and view contact details."
      ]
    },
    {
      title: "ABC School Website",
      image: schoolImg,
      description: "A digital portal developed for students and teachers to manage assignments and access learning materials online.",
      useCase: "Helps teachers distribute assignments and helps students access learning materials and practice content online.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      pages: ["Home Page", "Student Learning Materials Page", "Assignment Upload Section", "Online Practice Section"],
      features: [
        "Teachers can upload assignments.",
        "Students can view assignments.",
        "Students can access learning materials.",
        "Online practice resources are available for students."
      ]
    },
    {
      title: "Food Shop Website",
      image: foodImg,
      description: "Allows customers to explore food items and contact the shop to place food orders.",
      useCase: "Customers can browse food items and send a message to the shop requesting specific food orders.",
      technologies: ["React.js", "CSS"],
      pages: ["Home Page", "Menu Page", "Contact Page"],
      features: [
        "Home: Displays food image and description using paragraph text.",
        "Menu: Shows multiple food images representing available food products.",
        "Contact: Displays shop location and area details. Users can enter Name, Message, and Product they want to order."
      ]
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <Container>
        <h2 className="section-title">My Projects</h2>
        
        <Row className="g-5">
          {projectData.map((project, idx) => (
            <Col lg={4} key={idx}>
              <Card className="h-100 border-0 shadow-sm glass-card overflow-hidden transition-hover">
                <Card.Img variant="top" src={project.image} className="project-img" style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-secondary mb-4 flex-grow-1">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <Badge bg="primary" className="me-2 mb-2 px-2 py-1 bg-opacity-75" key={i}>{tech}</Badge>
                    ))}
                  </div>

                  <Accordion flush className="mt-auto border rounded">
                    <Accordion.Item eventKey="0" className="bg-transparent">
                      <Accordion.Header>View Details</Accordion.Header>
                      <Accordion.Body className="text-secondary small">
                        <strong>Use Case:</strong> <br/>{project.useCase}
                        <hr className="my-2"/>
                        <strong>Pages:</strong> <br/>{project.pages.join(", ")}
                        <hr className="my-2"/>
                        <strong>Features:</strong>
                        <ul className="mb-0 ps-3">
                          {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
