/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from "react";

import "./Backdrop.scss";
import UIContext from "../../../store/uiContext";

function Backdrop() {
  const { menuOpenHandler } = useContext(UIContext);

  const onBackdropClick = () => {
    document.body.classList.toggle("blur");
    menuOpenHandler();
  };
  return <div className="backdrop" onClick={onBackdropClick} />;
}

export default Backdrop;
