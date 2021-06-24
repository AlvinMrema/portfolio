import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
