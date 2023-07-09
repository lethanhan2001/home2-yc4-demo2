import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Profess from "./components/profess/Profess";
import Services from "./components/services/Services";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Services />
      <About />
      <Profess />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
