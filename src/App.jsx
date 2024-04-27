import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
