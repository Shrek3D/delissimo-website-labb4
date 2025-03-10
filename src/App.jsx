// importera routerkomponenter för sidnavigering
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importera stilmall
import "./styles/main.css";

// importera sidkomponenter
import Index from "./pages/Index";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Job from "./pages/Job";

function App() {
  return (
    <BrowserRouter basename="/delissimo-website-labb4">
      <Routes>
        {/* route till index-sidan */}
        <Route path="/" element={<Index />} />

        {/* route till about-sidan */}
        <Route path="/about" element={<About />} />

        {/* route till menu-sidan */}
        <Route path="/menu" element={<Menu />} />

        {/* route till booking-sidan */}
        <Route path="/booking" element={<Booking />} />

        {/* route till job-sidan */}
        <Route path="/job" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
