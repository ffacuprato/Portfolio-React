import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Hero/Hero.css"
import { Container } from 'react-bootstrap';
import ImgHero from '../../images/ImagenHero.png'
import styled from 'styled-components';

const ImagenRenderizada = ImgHero;

const TituloHero = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content:left;
`

const ImagenHero = styled.div`
    width: 50%;
    background-image: url(${ImagenRenderizada});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 5px 0 5px #633f7f;
`
const ContainerIzq = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const TextoHero = styled.p`
    padding: 1.25rem 0;
    font-size: 1.25rem;
    font-weight: 200;
`

const Hero = () => {
    return (
        <Container className='custom-container'>
            <ContainerIzq>
                <TituloHero><p>MI NOMBRE ES FACUNDO,</p><br/><p className='soy'>Y SOY FRONTEND DEVELOPER</p></TituloHero>
                <TextoHero>Bienvenido a mi portfolio.</TextoHero>
            </ContainerIzq>
            <ImagenHero></ImagenHero>
        </Container>
    );
};
export default Hero;