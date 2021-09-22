import "./App.scss";
import "./styles/contact.scss";

import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { ToastContainer } from "react-toastify";

function App() {
  document.title = "Milena";
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Projects />
      <div className="about-contact-footer-wrap">
        <About />
        <div className="contact-footer-wrap">
          <Contact />
          <ToastContainer toastClassName="toast-contact" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
