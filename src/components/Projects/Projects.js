import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Rabbit from "../../Assets/Projects/rabbit.png";
import Trex from "../../Assets/Projects/trex.jpg";
import ISS from "../../Assets/Projects/iss_icon.png";
import avatar from "../../Assets/Projects/avatar.png";
import TextToSpeech from "../../Assets/Projects/text to speech.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avatar}
              isBlog={false}
              title="Health Monitoring App"
              description="Empowers users to track essential health metrics such as sleep patterns, exercise routines, and other key data points, providing personalized insights to optimize habits and achieve wellness goals."
              ghLink="https://github.com/Kulbhushan01/Health-Monitoring-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ISS}
              isBlog={false}
              title="ISS Tracker"
              description="ISS-Tracker: A feature-rich application that provides real-time tracking of the International Space Station (ISS), complete with detailed information on its location, trajectory, and visible passes. Explore celestial wonders and track major meteor showers with ease"
              ghLink="https://github.com/Kulbhushan01/ISS-Tracker"
            />
          </Col>         
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToSpeech}
              isBlog={false}
              title="Text To Speech Converter"
              description="A tool that converts written text into spoken audio, providing accessibility and convenience"
              ghLink="https://github.com/Kulbhushan01/text-to-speech-converter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rabbit}
              isBlog={false}
              title="Rabbit Feeding Game"
              description="Rabbit-Feeding-Game: Enjoy a delightful experience where players feed virtual rabbits, nurturing them with care and attention."
              ghLink="https://github.com/Kulbhushan01/Rabbit-Feeding-Game"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trex}
              isBlog={false}
              title="Trex Game"
              description="An engaging T-Rex game inspired by the classic Chrome browser experience, designed for endless fun and enjoyment."
              ghLink="https://github.com/Kulbhushan01/Trex-Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;