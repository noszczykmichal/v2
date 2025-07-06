import { useContext } from "react";

import UIContext from "@/store/uiContext";

export default function useMobileNav() {
  const { menuOpen, menuToggleHandler } = useContext(UIContext);

  const onClickHandler = () => {
    document.body.classList.toggle("blur");
    menuToggleHandler();
  };

  return { menuOpen, onClickHandler };
}
