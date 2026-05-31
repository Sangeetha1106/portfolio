import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Accordion, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import coffeeImg from '../assets/image/coffee.png';
import schoolImg from '../assets/image/school.png';
import foodImg from '../assets/image/food.png';
import sdrsImg from '../assets/image/sdrs.png';
import adsImg from '../assets/image/ads.png';
import travelImg from '../assets/image/travel.png';

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const handleToggle = (idx) => {
    setOpenProject(openProject === idx ? null : idx);
  };

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
      ],
      githubLink: "#",
      liveDemoLink: "#"
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
      ],
      githubLink: "#",
      liveDemoLink: "#"
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
      ],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "ADS Management System",
      image: adsImg,
      description: "A complete advertisement management platform that helps businesses create, manage, monitor, and track advertising campaigns efficiently.",
      technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "HTML", "CSS", "REST API"],
      features: [
        "Advertisement creation and management",
        "Campaign tracking dashboard",
        "Advertisement scheduling",
        "Customer management",
        "Admin dashboard",
        "Performance analytics",
        "Report generation",
        "User authentication",
        "Responsive design",
        "Database integration",
        "Real-time campaign monitoring"
      ],
      responsibilities: [
        "Developed frontend using React.js",
        "Built backend APIs using Node.js and Express.js",
        "Designed PostgreSQL database",
        "Implemented CRUD operations",
        "Created dashboard UI",
        "Integrated frontend and backend"
      ],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "AI Travel Management System",
      image: travelImg,
      description: "An intelligent travel planning platform that helps users discover destinations, plan trips, manage bookings, and receive AI-powered travel recommendations.",
      technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "HTML", "CSS", "REST API", "AI Integration"],
      features: [
        "AI-powered travel recommendations",
        "Destination discovery",
        "Trip planning",
        "Hotel booking management",
        "Travel package management",
        "Budget planning",
        "User profile management",
        "Search and filter destinations",
        "Responsive UI",
        "Authentication and authorization",
        "Travel history tracking"
      ],
      responsibilities: [
        "Developed complete full-stack application",
        "Built travel recommendation modules",
        "Created responsive user interfaces",
        "Developed backend APIs",
        "Managed PostgreSQL database",
        "Integrated AI recommendation functionality"
      ],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "SDRS Gold Finance Management System",
      image: sdrsImg,
      description: "A comprehensive gold finance and chit fund management platform that enables customers to manage loans, gold pledges, chit investments, payments, and KYC verification.",
      technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "HTML", "CSS", "REST API"],
      features: [
        "Customer Registration & Login",
        "Gold Loan Management",
        "Loan Approval Workflow",
        "Chit Fund Management",
        "EMI Tracking",
        "Payment Management",
        "KYC Verification",
        "Customer Dashboard",
        "Admin Dashboard",
        "Loan History",
        "Support System",
        "Profile Management",
        "Secure Authentication",
        "Database Integration"
      ],
      modules: [
        "Customer Module: Dashboard, My Loans, My Chits, Payments, KYC Verification, Support, Profile",
        "Admin Module: Customer Management, Loan Management, Chit Management, Payment Tracking, KYC Approval, Reports & Analytics"
      ],
      responsibilities: [
        "Developed full-stack application",
        "Built customer and admin dashboards",
        "Designed PostgreSQL database schema",
        "Developed REST APIs",
        "Implemented authentication and authorization",
        "Created responsive UI using React.js",
        "Integrated complete finance workflows"
      ],
      githubLink: "#",
      liveDemoLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <Container>
        <h2 className="section-title">My Projects</h2>
        
        <Row className="g-5 align-items-start">
          {projectData.map((project, idx) => (
            <Col lg={4} md={6} xs={12} key={idx}>
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

                  <Accordion 
                    flush 
                    className="mt-auto border rounded"
                    activeKey={openProject === idx ? "0" : null}
                    onSelect={(eventKey) => setOpenProject(eventKey === "0" ? idx : null)}
                  >
                    <Accordion.Item eventKey="0" className="bg-transparent">
                      <Accordion.Header>View Details</Accordion.Header>
                      <Accordion.Body className="text-secondary small">
                        
                        {project.useCase && (
                          <>
                            <strong>Use Case:</strong> <br/>{project.useCase}
                            <hr className="my-2"/>
                          </>
                        )}
                        
                        {project.pages && project.pages.length > 0 && (
                          <>
                            <strong>Pages:</strong> <br/>{project.pages.join(", ")}
                            <hr className="my-2"/>
                          </>
                        )}
                        
                        {project.modules && project.modules.length > 0 && (
                          <>
                            <strong>Modules:</strong>
                            <ul className="mb-2 ps-3">
                              {project.modules.map((mod, i) => <li key={i}>{mod}</li>)}
                            </ul>
                            <hr className="my-2"/>
                          </>
                        )}

                        {project.features && project.features.length > 0 && (
                          <>
                            <strong>Features:</strong>
                            <ul className="mb-2 ps-3">
                              {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
                            </ul>
                          </>
                        )}

                        {project.responsibilities && project.responsibilities.length > 0 && (
                          <>
                            <hr className="my-2"/>
                            <strong>Responsibilities:</strong>
                            <ul className="mb-2 ps-3">
                              {project.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                            </ul>
                          </>
                        )}

                        <div className="mt-4 d-flex justify-content-start gap-3">
                          <Button 
                            variant="outline-dark" 
                            size="sm" 
                            href={project.githubLink} 
                            target="_blank"
                            className="d-flex align-items-center gap-2"
                          >
                            <FaGithub /> GitHub
                          </Button>
                          <Button 
                            variant="primary" 
                            size="sm" 
                            href={project.liveDemoLink} 
                            target="_blank"
                            className="d-flex align-items-center gap-2"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </Button>
                        </div>
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
