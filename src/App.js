import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import styled from 'styled-components';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import AboutMe from './components/SobreMi';

const ContainerGral = styled.div`
  background-color: #121216;
  `

function App() {
  return <>
    <ContainerGral>
      <Header />
      <Hero />
      <AboutMe />
      <Experiencia />
      <Formacion />
    </ContainerGral>
  </>
}
export default App;
