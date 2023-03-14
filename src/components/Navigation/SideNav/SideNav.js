/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { createPortal } from "react-dom";
import { useContext } from "react";

import "./SideNav.scss";
// import Backdrop from "../../UI/Backdrop/Backdrop";
import UIContext from "../../../store/uiContext";

function SideNav() {
  const { menuOpen: isMenuOpen } = useContext(UIContext);

  const clickHandler = (e) => {
    console.log(e.target);
  };

  return (
    // <>
    //   {isMenuOpen &&
    //     createPortal(<Backdrop />, document.getElementById("modals-root"))}
    <div className={isMenuOpen ? "side-nav" : ""} onClick={clickHandler} />
    // </>
  );
}

export default SideNav;
