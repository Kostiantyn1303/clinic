import "./App.css";
import CookieModal from "./components /CookieModal";
import { useState } from "react";
import AppBar from "./components /AppBar/AppBar";
import Hero from "./components /Hero/Hero";
import Services from "./components /Services/Services";
import Team from "./components /Team/Team";
import Blog from "./components /Blog/Blog";
import CookieForm from "./components /Contacts/Contacts";
import TestimonialsCarousel from "./components /Reviews/Reviews";
import Footer from "./components /Footer/Footer";
function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);
  const handleCloseCookieModal = () => {
    setShowCookieModal(false);
  };
  return (
    <>
      <AppBar />
      <Hero />
      <Services />
      <Team />
      <Blog />
      <TestimonialsCarousel />
      <CookieForm />
      <Footer />
      <CookieModal
        isOpen={showCookieModal}
        onRequestClose={handleCloseCookieModal}
      />
    </>
  );
}

export default App;
