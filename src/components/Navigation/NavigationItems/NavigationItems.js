import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.scss";

function NavigationItems() {
  return (
    <ul className="navigation-items">
      <NavigationItem>Home</NavigationItem>
      <NavigationItem>Projects</NavigationItem>
      <NavigationItem>Skills</NavigationItem>
      <NavigationItem>Contact</NavigationItem>
    </ul>
  );
}

export default NavigationItems;
