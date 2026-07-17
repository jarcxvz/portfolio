import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
