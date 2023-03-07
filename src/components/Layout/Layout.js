import PropTypes from "prop-types";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Social from "./Social/Social";
import Email from "./Email/Email";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <>
      <Toolbar />
      <main>
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
