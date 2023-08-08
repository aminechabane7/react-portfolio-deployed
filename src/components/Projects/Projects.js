import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Manifesto App"
              description="ntroducing Manifesto: Bridging Governance and People. Empowering open dialogue, enabling government communication, active listening, and news sharing for a stronger nation"
              ghLink="https://github.com/aminechabane7/manifesto_app"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Clinic Management"
              description="Revolutionize healthcare administration with an efficient clinic management solution."
              ghLink="https://github.com/aminechabane7/clinicmangement"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Note App Crud"
              description="Craft a transformative app that empowers seamless creation, retrieval, updating, and deletion of vital project notes"
              ghLink="https://github.com/aminechabane7/projectappnote-CRUD-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="django noteapp"
              description="Unleash the power of Django to build a dynamic note-taking app."
              ghLink="https://github.com/aminechabane7/django_noteapp"          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
