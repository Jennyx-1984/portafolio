import Fartera from "../assets/images/Fartera.png";
//import HtmlBar from "../assets/images/icons/html-bar.png";
//import CssBar from "../assets/images/icons/css-bar.png";
//import JavascriptBar from "../assets/images/icons/javascript-bar.png";
import Serietulia from "../assets/images/serietulia.png";
import Isotopo from "../assets/images/isotopo.png";
import Wow from "../assets/images/wow.png";
import Murlocks from "../assets/images/murlocks.png";
import Phaser from "../assets/images/icons/phaser.png";
import Tambores from "../assets/images/tambores.png";
import Canvas from "../assets/images/canvas.png";
import Ajax from "../assets/images/ajax.png";
import Portafolio from "../assets/images/portafolio.png";
import ReactIcon from "../assets/images/icons/React-icon.png";
//import Gps from "../assets/images/gps.png";
import Sakura from "../assets/images/velvet.jpg";
import SoundWave from "../assets/images/homeSS.png";
import CodeFighters from "../assets/images/codefighters.jpg";
import SpringBoot from "../assets/images/icons/springboot.png";
import CodeCrafters from "../assets/images/codecrafters.png";
import PHP from "../assets/images/icons/php.png";
import MySQL from "../assets/images/icons/sql.png";
import CssIcon from "../assets/images/icons/css.png";
import HtmlIcon from "../assets/images/icons/html.png";
import JavascriptIcon from "../assets/images/icons/javascript.png";
import PostgreSQL from "../assets/images/icons/postgresql.png";

export const projects = [
  {
    id: 1,
    title: "Web de la Fartera",
    description: "Página web de la Fartera.",
    image: Fartera,
    tech: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "Javascript", icon: JavascriptIcon }
    ],
    repo: "https://github.com/Jennyx-1984/fartera",
    deploy: "https://jennyx-1984.github.io/fartera/index.html"
  },
  {
    id: 2,
    title: "La SerieTúlia",
    description: "Página web de series",
    image: Serietulia,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon }],
    repo: "https://github.com/Jennyx-1984/serietulia",
    deploy: "https://jennyx-1984.github.io/serietulia/index.html"
  },
  {
    id: 3,
    title: "Tabla de Isotopos",
    description: "Filtros para isótopos. Cambia los elementos según el filtro que escojas.",
    image: Isotopo,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon }],
    repo: "https://github.com/Jennyx-1984/isotopo",
    deploy: "https://jennyx-1984.github.io/isotopo/"
  },
  {
    id: 4,
    title: "Template para Servidores WoW",
    description: "Template para servidores custom de World of Warcraft.",
    image: Wow,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon }],
    repo: "https://github.com/Jennyx-1984/SelectMenuWow",
    deploy: "https://jennyx-1984.github.io/SelectMenuWow/"
  },
  {
    id: 5,
    title: "Caza Murlocks",
    description: "Minijuego para página web en Phaser V2.0.",
    image: Murlocks,
    tech: [{ name: "HTML", icon: HtmlIcon }, 
      { name: "CSS", icon: CssIcon }, 
      { name: "Javascript", icon: JavascriptIcon }, 
      { name: "Phaser", icon: Phaser },
      {name:"PHP",icon:PHP},
      {name:"MySQL",icon:MySQL}
    ],
    repo: "https://github.com/Jennyx-1984/JuegoMurlocks",
    deploy: "http://murlocksragna.gamer.free/backend/login.php"
  },
  {
    id: 6,
    title: "Tambores Javascript",
    description: "Bateria en teclado.",
    image: Tambores,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon }],
    repo: "https://github.com/Jennyx-1984/tambores",
    deploy: "https://jennyx-1984.github.io/tambores/"
  },
  {
    id: 7,
    title: "Canvas",
    description: "Paint con Canvas.",
    image: Canvas,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon }],
    repo: "https://github.com/Jennyx-1984/canvas",
    deploy: "https://jennyx-1984.github.io/canvas/"
  },
  {
    id: 8,
    title: "Listado Ajax",
    description: "Listado de ciudades con Ajax.",
    image: Ajax,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon }],
    repo: "https://github.com/Jennyx-1984/ListadoAjax",
    deploy: "https://jennyx-1984.github.io/ListadoAjax/"
  },
  {
    id: 9,
    title: "Portfolio",
    description: "Proyecto de Portfolio.",
    image: Portafolio,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon }, { name: "React", icon: ReactIcon }],
    repo: "https://github.com/Jennyx-1984/portafolio",
    deploy: "/"
  },
  {
    id: 10,
    title: "Velvet Sakura",
    description: "Proyecto de tirada de cartas de Card Captor Sakura con API REST. Deploy en Render (back y BBDD) y Vercel (front) ",
    image: Sakura,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "Javascript", icon: JavascriptIcon },{ name: "React", icon: ReactIcon },{name:"Springboot", icon:SpringBoot},{name:"PostgreSQL",icon:PostgreSQL}],
    repo: "https://github.com/Jennyx-1984/velvet-Sakura",
    deploy: "velvet-front-navy.vercel.app"
  },
  {
    id: 11,
    title: "Sound Wave (Próximas actualizaciones)",
    description: "Proyecto de App tipo Spotify para música en streaming",
    image: SoundWave,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "JavaScript", icon: JavascriptIcon }, { name: "React", icon: ReactIcon }],
    repo: "https://github.com/Jennyx-1984/sound-wave",
    deploy: ""
  },
  {
    id: 12,
    title: "Code Fighters (próximas actualizaciones)",
    description: "Proyecto de SPA, juego de lucha modo single. Está por implementar el coop",
    image: CodeFighters,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "CSS", icon: CssIcon }, { name: "JavaScript", icon: JavascriptIcon }, { name: "SpringBoot", icon: SpringBoot }, { name: "React", icon: ReactIcon }, { name: "Phaser", icon: Phaser }],
    repo: "https://github.com/FemcodeFighters",
    deploy: ""
  },
  {
    id: 13,
    title: "Code Crafters (próximas actualizaciones)",
    description: "Proyecto de comunidad de eventos tecnológicos tipo red social con creación de tickets y pagos.",
    image: CodeCrafters,
    tech: [{ name: "HTML", icon: HtmlIcon }, { name: "JavaScript", icon: JavascriptIcon }, { name: "CSS", icon: CssIcon }, { name: "React", icon: ReactIcon }, { name: "SpringBoot", icon: SpringBoot }],
    repo: "https://github.com/Code-Crafters-Events",
    deploy: ""
  }
];