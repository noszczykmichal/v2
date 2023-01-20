import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";

import Button from "../UI/Button";

function Toolbar() {
  return (
    <nav className="desktop-navigation">
      <NavigationItems />
      <Button>Resume</Button>
    </nav>
  );
}

export default Toolbar;
