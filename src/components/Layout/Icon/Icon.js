import PropTypes from "prop-types";

import Github from "./Icons/Github";
import Linkedin from "./Icons/Linkedin";
import DefaultIcon from "./Icons/DefaultIcon";

function Icon({ name }) {
  switch (name) {
    case "Github":
      return <Github />;
    case "Linkedin":
      return <Linkedin />;
    default:
      return <DefaultIcon />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
