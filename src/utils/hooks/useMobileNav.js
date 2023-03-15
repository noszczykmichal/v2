import { useContext } from "react";

import UIContext from "../../store/uiContext";

function useMobileNav() {
  const { menuOpen, menuOpenHandler } = useContext(UIContext);

  const onClickHandler = () => {
    document.body.classList.toggle("blur");
    menuOpenHandler();
  };

  return { menuOpen, onClickHandler };
}

export default useMobileNav;
