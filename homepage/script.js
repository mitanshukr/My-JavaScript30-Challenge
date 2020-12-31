const project = [
  {
    day: 0,
    name: "",
    description: "",
    features: "",
  },
  {
    day: 1,
    name: "JavaScript Drum Kit",
    description:
      "A project focused on Keyboard Event, plays the sounds on key press.",
    features: "Key Code Detection,JS to handle CSS change,Dataset Attributes",
  },
  {
    day: 2,
    name: "JS and CSS Clock",
    description:
      "A live analog clock, implementing JavaScript Date class and maths logics.",
    features:
      "Live and Working Clock,Improved the Clock Design,Improved Hour-Hand calculation",
    improved: true,
  },
  {
    day: 3,
    name: "Playing with CSS Variables and JS",
    description:
      "A basic project to trick/handle CSS and manipulate style using Javascript.",
    features: "Dataset Attributes,Style manipulation of Root element",
  },
  {
    day: 4,
    name: "Array Cardio Day 1",
    description: "A project dedicated to Javascript Arrays.",
    features: "Fundamentals Concepts,Array Methods,Programming Logics",
  },
  {
    day: 5,
    name: "Flex Panel Gallery",
    description: "Another DOM based project with a taste of Flex box.",
    features: "Hands-on Flex,DOM and CSS,Improved User Experience",
    improved: true,
  },
  {
    day: 6,
    name: "AJAX Type Ahead",
    description: "A great project to show the power of Javascript and API.",
    features: "API fetched Data,Get Country Info,Regular Expressions",
    improved: true,
  },
  {
    day: 7,
    name: "Array Cardio Day 2",
    description: "Some more Array methods to search and copy data.",
    features: "Array Copy,Array Search,Programming Logics",
  },
  {
    day: 8,
    name: "Fun With HTML5 Canvas",
    description: "A great example of HTML5 Canvas handling with Javascript.",
    features:
      "JS Canvas Methods,HTML5 Canvas Concepts,Added Colorpicker and Eraser",
    improved: true,
  },
  {
    day: 9,
    name: "Some Must Know Console Methods",
    description: "A project to demonstrate some not-so-famous console methods.",
    features: "Console Outputs,Console Methods",
  },
  {
    day: 10,
    name: "Hold Shift Key with Checkboxes",
    description: "A great project to fill the knowledge gaps of DOM selectors.",
    features: "Core JavaScript,DOM Live Sync,Add or Delete Items",
    improved: true,
  },
  {
    day: 11,
    name: "Custom Video Player",
    description: "JavaScript can help you get your own video player.",
    features:
      "JS Video prop. & Methods,Custom Video Player,Improved UX features",
    improved: true,
  },
  {
    day: 12,
    name: "Key Sequence Detection",
    description: "Another Keyboard Event based project with 3rd-party Script.",
    features: "JS KeyEvents,Used Cornify JS,Fun Project",
  },
  {
    day: 13,
    name: "Slide in On Scroll",
    description: "A good project to develop responsive webpages.",
    features: "JS Scroll Events,Real-Life Example,Programming Logics",
  },
  {
    day: 14,
    name: "JavaScript Reference vs Copy",
    description: "A gap filling project dedicated to Objects and Arrays.",
    features: "Fundamentals Concepts,Object Reference vs Copy",
  },
  {
    day: 15,
    name: "Local Storage",
    description:
      "A good project on Javascript LocalStorage feature for Beginners.",
    features:
      "JS localStorage,Programming Logics,Added Delete & Uncheck Button",
    improved: true,
  },
  {
    day: 16,
    name: "Mouse Move Shadow",
    description: "A fun project to manipulate CSS with cursor Move.",
    features: "JS Cursor Position,CSS and Logics,Added Animation Effect",
    improved: true,
  },
  {
    day: 17,
    name: "Sort Without Articles",
    description:
      "A good example of Array Use with Regex and programming logics.",
    features: "Fundamental Concepts,Regular Expression,Programming Logics",
  },
  {
    day: 18,
    name: "Adding Times with Reduce",
    description: "Yet another basic project dedicated to Array core concept.",
    features: "JS Array Reduce,Programming Logics",
  },
  {
    day: 19,
    name: "Webcam Fun",
    description:
      "Let's play with browser API and canvas, packed with advanced knowledge.",
    features: "Browser - Video API,HTML5 Canvas,Advanced Concepts",
  },
  {
    day: 20,
    name: "Speech Detection",
    description: "Another great project to interact with Browser API.",
    features: "Audio API and Methods,Advanced Concepts",
  },
  {
    day: 21,
    name: "Geolocation",
    description: "Yet another great project in the series of Browser API.",
    features: "Speed and Direction,Browser API,Advanced Concept",
  },
  {
    day: 22,
    name: "Follow Along Links",
    description: "A good project to learn creating exceptional User Interface.",
    features: "Javascript Core,Programming Logics",
  },
  {
    day: 23,
    name: "Speech Synthesis",
    description:
      "Another Speech API based project with Advanced concepts and methods.",
    features: "Browser API,Fun Project,Advanced Concept",
  },
  {
    day: 24,
    name: "Sticky Nav",
    description:
      "A project to learn about well-known Sticky Nav in Vanilla style.",
    features: "Plugin with Vanilla,JS Scroll Events,Programming Logics",
  },
  {
    day: 25,
    name: "Event Capture, Propagation, Bubbling and Once",
    description: "A gap filling advanced concepts of EventListners.",
    features: "JavaScript EventListeners,Advanced Concept",
  },
  {
    day: 26,
    name: "Stripe Follow Along Nav",
    description:
      "A next level project in the series of Follow along links to learn better styling.",
    features: "Javascript Core,CSS Styling with JS,Programming Logics",
  },
  {
    day: 27,
    name: "Click and Drag",
    description:
      "An another project to get familiar with click-n-drag plugin with Vanilla JS.",
    features: "JS Mouse Events,Programming Logics",
  },
  {
    day: 28,
    name: "Video Speed Controller",
    description:
      "A good project to learn about Javascript Video properties and methods.",
    features: "JavaScript Core,JS Video methods,Programming Logics",
  },
  {
    day: 29,
    name: "Countdown Timer",
    description: "A great project to learn about Javascript Date object.",
    features: "Added Timer Alarm,Added extra features,Get Chrome Extension",
    improved: true,
  },
  {
    day: 30,
    name: "Whack A Mole",
    description: "A fun javascript game with eventlistners and intervals.",
    features:
      "Eventlistners & Intervals,Added HighScore feature,Programming Logics",
    improved: true,
  },
];

