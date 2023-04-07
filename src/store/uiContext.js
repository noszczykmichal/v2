import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UIContext = createContext({
  menuOpen: false,
  menuToggleHandler: () => {},
  closeSideNavHandler: () => {},
});

export function UIContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeSideNavHandler = () => {
    setIsMenuOpen(false);
  };

  const context = useMemo(
    () => ({
      menuOpen: isMenuOpen,
      menuToggleHandler,
      closeSideNavHandler,
    }),
    [isMenuOpen],
  );

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
}

UIContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UIContext;
