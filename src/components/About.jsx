import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaCheckCircle, FaBuilding, FaCode } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <section id="about" className="bg-white py-20">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:rounded-full">
          About Me
        </h2>
        <Row className="justify-content-center mb-12">
          <Col lg={8} className="text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              I completed full stack training where I learned both frontend and backend development. During this training I built several projects to improve my practical development skills.
            </p>
          </Col>
        </Row>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <div 
            onClick={() => toggleTab('education')}
            className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 rounded-xl p-6 shadow-sm border ${activeTab === 'education' ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200' : 'border-slate-100 bg-white hover:shadow-md'}`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`mb-4 p-4 rounded-full ${activeTab === 'education' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-500'} transition-colors duration-300`}>
                <FaGraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Education</h3>
              <p className="text-slate-500">Academic Background</p>
            </div>
          </div>

          {/* Course Card */}
          <div 
            onClick={() => toggleTab('course')}
            className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 rounded-xl p-6 shadow-sm border ${activeTab === 'course' ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200' : 'border-slate-100 bg-white hover:shadow-md'}`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`mb-4 p-4 rounded-full ${activeTab === 'course' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-500'} transition-colors duration-300`}>
                <FaLaptopCode size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Course</h3>
              <p className="text-slate-500">Technical Training</p>
            </div>
          </div>

          {/* Internship Card */}
          <div 
            onClick={() => toggleTab('internship')}
            className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 rounded-xl p-6 shadow-sm border ${activeTab === 'internship' ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200' : 'border-slate-100 bg-white hover:shadow-md'}`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`mb-4 p-4 rounded-full ${activeTab === 'internship' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-500'} transition-colors duration-300`}>
                <FaBriefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Internship</h3>
              <p className="text-slate-500">Practical Experience</p>
            </div>
          </div>
        </div>

        {/* Expandable Content Area */}
        <div 
          className={`max-w-5xl mx-auto overflow-hidden transition-all duration-500 ease-in-out ${activeTab ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            
            {/* Education Content */}
            {activeTab === 'education' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <FaGraduationCap className="text-blue-500" /> Academic Journey
                </h3>
                <div className="relative border-l-2 border-blue-200 ml-4 pl-8 space-y-8">
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-blue-500 ring-4 ring-white"></span>
                    <h4 className="text-xl font-bold text-slate-800">TERF'S Academy College of Arts and Science</h4>
                    <p className="text-blue-600 font-medium mb-2">Degree: B.Sc Information Technology</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-slate-300 ring-4 ring-white"></span>
                    <h4 className="text-xl font-bold text-slate-800">Palaniammal Municipal Girls Higher Secondary School</h4>
                    <p className="text-slate-500 mb-3">School Education</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <FaCheckCircle className="text-green-500 text-sm" /> SSLC (10th Standard)
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <FaCheckCircle className="text-green-500 text-sm" /> HSC (12th Standard)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Course Content */}
            {activeTab === 'course' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
                  <FaLaptopCode className="text-blue-500" /> Full Stack Python Developer
                </h3>
                <p className="text-blue-600 font-medium mb-6 text-lg flex items-center gap-2">
                  <FaBuilding /> Indra Institute of Education
                </p>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <p className="text-slate-700 mb-4 font-medium">Successfully completed a 4-month Full Stack Python Developer course.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Python programming',
                      'Frontend (HTML, CSS, JS, React.js)',
                      'Backend (Node.js, Express.js)',
                      'Database Management (PostgreSQL)',
                      'REST API Development',
                      'Git and GitHub version control',
                      'Responsive Web Development',
                      'Real-world project development practices'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1"><FaCheckCircle className="text-blue-500" /></div>
                        <span className="text-slate-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Internship Content */}
            {activeTab === 'internship' && (
              <div className="animate-fade-in space-y-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <FaBriefcase className="text-blue-500" /> Professional Experience
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Internship 1 */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 transition-hover hover:shadow-md">
                    <h4 className="text-xl font-bold text-slate-800 mb-1">Python Intern</h4>
                    <p className="text-blue-600 font-medium mb-4 flex items-center gap-2">
                      <FaBuilding /> ATS - Accent Techno Software
                    </p>
                    <h5 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <FaCode className="text-slate-400" /> Skills Learned:
                    </h5>
                    <ul className="space-y-2">
                      {['Python Programming', 'Core Python Concepts', 'Problem Solving', 'Application Development Fundamentals'].map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Internship 2 */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 transition-hover hover:shadow-md">
                    <h4 className="text-xl font-bold text-slate-800 mb-1">Full Stack Developer Intern</h4>
                    <p className="text-blue-600 font-medium mb-4 flex items-center gap-2">
                      <FaBuilding /> XTown Software Solutions
                    </p>
                    <div className="mb-4">
                      <h5 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                        <FaCode className="text-slate-400" /> Skills Learned:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Git & GitHub'].map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-700 mb-2">Experience:</h5>
                      <ul className="space-y-2">
                        {['Worked on real-time live projects.', 'Participated in full-stack web application development.', 'Developed responsive user interfaces.', 'Integrated frontend and backend systems.', 'Worked with databases and APIs.'].map((exp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span> {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
