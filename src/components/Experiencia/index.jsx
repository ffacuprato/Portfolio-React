import React from "react";
import '../Experiencia/Experiencia.css';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Proyectos from "../../datos/Proyectos";

export const Titulo = styled.h1`
margin: 2rem 0 0 0;
display: flex;
align-self: center;
color: #FFF;
font-family: 'Roboto';
`
function Tarjeta(imagen,titulo,descripcion,tecnologias,linkRepositorio,linkDemo) {
    return (
      <Card style={{
        width: '21rem',
        backgroundColor:'#283460',
        color:'#FFF',
        margin:'4rem 0'
      }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text className="custom-text">
            {descripcion}
          </Card.Text>
        </Card.Body>
        
        <ListGroup className="list-group-flush">
        <Card.Title>Stack Tecnologico</Card.Title>
          {tecnologias.map((tecnologia) => {
            return <ListGroup.Item className="custom-item">{tecnologia}</ListGroup.Item>
          })}
        </ListGroup>
        <Card.Body>
          <Card.Link className="custom-card-link" href={linkRepositorio}>Repositorio</Card.Link>
          <Card.Link className="custom-card-link" href={linkDemo}>Demo</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  
function Experiencia() {
  return <>
    <Container id="Experiencia" className="custom-container experiencia">
        <Titulo>Algunos de mis proyectos</Titulo>
        <Container fluid="md">
            <Row>{Proyectos.map((proyecto,index) => {
                return <Col className="custom-column">{Tarjeta(proyecto.imagen,proyecto.titulo,proyecto.descripcion,proyecto.tecnologias,proyecto.linkRepositorio,proyecto.linkDemo)}</Col>
            })
                }
            </Row>
        </Container>
    </Container>
    </>;
}

export default Experiencia;