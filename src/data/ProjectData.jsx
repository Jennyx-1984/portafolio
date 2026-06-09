import Fartera from "../assets/images/Fartera.png";
import HtmlBar from "../assets/images/icons/html-bar.png";
import CssBar from "../assets/images/icons/css-bar.png";
import JavascriptBar from "../assets/images/icons/javascript-bar.png";
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

export const projects = [
  {
    id: 1,
    title: "Web de la Fartera",
    description: "Página web de la Fartera.",
    image: Fartera,
    tech: [
      { name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar }
    ],
    link: "https://jennyx-1984.github.io/fartera/index.html"
  },
  {
    id: 2,
    title: "La SerieTúlia",
    description: "Página web de series",
    image: Serietulia,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar }],
    link: "https://jennyx-1984.github.io/serietulia/index.html"
  },
  {
    id: 3,
    title: "Tabla de Isotopos",
    description: "Filtros para isótopos. Cambia los elementos según el filtro que escojas.",
    image: Isotopo,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar }],
    link: "https://jennyx-1984.github.io/isotopo/"
  },
  {
    id: 4,
    title: "Servidor WoW Custom",
    description: "WoW 3.3.5 PvE blizzlike con bots y transfiguración.",
    image: Wow,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar }],
    link: "https://jennyx-1984.github.io/SelectMenuWow/"
  },
  {
    id: 5,
    title: "Caza Murlocks",
    description: "Minijuego para página web en Phaser.",
    image: Murlocks,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar },
      { name: "Phaser", icon: Phaser}],
    link: "https://jennyx-1984.github.io/JuegoMurlocks/"
  },
  {
   id: 6,
    title: "Tambores Javascript",
    description: "Bateria en teclado.",
    image: Tambores,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar }],
    link: "https://jennyx-1984.github.io/tambores/"
  },
  {
   id: 7,
    title: "Canvas",
    description: "Paint con Canvas.",
    image: Canvas,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar }],
    link: "https://jennyx-1984.github.io/canvas/"
  },
  {
   id: 8,
    title: "Listado Ajax",
    description: "Listado de ciudades con Ajax.",
    image: Ajax,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar }],
    link: "https://jennyx-1984.github.io/ListadoAjax/"
  },
  {
   id: 9,
    title: "Portfolio",
    description: "Proyecto de Portfolio.",
    image: Portafolio,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar },
      { name: "React", icon: ReactIcon}],
    link: "/"
  },
 /*{
   id: 10,
    title: "GPS",
    description: "Proyecto de GPS aun en construcción.",
    image:Gps ,
    tech: [{ name: "HTML", icon: HtmlBar },
      { name: "CSS", icon: CssBar  },
      { name: "Javascript", icon: JavascriptBar },
      { name: "Geoapify", icon: Geoapify}],
    link: "/"
  },*/

  {
    id:10,
    title:"Velvet Sakura",
    description: "Proyecto de tirada de cartas de Card Captor Sakura con API REST",
    image: Sakura,
    tech:[{name:"HTML", icon:HtmlBar},
      {name:"CSS", icon:CssBar},
      {name:"Javascript", icon:JavascriptBar},
    ],
    link:"https://github.com/Jennyx-1984/velvet-Sakura"
  },

  {
    id:11,
    title:"Sound Wave",
    description:"Proyecto de App tipo Spotify para música en streaming",
    image: SoundWave,
    tech:[{name:"HTML", icon:HtmlBar},
      {name:"CSS", icon:CssBar},
      {name:"JavaScript", icon:JavascriptBar},
      {name:"React", icon:ReactIcon}
    ],
    link:"https://github.com/Jennyx-1984/sound-wave"
  },
  {
    id:12,
    title:"Code Fighters",
    description:"Proyecto de SPA, juego de lucha modo single. Está por implementar el coop",
    image:CodeFighters,
    tech:[{name:"HTML", icon:HtmlBar},
      {name:"CSS", icon:CssBar},
      {name:"JavaScript", icon:JavascriptBar},
      {name:"SpringBoot", icon:SpringBoot},
      {name:"React", icon:ReactIcon},
      {name:"Phaser", icon:Phaser},
    ],
    link:"https://github.com/FemcodeFighters"
  },
  {
    id:13,
    title:"Code Crafters",
    description:"Proyecto de comunidad de eventos tecnológicos tipo red social con creación de tickets y pagos. Servicio SMTP para avisos automatizados al email del usuario.",
    image:CodeCrafters,
    tech:[
      {name:"HTML", icon:HtmlBar},
      {name:"JavaScript", icon:JavascriptBar},
      {name:"CSS", icon:CssBar},
      {name:"React", icon:ReactIcon},
      {name:"SpringBoot", icon:SpringBoot}
    ],
    link:"https://github.com/Code-Crafters-Events"
  }
];