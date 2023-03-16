import { createPortal } from "react-dom";
import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./SideNav.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import UIContext from "../../../store/uiContext";
import NavigationItems from "../NavigationItems/NavigationItems";

function SideNav() {
  const { menuOpen: isMenuOpen } = useContext(UIContext);
  const nodeRef = useRef();
  return (
    <>
      {isMenuOpen &&
        createPortal(<Backdrop />, document.getElementById("overlay-root"))}
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="sideNav"
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
      >
        <aside className="side-nav" ref={nodeRef}>
          <nav>
            <NavigationItems />
          </nav>
        </aside>
      </CSSTransition>
    </>
  );
}

export default SideNav;
