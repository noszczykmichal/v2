import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./NavigationItem.scss";

function NavigationItem({ children }) {
  return (
    <li className="navigation-item">
      <NavLink>{children}</NavLink>
    </li>
  );
}

NavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
