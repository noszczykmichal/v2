import { useContext } from "react";

import "./Hamburger.scss";
import UIContext from "../../../store/uiContext";

function Hamburger() {
  const { menuOpen, menuOpenHandler } = useContext(UIContext);

  const onHamburgerClick = () => {
    document.body.classList.toggle("blur");
    menuOpenHandler();
  };

  let attachedClasses = ["box__inner", "box__inner--side-nav-closed"];

  if (menuOpen) {
    attachedClasses = ["box__inner", "box__inner--side-nav-open"];
  }

  return (
    <button type="button" className="hamburger" onClick={onHamburgerClick}>
      <div className="hamburger__box">
        <div className={attachedClasses.join(" ")} />
      </div>
    </button>
  );
}

export default Hamburger;
