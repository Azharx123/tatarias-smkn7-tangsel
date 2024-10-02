import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Home.css";
import FotoSMK1 from "../assets/images/SMK-foto-1.jpg";
import FotoSMK2 from "../assets/images/SMK-foto-2.png";
import FotoSMK3 from "../assets/images/SMK-foto-3.png";
import NavbarHome from "../components/NavbarHome";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import Pengenalan from "../sections/Pengenalan";
import Explore from "../sections/Explore";
import Service from "../sections/Service";
import Review from "../sections/Review";
import Contact from "../sections/Contact";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: "linear",
  arrows: false, // Menyembunyikan tombol panah
  swipe: false, // Menonaktifkan swipe
  pauseOnHover: false, // Menonaktifkan pause saat hover
  pauseOnFocus: false, // Menonaktifkan pause saat fokus
};

const WelcomeSection = ({ onStartLearning }) => (
  <div
    className="welcome-section"
    data-aos="fade-up"
    data-aos-offset="500"
    data-aos-duration="500"
  >
    <Slider {...sliderSettings}>
      {[FotoSMK1, FotoSMK2, FotoSMK3].map((foto, index) => (
        <div key={index} className="welcome-slide">
          <img src={foto} alt={`SMK Foto ${index + 1}`} />
        </div>
      ))}
    </Slider>
    <div className="welcome-content">
      <h1 className="welcome-title">
        Selamat datang di <span className="highlight">Barmodule</span>
      </h1>
      <p className="welcome-description">
        Mari belajar bersama kami dan wujudkan mimpi mu
      </p>
      <button className="welcome-button" onClick={onStartLearning}>
        Mulai Belajar
      </button>
    </div>
  </div>
);

const MainContent = ({ scrollToService, serviceRef }) => (
  <>
    <Navbar />
    <Pengenalan scrollToService={scrollToService} />
    <div ref={serviceRef}>
      <Service />
    </div>
    <Explore />
    <Review scrollToService={scrollToService} />
    <Contact />
  </>
);

function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const serviceRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-component">
      {showWelcome ? (
        <>
          <NavbarHome />
          <WelcomeSection onStartLearning={() => setShowWelcome(false)} />
        </>
      ) : (
        <MainContent
          scrollToService={scrollToService}
          serviceRef={serviceRef}
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
