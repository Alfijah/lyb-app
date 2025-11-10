import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import HomePage from "./page";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import About from "./pages/AboutUs";
import WhatsApp from "./components/WhatsApp";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <WhatsApp />
      <Footer />
    </Router>
  );
}
