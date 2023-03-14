import { createPortal } from "react-dom";
import { useContext } from "react";

import "./SideNav.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import UIContext from "../../../store/uiContext";

function SideNav() {
  const { menuOpen: isMenuOpen } = useContext(UIContext);

  return (
    <>
      {isMenuOpen &&
        createPortal(<Backdrop />, document.getElementById("modals-root"))}
      <div className={isMenuOpen ? "side-nav" : ""} />
    </>
  );
}

export default SideNav;
