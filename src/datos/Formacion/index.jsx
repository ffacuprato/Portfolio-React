import ImgIngenieria from '../../images/ImagenIngenieria.jpg'
import ImgDesarrollo from '../../images/ImagenDesarrollo.jpg'
import ImgAnalisis from '../../images/ImagenAnalisis.jpg'

const FormacionAcademica = {
    universidad:{
        titulo:'Ingenieria Industrial',
        institucion:'Universidad Nacional de Cuyo',
        tiempo:'Dos años aprobados',
        imagen:ImgIngenieria,
        aprendizajes:['Fisica','Analisis Matematico','Estadistica','Algebra y Geometria Analitica','Quimica','Termodinamica','Electrotecnia','Logica','Dibujo Tecnico'],
        descripcion:'Mi formación en ingeniería industrial ha cultivado mi pensamiento lógico y resolutivo, proporcionándome una base sólida para abordar desafíos en el desarrollo frontend. La capacidad para analizar procesos complejos y diseñar soluciones eficientes se traduce directamente en mi enfoque para crear interfaces intuitivas y eficaces. Mi trasfondo en ingeniería no solo aporta habilidades técnicas, sino también una mentalidad analítica que fortalece mi capacidad para resolver problemas de manera efectiva en el mundo del desarrollo.',
    },
    alura:{
        titulo:'Desarrollo Frontend',
        institucion:'Alura Latam',
        tiempo:'8 meses',
        imagen:ImgDesarrollo,
        aprendizajes:['HTML5','CSS3','React.js','Bootstrap','Flexbox','JavaScript','React-router DOM','HTTPS','Arquitectura CSS','React Hooks, contexto y buenas practicas','SPA'],
        descripcion:'Este programa me ha sumergido en las tecnologías clave, desde HTML, CSS y JavaScript hasta frameworks modernos como React. A través de proyectos prácticos, he cultivado la capacidad de crear experiencias de usuario atractivas y funcionales. Este curso no solo representa un logro en mi trayectoria como desarrollador frontend, sino también un compromiso constante con la mejora continua y la adaptabilidad en un entorno dinámico. La participación en proyectos colaborativos ha fortalecido mi habilidad para abordar desafíos del mundo real y trabajar de manera eficiente en equipo, aplicando las mejores prácticas de desarrollo. Estoy emocionado por aplicar estas habilidades y conocimientos en entornos profesionales, contribuyendo al mundo del desarrollo frontend con creatividad y profesionalismo.',
    },
    analisisDeDatos:{
        titulo:'Procesamiento y exploracion de datos',
        institucion:'Universidad Nacional de Hurlingam',
        tiempo:'2 meses',
        imagen:ImgAnalisis,
        aprendizajes:['Python para analisis de datos','Estadistica','Mathplotlib','Pandas Library'],
        descripcion:'En el curso de análisis y exploración de datos con Python, he perfeccionado mi capacidad para gestionar eficazmente bases de datos. Adquirí destrezas clave en el manejo de bibliotecas como Pandas y NumPy, permitiéndome manipular datos con precisión y realizar análisis estadísticos relevantes. Estas habilidades no solo son esenciales para el análisis de datos, sino también valiosas herramientas para abordar desafíos en entornos profesionales. Estoy emocionado por aplicar este conocimiento para transformar datos en información estratégica en el ámbito laboral.',
    }
};

const FormacionAcademicaArray = Object.values(FormacionAcademica);

export default FormacionAcademicaArray