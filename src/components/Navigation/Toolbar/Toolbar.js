import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";

import Button from "../../UI/Button";

function Toolbar() {
  return (
    <header className="toolbar">
      <nav className="toolbar__desktop-navigation">
        <NavigationItems />
        <Button>Resume</Button>
      </nav>
    </header>
  );
}

export default Toolbar;
