import PropTypes from "prop-types";

import Codewars from "@/components/Layout/Icon/Icons/Codewars";
import CommunicationSkills from "@/components/Layout/Icon/Icons/CommunicationSkills";
import CSS from "@/components/Layout/Icon/Icons/CSS";
import EN from "@/components/Layout/Icon/Icons/EN";
import Git from "@/components/Layout/Icon/Icons/Git";
import Github from "@/components/Layout/Icon/Icons/Github";
import GoogleWorkspace from "@/components/Layout/Icon/Icons/GoogleWorkspace";
import Html from "@/components/Layout/Icon/Icons/Html";
import JavaScript from "@/components/Layout/Icon/Icons/JavaScript";
import Jest from "@/components/Layout/Icon/Icons/Jest";
import Jira from "@/components/Layout/Icon/Icons/Jira";
import LikeToLearn from "@/components/Layout/Icon/Icons/LikeToLearn";
import Linkedin from "@/components/Layout/Icon/Icons/Linkedin";
import PL from "@/components/Layout/Icon/Icons/PL";
import React from "@/components/Layout/Icon/Icons/React";
import Sass from "@/components/Layout/Icon/Icons/Sass";
import Slack from "@/components/Layout/Icon/Icons/Slack";
import Teamwork from "@/components/Layout/Icon/Icons/Teamwork";
import TestingLibrary from "@/components/Layout/Icon/Icons/TestingLibrary";
import Tailwind from "@/components/Layout/Icon/Icons/Tailwind";
import ToDoList from "@/components/Layout/Icon/Icons/ToDoList";
import TypeScript from "@/components/Layout/Icon/Icons/TypeScript";
import VisualStudioCode from "@/components/Layout/Icon/Icons/VisualStudioCode";
import DefaultIcon from "@/components/Layout/Icon/Icons/DefaultIcon";

export default function Icon({ name }) {
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
