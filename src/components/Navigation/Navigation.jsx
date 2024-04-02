import { useState, useEffect, useRef } from "react";

import "./Navigation.scss";
import NavigationItems from "./NavigationItems/NavigationItems";
import useScrollDirection from "../../utils/hooks/useScrollDirection";
import usePrefersReducedMotion from "../../utils/hooks/usePrefersReducedMotion";
import useHandleScroll from "../../utils/hooks/useHandleScroll";
import Hamburger from "./Hamburger/Hamburger";
import SideNav from "./SideNav/SideNav";
import Logo from "./Logo/Logo";

function Navigation() {
  const scrollDirection = useScrollDirection("down");
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const [attachedClasses, setAttachedClasses] = useState("styled-header");
  const isTop = useHandleScroll();

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    if (isTop) {
      setAttachedClasses("styled-header");
    } else if (!isTop && scrollDirection === "up") {
      setAttachedClasses(["styled-header", "with-box-shadow"].join(" "));
    } else if (!isTop && scrollDirection === "down") {
      setAttachedClasses(["styled-header", "header--hidden"].join(" "));
    }

    return undefined;
  }, [scrollDirection, isTop]);

  return (
    <header className={attachedClasses}>
      <nav className="main-nav">
        <Logo />
        <NavigationItems />
        <div className="side-nav-container">
          <Hamburger />
          <SideNav />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
