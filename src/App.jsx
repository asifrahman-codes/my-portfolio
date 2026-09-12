import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects/>
      </main>
    </div>
  );
}

export default App;