/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useContext, useRef } from "react";
// import { CSSTransition } from "react-transition-group";

import "./Backdrop.scss";
// import UIContext from "../../../store/uiContext";

function Backdrop() {
  //   const { menuOpen: isMenuOpen } = useContext(UIContext);
  //   const nodeRef = useRef();

  const clickHandler = (e) => {
    console.log(e.target);
  };

  return (
    <div className="backdrop" onClick={clickHandler} />
    // <CSSTransition
    //   in={isMenuOpen}
    //   timeout={500}
    //   classNames={{
    //     enter: "backdrop--enter",
    //     enterDone: "backdrop--enterDone",
    //     exit: "backdrop--exit",
    //     exitDone: "backdrop-exitDone",
    //   }}
    //   mountOnEnter
    //   unmountOnExit
    //   nodeRef={nodeRef}
    // >
    //   <div className="backdrop" ref={nodeRef} />
    // </CSSTransition>
  );
}

export default Backdrop;
