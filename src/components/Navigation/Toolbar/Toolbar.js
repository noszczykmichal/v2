import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.scss";

function Toolbar() {
  return (
    <nav className="desktop-navigation">
      <NavigationItems />
      <a href="/" className="resume-button">
        Resume
      </a>
    </nav>
  );
}

export default Toolbar;
