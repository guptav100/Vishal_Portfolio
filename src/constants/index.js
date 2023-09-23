import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    Applogo,
    git,
    figma,
    docker,
    Uber,
    jarvis,
    carrent,
    jobit,
    tripguide,
    openai,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer Intern",
      company_name: "Appcul Technologies",
      // icon: Appcul,
      iconBg: "#E6DEDD",
      date: "April-2023 - July 2023",
      points: [
        "Actively contributed to the development of mobile applications using React Native.",
        "Executed responsive UI designs, maintaining consistency across devices.",
        "Collaborated with cross-functional teams to resolve technical issues and optimize app performance"
      ],
    },
    {
      title: "React Developer",
      company_name: "Vedspace Ventures",
      // icon: Vedspace,
      iconBg: "#E6DEDD",
      date: "August 2021 - November 2022",
      points: [
        "✔ Developing and maintaining web applications using React.js and other related technologies.",
        "✔ Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "✔ Implementing responsive design and ensuring cross-browser compatibility.",
        "✔ Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
      {
        title: "Web Developer",
        company_name: "Pepcoding",
        // icon: Pepcoding,
        iconBg: "#383E56",
        date: "March 2020 - September 2021",
        points: [
          "✔ Developing and maintaining web applications using React.js and other related technologies.",
          "✔ Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "✔ Implementing responsive design and ensuring cross-browser compatibility.",
          "✔ Participating in code reviews and providing constructive feedback to other developers.",
        ],
      }
  ];
  
  const projects = [
    {
      name: "Uber Clone",
      description:
        "Integrated a frontend clone of Uber App using React Native, showcasing my ability to seamlessly integrate Api’sfunctionality into Mobile applications.",
      tags: [
        {
          name: "JavaScipt",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        }
      ],
      image: Uber,
      source_code_link: "https://github.com/guptav100/Uber_Clone",
    },{
      name: "Swigato",
      description:
        "Swigato is a cross-platform application developed using React Native, enabling it to run on both iOS and Android devices",
      tags: [
        {
          name: "JavaScipt",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        }
      ],
      image: Applogo,
      source_code_link: "https://github.com/",
    },
    {
      name: "Open Ai Codex",
      description:
        "AI Based powerful search Engine which will search anything and answer it , even it is capable of writing codes and understand them ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: openai,
      source_code_link: "https://github.com/guptav100/Open_AI-Codex",
    },
    {
      name: "Hackerrank Automation",
      description:
        "An Automation project using Puppeteer and Node.js, I Tried to create logic for Automation using Chromium Browser ..",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Node.JS",
          color: "green-text-gradient",
        },
        {
          name: "Automation",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/guptav100/HackerRank-Automation",
    },
    {
      name: "File System Organiser",
      description:
        "A global command line application using node.js displays the tree view of the files in current directory, Also can organize the content of the directory in separate foldersdepending upon there extensions.",
      tags: [
        {
          name: "JavaScipt",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        }
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Jarvis",
      description:
        "A global command line application using node.js displays the tree view of the files in current directory, Also can organize the content of the directory in separate foldersdepending upon there extensions.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        }
      ],
      image: jarvis,
      source_code_link: "https://github.com/guptav100/Jarvis-main",
    },
    
  ];
  
  export { services, technologies, experiences, projects };