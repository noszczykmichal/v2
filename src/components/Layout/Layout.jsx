import PropTypes from "prop-types";

import Navigation from "@/components/Navigation/Navigation";
import Social from "@/components/Layout/Social/Social";
import Email from "@/components/Layout/Email/Email";
import Footer from "@/components/Footer/Footer";
import "@/components/Layout/Layout.scss";

export default function Layout({ children }) {
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
