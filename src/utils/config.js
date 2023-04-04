/* eslint-disable import/prefer-default-export */

export const navLinks = [
  { name: "About", url: "#about" },
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

export const email = "noszczykmichal@wp.pl";

export const socialMedia = [
  { name: "Github", url: "https://github.com/noszczykmichal" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/michal-noszczyk/" },
  { name: "Codewars", url: "https://www.codewars.com/users/noszczykmichal" },
];

export const navDelay = 1000;
export const loaderDelay = 2000;

// ScrollReveal Config

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: "bottom",
  distance: "20px",
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export const skillsTabs = [
  {
    name: "Hard Skills",
    contents: [
      { iconName: "Html", subHeading: "HTML5" },
      { iconName: "CSS", subHeading: "CSS3" },
      { iconName: "JavaScript", subHeading: "JavaScript" },
      { iconName: "Sass", subHeading: "Sass" },
      { iconName: "React", subHeading: "React" },
    ],
  },
  {
    name: "Soft Skills",
    contents: [
      { iconName: "Teamwork", subHeading: "Like to work in a team" },
      { iconName: "LikeToLearn", subHeading: "Like to learn" },
      { iconName: "ToDoList", subHeading: "Know how to work under pressure" },

      {
        iconName: "CommunicationSkills",
        subHeading: "Good at communication skills",
      },
    ],
  },
  {
    name: "Tools",
    contents: [
      { iconName: "Git", subHeading: "Git" },
      { iconName: "Jira", subHeading: "Jira" },
      { iconName: "Slack", subHeading: "Slack" },
      { iconName: "GoogleWorkspace", subHeading: "Google Workspace" },
      { iconName: "VisualStudioCode", subHeading: "Visual Studio Code" },
    ],
  },
  {
    name: "Languages",
    contents: [
      { iconName: "PL", subHeading: "Polish - native " },
      { iconName: "EN", subHeading: "English - C1" },
    ],
  },
];

export const projects = [
  {
    title: "Minimalistic-storefront",
    description:
      "As the name suggests, it is a mock-up page of an imaginary online shop, fetching data from the GraphQL endpoint. The project consists of three main 'pages': the PLP (category page), the PDP (product page), and the Cart page.",
    liveUrl: "https://minimalistic-storefront.web.app/",
    repoUrl: "https://github.com/noszczykmichal/minimalistic-storefront",
    imagePath: "/minimalistic-storefront",
    tech: [
      "React",
      "Redux",
      "Redux Persist",
      "GraphQl",
      "Interweave",
      "Heroku",
    ],
  },
  {
    title: "Book4u",
    description:
      "A web app that uses the Project Gutenberg API for browsing the PG catalogue. At the start, the app loads a set of books ordered by the number of downloads, but you can add your own search criteria to find something that matches your taste.",
    liveUrl: "https://book4u-b0a2a.web.app/",
    repoUrl: "https://github.com/noszczykmichal/book4u",
    imagePath: "/book4u",
    tech: ["React", "React Context", "React Transition Group", "Rest Api"],
  },
  {
    title: "Meetup",
    description:
      "A small app for creating and managing meetups built with React. It is based on one of the projects I have done while learning React, and later enriched with new functionalities by me.",
    liveUrl: "https://meetup-with-class-components.web.app/",
    repoUrl:
      "https://github.com/noszczykmichal/meetup-app__with-class-based-components",
    imagePath: "/meetup",
    tech: ["React", "React Context", "Redux", "Firebase", "ESLint", "Prettier"],
  },
];
