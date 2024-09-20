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
import Footer from "../components/Footer";
import Pengenalan from "../sections/Pengenalan";
import Explore from "../sections/Explore";
import Service from "../sections/Service";
import Review from "../sections/Review";
import Contact from "../sections/Contact";

function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [status, setStatus] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const serviceRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {status ? (
        <div>
          <NavbarHome />
          <div
            className="welcome-container"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <Slider {...settings}>
              <div className="welcome-container-1">
                <img src={FotoSMK1} alt="SMK Foto 1" />
              </div>
              <div className="welcome-container-2">
                <img src={FotoSMK2} alt="SMK Foto 2" />
              </div>
              <div className="welcome-container-3">
                <img src={FotoSMK3} alt="SMK Foto 3" />
              </div>
            </Slider>
            <div className="overlay-welcome-container"></div>
            <div className="text-welcome-container">
              <link
                href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700;900&family=Poppins:wght@500;600&display=swap"
                rel="stylesheet"
              />
              <h1 className="h1-welcome">
                Selamat datang di{" "}
                <span className="span-h1-welcome">Barmodule</span>
              </h1>
              <p className="p-welcome">
                Mari belajar bersama kami dan wujudkan mimpi mu
              </p>
              <button
                className="button-welcome"
                onClick={() => {
                  setStatus(false);
                  setButtonClicked(true); // Ubah state saat tombol diklik
                }}
              >
                Mulai Belajar
              </button>
            </div>
          </div>
     <Footer/>
        </div>
      ) : (
        <>
          <Navbar />
          <Pengenalan scrollToService={scrollToService} />
          <div ref={serviceRef}>
            <Service />
          </div>
          <Explore />
          <Review scrollToService={scrollToService} />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
export default Home;
