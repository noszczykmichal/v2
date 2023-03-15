/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import "./Backdrop.scss";
import useMobileNav from "../../../utils/hooks/useMobileNav";

function Backdrop() {
  const { onClickHandler: onBackdropClick } = useMobileNav();

  return <div className="backdrop" onClick={onBackdropClick} />;
}

export default Backdrop;
