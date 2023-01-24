import Toolbar from "../Navigation/Toolbar/Toolbar";
import Social from "./Social/Social";
import Email from "./Email/Email";
import About from "../Sections/About";
import "./Layout.scss";

function Layout() {
  return (
    <>
      <Toolbar />
      <main>
        <Social />
        <section>
          <About />
        </section>
        <Email />
      </main>
    </>
  );
}

export default Layout;
