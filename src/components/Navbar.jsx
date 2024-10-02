import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Image1 from "../assets/images/logounj.png";
import Image2 from "../assets/images/logosmk7.png";
import "../css/Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const NavLinks = ({ mobile = false }) => (
    <ul className={`nav-links ${mobile ? "mobile" : ""}`}>
      <li>
        <a href="/" className={isActive("/") ? "active-link" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="/about" className={isActive("/about") ? "active-link" : ""}>
          About
        </a>
      </li>
      <li className="dropdown">
        <span>Materi</span>
        <ul className="dropdown-menu">
          <li>
            <a
              href="/belajar-tatarias"
              className={isActive("/belajar-tatarias") ? "active-link" : ""}
            >
              Tatarias
            </a>
          </li>
          <li>
            <a
              href="/belajar-salon"
              className={isActive("/belajar-salon") ? "active-link" : ""}
            >
              Salon
            </a>
          </li>
          <li>
            <a
              href="/belajar-treatment"
              className={isActive("/belajar-treatment") ? "active-link" : ""}
            >
              Treatment
            </a>
          </li>
          <li>
            <a
              href="/belajar-hairstyling"
              className={isActive("/belajar-hairstyling") ? "active-link" : ""}
            >
              Hairstyle
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="#explore"
          className={isActive("/#explore") ? "active-link" : ""}
        >
          Explore
        </a>
      </li>
    </ul>
  );

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Image1} alt="Logo UNJ" width={70} />
          <img src={Image2} alt="Logo SMK7" width={70} />
        </div>
        {/* Desktop Navigation */}
        <div className="navbar-menu desktop-menu">
          <NavLinks />
        </div>
        {/* Mobile Menu Button */}
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
      {/* Mobile Navigation */}
      <div className={`navbar-mobile ${mobileMenuOpen ? "active" : ""}`}>
        <NavLinks mobile={true} />
      </div>
    </nav>
  );
}

export default Navbar;
