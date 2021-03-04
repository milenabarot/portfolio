import "./App.scss";
import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
