import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Image1 from "../assets/images/logounj.png";
import Image2 from "../assets/images/logosmk7.png";
import "../css/Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [materiDropdown, setMateriDropdown] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setMateriDropdown(!materiDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ mobile = false }) => (
    <ul className={mobile ? "mobile-links" : "desktop-links"}>
      <li>
        {isActive("/") ? (
          <span className="disabled-link">Home</span>
        ) : (
          <a href="/">Home</a>
        )}
      </li>
      <li>
        {isActive("/about") ? (
          <span className="disabled-link">About</span>
        ) : (
          <a href="/about">About</a>
        )}
      </li>
      <li
        className="materi"
        onMouseEnter={() => setMateriDropdown(true)}
        onMouseLeave={() => setMateriDropdown(false)}
      >
        <span>Materi</span>
        {materiDropdown && (
          <ul className="dropdown-materi">
            <li>
              <a href="/belajar-tatarias">Tatarias</a>
            </li>
            <li>
              <a href="/belajar-salon">Salon</a>
            </li>
            <li>
              <a href="/belajar-treatment">Treatment</a>
            </li>
            <li>
              <a href="/belajar-hairstyling">Hairstyle</a>
            </li>
          </ul>
        )}
      </li>
      <li>
        {isActive("/#explore") ? (
          <span className="disabled-link">Explore</span>
        ) : (
          <a href="#explore">Explore</a>
        )}
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={Image1}
            alt="Logo UNJ"
            width={70}
            style={{ marginRight: 20 }}
          />
          <img src={Image2} alt="Logo SMK7" width={70} />
        </div>
        <div className="navbar-menu">
          <NavLinks />
        </div>
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <AiOutlineClose size={30} color="#FF33FC" />
          ) : (
            <BiMenu size={30} color="#FF33FC" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="navbar-mobile">
          <NavLinks mobile={true} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
