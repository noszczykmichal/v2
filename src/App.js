import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
    </Layout>
  );
}

export default App;
