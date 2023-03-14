import { createPortal } from "react-dom";
import { useContext } from "react";
import UIContext from "./store/uiContext";

import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Backdrop from "./components/UI/Backdrop/Backdrop";

function App() {
  const { menuOpen } = useContext(UIContext);

  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
      {menuOpen &&
        createPortal(<Backdrop />, document.getElementById("modals-root"))}
    </>
  );
}

export default App;
