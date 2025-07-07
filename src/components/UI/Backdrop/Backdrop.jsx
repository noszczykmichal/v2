/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import "@/components/UI/Backdrop/Backdrop.scss";
import useMobileNav from "@/utils/hooks/useMobileNav";

export default function Backdrop() {
  const { onClickHandler: onBackdropClick } = useMobileNav();

  return <div className="backdrop" onClick={onBackdropClick} />;
}
