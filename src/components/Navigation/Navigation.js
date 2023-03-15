import { useState, useEffect, useRef } from "react";

import "./Navigation.scss";
import NavigationItems from "./NavigationItems/NavigationItems";
import useScrollDirection from "../../utils/hooks/useScrollDirection";
import usePrefersReducedMotion from "../../utils/hooks/usePrefersReducedMotion";
import useHandleScroll from "../../utils/hooks/useHandleScroll";
import Hamburger from "./Hamburger/Hamburger";
import SideNav from "./SideNav/SideNav";

function Navigation() {
  const scrollDirection = useScrollDirection("down");
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const [attachedClasses, setAttachedClasses] = useState("toolbar");
  const isTop = useHandleScroll();

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    if (isTop) {
      setAttachedClasses("navigation");
    } else if (!isTop && scrollDirection === "up") {
      setAttachedClasses(["navigation", "with-box-shadow"].join(" "));
    } else if (!isTop && scrollDirection === "down") {
      setAttachedClasses(["navigation", "navigation--hidden"].join(" "));
    }

    return () => {};
  }, [scrollDirection, isTop]);

  return (
    <header className={attachedClasses}>
      <nav>
        <NavigationItems />
        <div>
          <Hamburger />
          <SideNav />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
