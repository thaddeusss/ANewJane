import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  // FaBriefcase,
  // FaGraduationCap,
  FaCode,
} from "react-icons/fa";

import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/imgProj/project-1.jpeg";
import Work2 from "./assets/imgProj/project-2.jpg";
import Work3 from "./assets/imgProj/project-3.jpeg";
import Work4 from "./assets/imgProj/project-4.jpeg";
import Work5 from "./assets/imgProj/project-5.jpg";
import Work6 from "./assets/imgProj/project-6.jpg";

import Theme1 from "./assets/imgProj/icons8-heart-32.jpg.png";
import Theme2 from "./assets/imgProj/icons8-heart-32.png";
import Theme3 from "./assets/imgProj/icons8-heart-32..png";
import Theme4 from "./assets/imgProj/icons8-heart-50...png";
import Theme5 from "./assets/imgProj/icons8-heart-50.....png";
import Theme6 from "./assets/imgProj/32pink.png";
import Theme7 from "./assets/imgProj/32green.png";
import Theme8 from "./assets/imgProj/32blakred.png";
import Theme9 from "./assets/imgProj/32lightgreen.png";
import Theme10 from "./assets/imgProj/32yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Jarkyn",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Nurbek k.",
  },

  {
    id: 3,
    title: "Age : ",
    description: "17",
  },

  {
    id: 4,
    title: "Address : ",
    description: "Arashan)",
  },

  {
    id: 5,
    title: "Phone : ",
    description: "Why do you need it, huh?)))",
  },

  {
    id: 6,
    title: "Langages : ",
    description: "Russian, Kyrgyz, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "12+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "97+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "53+",
    title: " Awards <br /> Won",
  },
];

export const skills = [
  {
    id: 1,
    title: "Mind",
    percentage: "100 ",
  },

  {
    id: 2,
    title: "Attraction",
    percentage: "Ꝏ ",
  },

  {
    id: 3,
    title: "Stunning",
    percentage: "Ꝏ ",
  },

  {
    id: 4,
    title: "Compassion",
    percentage: "?? ",
  },

  {
    id: 5,
    title: "Sense of humor ",
    percentage: "88.8 ",
  },

  {
    id: 6,
    title: "Beauty ",
    percentage: "Ꝏ ",
  },

  {
    id: 7,
    title: "Us ",
    percentage: "69 ",
  },

  {
    id: 8,
    title: "Romanticism ",
    percentage: "100 ",
  },
];

export const Portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
