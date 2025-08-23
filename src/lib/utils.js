import clsx from "clsx"
import { twMerge } from "tailwind-merge"
import jsLogo from "../../public/js.png"
import reactLogo from "../../public/react.png"
import javaLogo from "../../public/java.png"
import pythonLogo from "../../public/python.png"
import nodeJsLogo from "../../public/nodeJs.png"
import mySqlLogo from "../../public/mySql.png"
import gitLogo from "../../public/git.png"
import githubLogo from "../../public/github.png"
import awsLogo from "../../public/aws.png" 
import cpp from "../../public/cpp.png" 
import mongoDb from "../../public/MongoDB.png" 
import tailwindcss from "../../public/TailwindCSS.png" 
import express from "../../public/Express.png" 
import postman from "../../public/Postman.png" 



const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}

const skills = [
    // language
    { name: "JavaScript", level: 80, category: "language" ,loc:jsLogo},
    { name: "C++", level: 80, category: "language" ,loc:cpp},
    { name: "Java", level: 60, category: "language" ,loc:javaLogo},
    { name: "Python", level: 60, category: "language" ,loc:pythonLogo},

    // Frontend
    { name: "React", level: 70, category: "frameworks" ,loc:reactLogo},
    { name: "Node.js", level: 80, category: "frameworks" ,loc:nodeJsLogo},
    { name: "Express", level: 75, category: "frameworks" ,loc:express},

    // database
    { name: "MongoDB", level: 70, category: "database" ,loc:mongoDb},
    { name: "MySQL", level: 65, category: "database" ,loc:mySqlLogo},

    // Tools
    { name: "Git", level: 80, category: "tools" ,loc:gitLogo},
    { name: "GitHub", level: 80, category: "tools" ,loc:githubLogo},
    { name: "Tailwind CSS", level: 70, category: "tools" ,loc:tailwindcss},
    { name: "Postman", level: 65, category: "tools" ,loc:postman},
    { name: "AWS", level: 55, category: "tools" ,loc:awsLogo},
];

const projects = [
  {
    id: 1,
    title: "Plashoes E-commerce",
    description: "Plashoes is a full-stack eCommerce website built to provide a seamless online shopping experience for footwear",
    image: "https://res.cloudinary.com/dhxwyq122/image/upload/v1755978213/plashoes_ulbv6g.png",
    tags: ["React", "NodeJs", "MongoDB", "Express"],
    demoUrl: "https://plashoes-frontend.onrender.com/",
    githubUrl: "https://github.com/Het-Dhorajiya-0305/Plashoes",
  },
  {
    id: 2,
    title: "CodeBoard",
    description:
      "Code Board is a real-time code collaboration platform that allows multiple users to edit and share code simultaneously.",
    image:"https://res.cloudinary.com/dhxwyq122/image/upload/v1755978321/codeboard_lpaddh.png",
    tags: ["React", "NodeJs", "MongoDB", "Socket.io","Monaco Editor"],
    demoUrl: "https://code-board-colla.vercel.app/",
    githubUrl: "https://github.com/Het-Dhorajiya-0305/code-board",
  },
  {
    id: 3,
    title: "Real-Time Location Tracker",
    description:
      "The Live Location Tracker is a real-time system that continuously monitors and displays the geographical position of a user or asset on a digital map",
    image: "https://res.cloudinary.com/dhxwyq122/image/upload/v1755978357/tracker_qrttz2.png",
    tags: ["React", "Node.js", "Socket.io", "leaflet"],
    demoUrl: "https://realtime-tracker-e55d.onrender.com/",
    githubUrl: "https://github.com/Het-Dhorajiya-0305/realtime-tracker",
  }
];

export { cn, skills ,projects};