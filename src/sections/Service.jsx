import React, { useEffect } from "react";
import Image1 from "../assets/images/card1.2.png";
import Image2 from "../assets/images/card1.3.png";
import Image3 from "../assets/images/card1.4.png";
import Image4 from "../assets/images/card1.5.png";
import "../css/Service.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Service() {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div>
      <div className="our-service-container">
        <div
          className="our-service-title"
          data-aos="fade-up"
          data-aos-offset="350"
        >
          <span className="spans">MATERI KAMI</span>
          <h1 style={{ color: "#34364A" }}>
            Materi Yang <span style={{ color: "#FF33FC" }}>Tersedia</span>
          </h1>
        </div>
        <div
          className="service-container"
          data-aos-offset="350"
          data-aos="slide-up"
          data-aos-once="false"
        >
          <div className="service-card">
            <a href="/belajar-tatarias">
              <div className="service-card-image">
                <img src={Image3} alt="" width={100} />
              </div>
              <div className="service-card-title">Tata Rias</div>
              <div className="service-card-desc">
                Seni dan teknik dalam menciptakan tampilan yang berbeda dan
                menarik melalui pengaturan, styling, dan perawatan rambut.
              </div>
            </a>
          </div>
          <div className="service-card">
            <a href="/belajar-salon">
              <div className="service-card-image">
                <img src={Image2} alt="" width={100} />
              </div>
              <div className="service-card-title">Salon</div>
              <div className="service-card-desc">
                Salon adalah tempat yang menyediakan berbagai layanan kecantikan
                dan perawatan diri, seperti potong rambut, perawatan kulit,
                manikur, pedikur, dan pijat
              </div>
            </a>
          </div>
          <div className="service-card">
            <a href="/belajar-treatment-rambut">
              <div className="service-card-image">
                <img src={Image1} alt="" width={100} />
              </div>
              <div className="service-card-title">Treatment</div>
              <div className="service-card-desc">
                Treatment di salon merupakan proses perawatan khusus yang
                ditawarkan untuk merawat dan memanjakan tubuh dan kulit.
              </div>
            </a>
          </div>
          <div className="service-card">
            <a href="/belajar-hairstyling">
              <div className="service-card-image">
                <img src={Image4} alt="" width={100} />
              </div>
              <div className="service-card-title">Hairstyle</div>
              <div className="service-card-desc">
                Hairstyling adalah seni dan teknik dalam menciptakan tatanan
                rambut yang berbeda dan menarik.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
