import { useContext } from "react";

import UIContext from "../../store/uiContext";

function useMobileNav() {
  const { menuOpen, menuToggleHandler } = useContext(UIContext);

  const onClickHandler = () => {
    document.body.classList.toggle("blur");
    menuToggleHandler();
  };

  return { menuOpen, onClickHandler };
}

export default useMobileNav;