const projects = document.querySelector(".projects");

function getColor() {
  const colors = [
    {
      colorId: 0,
      from: "#7ed56fd5",
      to: "#28b485cc",
    },
    {
      colorId: 1,
      from: "#ffbb00cb",
      to: "#ff7830cc",
    },
    {
      colorId: 2,
      from: "#2998ffc9",
      to: "#5543fac7",
    },
    {
      colorId: 3,
      from: "rgba(55, 6, 24, 0.774)",
      to: "#660306c7",
    },
    {
      colorId: 4,
      from: "rgba(189, 183, 107, 0.8)",
      to: "rgba(0, 128, 128, 0.8)",
    },
  ];
  const idx = Math.floor(Math.random() * 5);
  const color = `linear-gradient(
          to right bottom,
          ${colors[idx].from},
          ${colors[idx].to}
          )`;

  return color;
}

for (let i = 1; i <= 30; i++) {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project", `project${i}`);
  const projectName = project[i].improved
    ? `${project[i].name}<sup class="improved">**</sup>`
    : project[i].name;
  const projectFeatures = project[i].features
    .split(",")
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  projectDiv.innerHTML = `
<div class="project__side front">
    <div class="project__screenshot proj${i}">&nbsp;</div>
    <h4 class="project__heading">
        <span class="project__day day${i}">#Day${i}</span>
    </h4>
    <div class="project__details">
        <h4 class="project__name">${projectName}</h4>
        <p class="project__description">${project[i].description}</p>
        <ul class="project__features">
            ${projectFeatures}
        </ul>
    </div>
    ${project[i].improved ? `<small class="improved">** Improved</small>` : ``}
</div>
<div class="project__side back back${i}">
    <div class="project__links">
        <a class="btn" href="${i < 10 ? `0${i}` : i} - ${project[i].name}/index.html" target="_blank">Live Demo</a>
        <a class="btn" href="${i < 10 ? `0${i}` : i} - ${project[i].name}" target="_blank">Project Code</a>
    </div>
</div>`;

  setColorsAndImage(projectDiv, i);
  projects.appendChild(projectDiv);
}

function setColorsAndImage(projectDiv, id) {
  const color = getColor();
  const projectImage = projectDiv.querySelector(
    `.project__screenshot.proj${id}`
  );
  projectImage.style.backgroundImage = `${color}, url(homepage/project_images/proj${id}.png)`;
  projectImage.style.backgroundPosition = "center";

  const dayColor = projectDiv.querySelector(`.project__day.day${id}`);
  dayColor.style.background = color;

  const backColor = projectDiv.querySelector(`.project__side.back${id}`);
  backColor.style.background = color;
}
