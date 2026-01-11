import Header from "../components/Header";
import Hero from "../components/Introduction";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
}
