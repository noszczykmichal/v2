import PropTypes from "prop-types";

import Codewars from "./Icons/Codewars";
import CommunicationSkills from "./Icons/CommunicationSkills";
import CSS from "./Icons/CSS";
import EN from "./Icons/EN";
import Git from "./Icons/Git";
import Github from "./Icons/Github";
import GoogleWorkspace from "./Icons/GoogleWorkspace";
import Html from "./Icons/Html";
import JavaScript from "./Icons/JavaScript";
import Jest from "./Icons/Jest";
import Jira from "./Icons/Jira";
import LikeToLearn from "./Icons/LikeToLearn";
import Linkedin from "./Icons/Linkedin";
import PL from "./Icons/PL";
import React from "./Icons/React";
import Sass from "./Icons/Sass";
import Slack from "./Icons/Slack";
import Teamwork from "./Icons/Teamwork";
import TestingLibrary from "./Icons/TestingLibrary";
import Tailwind from "./Icons/Tailwind";
import ToDoList from "./Icons/ToDoList";
import TypeScript from "./Icons/TypeScript";
import VisualStudioCode from "./Icons/VisualStudioCode";
import DefaultIcon from "./Icons/DefaultIcon";

function Icon({ name }) {
  const renderSwitch = (name) => {
    switch (name) {
      case "Codewars":
        return <Codewars />;
      case "CommunicationSkills":
        return <CommunicationSkills />;
      case "CSS":
        return <CSS />;
      case "EN":
        return <EN />;
      case "Git":
        return <Git />;
      case "Github":
        return <Github />;
      case "GoogleWorkspace":
        return <GoogleWorkspace />;
      case "Html":
        return <Html />;
      case "JavaScript":
        return <JavaScript />;
      case "Jest":
        return <Jest />;
      case "Jira":
        return <Jira />;
      case "LikeToLearn":
        return <LikeToLearn />;
      case "Linkedin":
        return <Linkedin />;
      case "PL":
        return <PL />;
      case "React":
        return <React />;
      case "Sass":
        return <Sass />;
      case "Slack":
        return <Slack />;
      case "Teamwork":
        return <Teamwork />;
      case "TestingLibrary":
        return <TestingLibrary />;
      case "Tailwind":
        return <Tailwind />;
      case "ToDoList":
        return <ToDoList />;
      case "TypeScript":
        return <TypeScript />;
      case "VisualStudioCode":
        return <VisualStudioCode />;
      default:
        return <DefaultIcon />;
    }
  };
  return renderSwitch(name);
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
