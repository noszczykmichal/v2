import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.scss";
import { navLinks } from "../../../utils/config";

function NavigationItems() {
  return (
    <ol className="navigation-items">
      {navLinks.map((navLink, ind) => (
        <NavigationItem url={navLink.url} key={navLink.name} index={ind}>
          {navLink.name}
        </NavigationItem>
      ))}
    </ol>
  );
}

export default NavigationItems;
