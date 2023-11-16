import React from "react";
import styled from "styled-components";
import { Titulo } from "../Experiencia";
import { Container } from "react-bootstrap";

const AboutMe = () => {

    const Texto = styled.p`
        margin: 2rem 0 0 0;
        color: #e2e2e2;
        font-weight: 100;
        font-size: 1.25rem;
        font-family: 'Roboto';
    `

    return <>
        <Container id="AboutMe" style={{
            padding:'1rem 0'
        }}>
            <Titulo>
                Quien soy?
            </Titulo>
            <Texto>
            Soy un apasionado desarrollador frontend en constante búsqueda de la combinación perfecta entre creatividad y código. Con sólida formación en ingenieria, me sumerjo en el universo del desarrollo frontend, fusionando diseño elegante con eficiencia técnica.
            Mi enfoque consiste en transformar ideas en realidades digitales. Si buscas a alguien con visión, energía y habilidades sólidas, ¡estás en el lugar correcto! Emocionado por nuevos proyectos y continuando mi travesía en el mundo del desarrollo frontend.
            </Texto>
            <Titulo>
                Que me diferencia?
            </Titulo>
            <Texto>
            Más allá del código, mi verdadera fortaleza reside en mi habilidad para construir conexiones sólidas en equipos colaborativos. Soy un ferviente defensor del trabajo en equipo y creo en la fuerza de soluciones que surgen de mentes diversas con un objetivo común.
            Mi disposición abierta y deseo constante de aprender me distinguen. La curiosidad y el impulso de crecimiento me llevan a explorar nuevas tecnologías con entusiasmo.
            Lo que me diferencia aún más es mi sólida base en las ciencias básicas de la ingeniería. Esta fundación no solo guía mi resolución de problemas, sino que también facilita el aprendizaje ágil de nuevas tecnologías.
            Si buscas a alguien que no solo domina el código, sino que también aporta energía positiva, una actitud de aprendizaje constante y una perspectiva sólida en la resolución de problemas, ¡has encontrado a tu colaborador ideal! Estoy emocionado por contribuir a equipos dinámicos y crecer junto con cada proyecto. 
            </Texto>
        </Container>
    </>
}
export default AboutMe;