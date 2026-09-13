import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Reveal from "./components/Reveal";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <CursorFollower />
      
      <Navbar />

      <main>
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal direction="left">
          <Skills />
        </Reveal>

        <Reveal direction="right">
          <Experience />
        </Reveal>

        <Reveal>
          <Education />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <BackToTop />

      <Footer />
    </div>
  );
}

export default App;