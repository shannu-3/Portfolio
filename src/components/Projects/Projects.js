import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Math.io"
              description="Info
              Math.io is simple react web app which solve simple complex analysis problems and define most of the theroems we used the api to solve most of the problems and we implemented the voice assistant to make the web application user friendly."
              ghLink="https://github.com/shannu-3/Math.io"
              demoLink="https://mathio.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
