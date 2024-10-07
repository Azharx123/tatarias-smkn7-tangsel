import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi"; // Add this import
import Image1 from "../assets/images/logounj.png";
import Image2 from "../assets/images/logosmk7.png";
import "../css/Navbar.css";

const searchData = [
  {
    category: "About",
    keywords: ["Visi", "Misi", "Sejarah", "Tujuan Pembelajaran", "Kontak"],
    path: "/about",
  },
  {
    category: "Tatarias",
    keywords: ["Makeup", "Facial", "Skincare", "Beauty Treatment"],
    path: "/belajar-tatarias",
  },
  {
    category: "Salon",
    keywords: ["Hair Care", "Nail Art", "Spa", "Massage"],
    path: "/belajar-salon",
  },
  {
    category: "Treatment",
    keywords: ["Body Treatment", "Face Treatment", "Hair Treatment"],
    path: "/belajar-treatment",
  },
  {
    category: "Hairstyle",
    keywords: ["Haircut", "Hair Coloring", "Hair Styling", "Hair Extension"],
    path: "/belajar-hairstyle",
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
   const [exploreOpen, setExploreOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");
   const [filteredResults, setFilteredResults] = useState([]);
   const searchRef = useRef(null);

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

   useEffect(() => {
     if (exploreOpen) {
       document.body.style.overflow = "hidden";
       searchRef.current?.focus();
     } else {
       document.body.style.overflow = "unset";
     }

     return () => {
       document.body.style.overflow = "unset";
     };
   }, [exploreOpen]);

   useEffect(() => {
     if (searchTerm) {
       const results = searchData.reduce((acc, category) => {
         const matchingKeywords = category.keywords.filter((keyword) =>
           keyword.toLowerCase().includes(searchTerm.toLowerCase())
         );

         if (matchingKeywords.length > 0) {
           acc.push({
             category: category.category,
             keywords: matchingKeywords,
             path: category.path,
           });
         }
         return acc;
       }, []);

       setFilteredResults(results);
     } else {
       setFilteredResults([]);
     }
   }, [searchTerm]);

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
               href="/belajar-hairstyle"
               className={isActive("/belajar-hairstyle") ? "active-link" : ""}
             >
               Hairstyle
             </a>
           </li>
         </ul>
       </li>
       <li>
         <a
           onClick={(e) => {
             e.preventDefault();
             setExploreOpen(true);
           }}
           href="#explore"
           className={isActive("/#explore") ? "active-link" : ""}
           style={{ cursor: "pointer" }}
         >
           Explore
         </a>
       </li>
     </ul>
   );

  return (
    <>
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

      {/* Explore Search Modal */}
      {exploreOpen && (
        <div className="explore-modal-overlay">
          <div className="explore-modal">
            <div className="explore-modal-header">
              <div className="explore-search-container">
                <BiSearch className="explore-search-icon" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search keywords..."
                  className="explore-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  onClick={() => setExploreOpen(false)}
                  className="explore-close-button"
                >
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>

            <div className="explore-modal-content">
              {searchTerm === "" ? (
                <div className="explore-categories">
                  {searchData.map((category) => (
                    <div key={category.category} className="explore-category">
                      <h3>{category.category}</h3>
                      <div className="explore-keywords">
                        {category.keywords.map((keyword) => (
                          <a
                            key={keyword}
                            href={category.path}
                            className="explore-keyword"
                          >
                            {keyword}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="explore-categories">
                  {filteredResults.map((category) => (
                    <div key={category.category} className="explore-category">
                      <h3>{category.category}</h3>
                      <div className="explore-keywords">
                        {category.keywords.map((keyword) => (
                          <a
                            key={keyword}
                            href={category.path}
                            className="explore-keyword"
                          >
                            {keyword}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="explore-no-results">
                  No results found for "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
