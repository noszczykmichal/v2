import { createPortal } from "react-dom";
import { useEffect, useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./SideNav.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import UIContext from "../../../store/uiContext";
import NavigationItems from "../NavigationItems/NavigationItems";

function SideNav() {
  const { menuOpen: isMenuOpen, closeSideNavHandler } = useContext(UIContext);
  const closeSideNavRef = useRef(closeSideNavHandler);
  const nodeRef = useRef();

  useEffect(() => {
    const onResize = (e) => {
      if (e.currentTarget.innerWidth > 768) {
        document.body.classList.remove("blur");
        closeSideNavRef.current();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
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
