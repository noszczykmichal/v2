/* eslint-disable react/prop-types */
import SideNavigation from "../Navigation/SideNavigation/SideNavigation";

import "./Layout.scss";

function Layout({ children }) {
  return (
    <>
      <SideNavigation />
      <main>{children}</main>
    </>
  );
}

export default Layout;
