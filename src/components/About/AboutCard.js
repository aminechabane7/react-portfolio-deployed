import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amine Chabane </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br /> I obtained a professional diploma in the field of web development and mobile technology (DAWN)
            in Casablanca Higher School of Technologies (EST)
            <br />
            Additionally, I am currently Freelancer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the endeavor of creating things that leave an indelible mark on the world."{" "}
          </p>
          <footer className="blockquote-footer">Amine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
