import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.scss";

function NavigationItems() {
  return (
    <ol className="navigation-items">
      <NavigationItem>About</NavigationItem>
      <NavigationItem>Skills</NavigationItem>
      <NavigationItem>Projects</NavigationItem>
      <NavigationItem>Contact</NavigationItem>
    </ol>
  );
}

export default NavigationItems;
