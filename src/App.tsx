import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./page";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
