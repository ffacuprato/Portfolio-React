import React from "react";
import '../Formacion/Formacion.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Titulo } from "../Experiencia";
import FormacionAcademicaArray from "../../datos/Formacion";

const Formacion = () => {

    function TarjetaExperiencia(titulo,institucion,tiempo,imagen,aprendizajes,descripcion) {
        return (
          <Card className='custom-card formacion' style={{
              width: '21rem',
              backgroundColor:'#283460',
              color:'#FFF',
              margin:'4rem 0'
             }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text className="custom-text institucion">
                {institucion}
              </Card.Text>
              <Card.Text className="custom-text formacion">
                {tiempo}
              </Card.Text>
              <Card.Text className="custom-text formacion">
                {descripcion}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {aprendizajes.map(aprendizaje => {
                    return  <ListGroup.Item className="custom-item formacion">{aprendizaje}</ListGroup.Item>
                })}
            </ListGroup>
          </Card>
        );
      }
      
    return <>
        <Container className="custom-container formacion">
            <Titulo>Mi formacion academica</Titulo>
            <Container fluid='md'>
                <Row>
                {FormacionAcademicaArray.map(formacion => {
                return <Col className="custom-col">{TarjetaExperiencia(formacion.titulo,formacion.institucion,formacion.tiempo,formacion.imagen,formacion.aprendizajes,formacion.descripcion)}</Col>;
            })}

                </Row>
            </Container>  
        </Container>
        
    </>
};
export default Formacion;