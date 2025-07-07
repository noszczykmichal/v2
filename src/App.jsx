import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Sections/Hero/Hero";
import About from "@/components/Sections/About/About";
import Skills from "@/components/Sections/Skills/Skills";
import Projects from "@/components/Sections/Projects/Projects";
import Contact from "@/components/Sections/Contact/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
