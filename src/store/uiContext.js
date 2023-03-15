import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UIContext = createContext({
  menuOpen: false,
  menuOpenHandler: () => {},
  linkClickHandler: () => {},
});

export function UIContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const linkClickHandler = () => {
    setIsMenuOpen(false);
  };

  const context = useMemo(
    () => ({
      menuOpen: isMenuOpen,
      menuOpenHandler,
      linkClickHandler,
    }),
    [isMenuOpen],
  );

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
}

UIContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UIContext;
