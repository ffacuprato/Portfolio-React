import React from "react";
import { Container } from "react-bootstrap";
import { Titulo } from "../Experiencia";
import '../Footer/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return <>
        <Container className="custom-container footer">
            <Titulo className="custom-title footer">
                Desarrollado por Facundo Prato
            </Titulo>
            <Container className="custom-container footer links">
                <a href="https://www.linkedin.com/in/facundo-gabriel-prato/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} className="contact-icon footer"/></a>
                <a href="mailto:facundoprato@gmail.com"><FontAwesomeIcon icon={faInbox} style={{color: "#ffffff",}} className="contact-icon footer"/></a>
            </Container>
        </Container>
    </>
};
export default Footer;