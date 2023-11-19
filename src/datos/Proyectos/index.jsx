import imagenFacuflix from "../../images/ImagenFacuFlix.png";
import imagenEncriptador from "../../images/ImagenEncriptador.png";
import imagenPortfolio from "../../images/ImagenPortfolio.png"

const Proyectos = {
  facuFlix: {
    titulo: 'FacuFlix',
    imagen: imagenFacuflix,
    descripcion: 'Pagina web de servicio de streaming educativo en tecnologias de desarrollo web. Desarrollado completamente con React. Pagina web SPA responsiva y que interactua con formularios para poder cargar nuevos videos y crear nuevas categorias de videos y exhibirlos en la pagina web. Tambien permite editar, o eliminar categorias extistentes.',
    tecnologias:['React.js','JavaScript','HTML5','CSS3','React Bootstrap','FramerMotion','MUI material'],
    linkRepositorio: 'https://github.com/ffacuprato/proyecto-facundoflix',
    linkDemo: 'https://ffacuprato.github.io/proyecto-facundoflix/',
  },
  portfolio: {
    titulo: 'Encriptador de texto',
    imagen: imagenEncriptador,
    descripcion: 'Mi primer proyecto realizado, un encriptador y desencriptador de texto totalmente responsivo en donde pude aplicar mis conocimientos en las tecnologias de HTML5 y CSS3 y en el lenguaje JavaScript para darle ciertas funcionalidades dinamicas como el encriptado y desencriptado de las palabras.',
    tecnologias:['React.js','JavaScript','HTML5','CSS3','React Bootstrap'],
    linkRepositorio: 'https://github.com/ffacuprato/PROYECTO-CHALLENGE',
    linkDemo: 'https://ffacuprato.github.io/PROYECTO-CHALLENGE/',
  },
  encriptador: {
    titulo: 'Portfolio',
    imagen: imagenPortfolio,
    descripcion: 'Este proyecto este mismo portfolio para presentar mis proyectos. Creado con React.js y React Bootstrap.',
    tecnologias:['HTML5','CSS3','JavaScript'],
    linkRepositorio: 'https://github.com/ffacuprato/PROYECTO-CHALLENGE',
    linkDemo: 'https://ffacuprato.github.io/PROYECTO-CHALLENGE/',
  },
};

// Convertir el objeto en un array
const ProyectosArray = Object.values(Proyectos);

export default ProyectosArray;
