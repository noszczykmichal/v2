import PropTypes from "prop-types";

import CommunicationSkills from "./Icons/CommunicationSkills";
import CSS from "./Icons/CSS";
import Git from "./Icons/Git";
import Github from "./Icons/Github";
import Html from "./Icons/Html";
import LikeToLearn from "./Icons/LikeToLearn";
import Linkedin from "./Icons/Linkedin";
import React from "./Icons/React";
import Sass from "./Icons/Sass";
import Teamwork from "./Icons/Teamwork";
import ToDoList from "./Icons/ToDoList";
import DefaultIcon from "./Icons/DefaultIcon";

function Icon({ name }) {
  switch (name) {
    case "CommunicationSkills":
      return <CommunicationSkills />;
    case "CSS":
      return <CSS />;
    case "Git":
      return <Git />;
    case "Github":
      return <Github />;
    case "Html":
      return <Html />;
    case "LikeToLearn":
      return <LikeToLearn />;
    case "Linkedin":
      return <Linkedin />;
    case "React":
      return <React />;
    case "Sass":
      return <Sass />;
    case "Teamwork":
      return <Teamwork />;
    case "ToDoList":
      return <ToDoList />;
    default:
      return <DefaultIcon />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
