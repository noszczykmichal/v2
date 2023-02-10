/* eslint-disable import/prefer-default-export */

export const navLinks = [
  { name: "About", url: "/about" },
  { name: "Skills", url: "/about" },
  { name: "Projects", url: "/about" },
  { name: "Contact", url: "/about" },
];

export const email = "noszczykmichal@wp.pl";

export const socialMedia = [
  { name: "Github", url: "https://github.com/noszczykmichal" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/michal-noszczyk/" },
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
      { iconName: "Html", subHeading: "HTML" },
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
      { iconName: "VisualStudioCode", subHeading: "Visual Studio Code" },
      { iconName: "Jira", subHeading: "Jira" },
      { iconName: "Slack", subHeading: "Slack" },
      { iconName: "GoogleWorkspace", subHeading: "Google Workspace" },
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
