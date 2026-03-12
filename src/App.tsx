import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import HomePage from "./page";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import About from "./pages/AboutUs";
import WhatsApp from "./components/WhatsApp";
import Benefits from "./pages/Benefits";
import FaqPage from "./pages/FaqPage";

export default function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>

        <WhatsApp />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
