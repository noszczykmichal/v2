import { createPortal } from "react-dom";
import { useContext } from "react";

import "./SideNav.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import UIContext from "../../../store/uiContext";
import NavigationItems from "../NavigationItems/NavigationItems";

function SideNav() {
  const { menuOpen: isMenuOpen } = useContext(UIContext);

  return (
    <>
      {isMenuOpen &&
        createPortal(<Backdrop />, document.getElementById("overlay-root"))}
      <aside className={isMenuOpen ? "side-nav" : "none"}>
        <nav>
          <NavigationItems />
        </nav>
      </aside>
    </>
  );
}

export default SideNav;
