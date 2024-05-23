import PropTypes from "prop-types";

import Navigation from "../Navigation/Navigation";
import Social from "./Social/Social";
import Email from "./Email/Email";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Social />
      <Email />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
