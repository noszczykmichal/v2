/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./NavigationItem.scss";

function NavigationItem({ hrefTo, children }) {
  return (
    <li className="navigation-item">
      <Link to={hrefTo}>{children}</Link>
    </li>
  );
}

export default NavigationItem;
