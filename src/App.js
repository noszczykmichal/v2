import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default App;
