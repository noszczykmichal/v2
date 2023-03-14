/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useContext, useRef } from "react";
import PropTypes from "prop-types";

import Navigation from "../Navigation/Navigation";
import Social from "./Social/Social";
import Email from "./Email/Email";
import Footer from "../Footer/Footer";
import "./Layout.scss";
// import UIContext from "../../store/uiContext";

function Layout({ children }) {
  // const { menuOpen: isMenuOpen, menuOpenHandler } = useContext(UIContext);
  // const mainRef = useRef();

  // const mainHandler = (e) => {
  //   console.log(e.target);
  //   document.body.classList.toggle("blur");
  //   menuOpenHandler();
  // };
  return (
    <>
      <Navigation />
      <main
      // className={isMenuOpen ? ["styled", "standard"].join(" ") : "standard"}
      // ref={mainRef}
      // onClick={mainHandler}
      >
        <Social />
        <div className="content-wrapper">{children}</div>
        <Email />
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
