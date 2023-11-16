import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Header/Header.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MyPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#AboutMe">Quien soy?</Nav.Link>
            <Nav.Link href='#Experiencia'>Mis proyectos</Nav.Link>
            <Nav.Link href='https://drive.google.com/file/d/1UzEZUMtypO4VnjLv2hAVo8DYtnc97RUf/view?usp=sharing'>Mi CV</Nav.Link>
            <NavDropdown title="Como contactarme" id="basic-nav-dropdown">
              <NavDropdown.Item href="mailto:facundoprato@gmail.com">E-mail</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/facundo-gabriel-prato/">
                LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;