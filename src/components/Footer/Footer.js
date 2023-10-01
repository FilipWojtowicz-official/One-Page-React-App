import React from "react";
import "./Footer.css";
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <p className="footer-text">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <ul className="horizaontal-view">
          <li className="icons">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="icons">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
      </Container>
    </footer>
  );
};
export default Footer;
