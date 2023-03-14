/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect, useRef } from "react";

import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import useScrollDirection from "../../../utils/hooks/useScrollDirection";
import usePrefersReducedMotion from "../../../utils/hooks/usePrefersReducedMotion";
import useHandleScroll from "../../../utils/hooks/useHandleScroll";
import Hamburger from "../Hamburger/Hamburger";

function Toolbar() {
  const scrollDirection = useScrollDirection("down");
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const [attachedClasses, setAttachedClasses] = useState("toolbar");
  const isTop = useHandleScroll();

  const myhandler = (e) => {
    console.log(e.target);
    // document.body.classList.toggle("blur");
    // menuOpenHandler();
  };

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    if (isTop) {
      setAttachedClasses("toolbar");
    } else if (!isTop && scrollDirection === "up") {
      setAttachedClasses(["toolbar", "with-box-shadow"].join(" "));
    } else if (!isTop && scrollDirection === "down") {
      setAttachedClasses(["toolbar", "toolbar--hide"].join(" "));
    }

    return () => {};
  }, [scrollDirection, isTop]);

  return (
    <nav className={attachedClasses} onClick={myhandler}>
      <NavigationItems />
      <Hamburger />
    </nav>
  );
}

export default Toolbar;
