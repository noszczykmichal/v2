import NavigationItems from "../NavigationItems/NavigationItems";
import IconsList from "../IconsList/IconsList";
import "./SideNavigation.scss";

function SideNavigation() {
  return (
    <aside>
      <div className="my-image" />
      <h1>Michal Noszczyk</h1>
      <p>Junior Frontend Developer</p>
      <div className="icons-wrapper">
        <NavigationItems />
        <IconsList />
      </div>
    </aside>
  );
}

export default SideNavigation;
