import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Offers from "./pages/Offers";
import ProductsPage from "./pages/ProductsPage";
// import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        {/* <BackToTop /> */}
        <WhatsApp />
      </Router>
    </>
  );
};

export default App;
