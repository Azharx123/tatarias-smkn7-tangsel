import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import "react-quill/dist/quill.snow.css";
import Navbar from "../components/Navbar";
import "react-tabs/style/react-tabs.css";

const HairStyling = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeVideos, setActiveVideos] = useState({});

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hairstyling-page">
      <Navbar />
      <div className="hairstyling-container">
        <main>
          <section className="hairstyling-hero">
            <div className="hero-content">
              <h1>Belajar Hairstyling Untuk Pemula</h1>
              <p>Pemangkasan Rambut Teknik Uniform Layer</p>
              <button
                onClick={() => scrollToSection("course-summary")}
                className="cta-button"
              >
                Gabung Kelas
              </button>
            </div>
            <div className="hero-video">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/mHQFy8IZPLY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Hairstyling Tutorial"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HairStyling;
