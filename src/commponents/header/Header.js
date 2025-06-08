import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import BugrerMenu from "./BurgerMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleBurger = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  // Handle navigation to sections
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll to section
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle logo click - always go to home page and scroll to intro
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("intro");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById("intro");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header w-full max-w-[1200px] px-4 md:px-8 py-3 flex justify-between items-center rounded-[10px] mx-auto">
      <div className="flex gap-[60px] items-center">
        <button onClick={handleLogoClick} className="cursor-pointer">
          <img
            src={`${process.env.PUBLIC_URL}/image/NeuroHiveAILK.png`}
            alt="NeuroLk"
          />
        </button>
        <nav className="nav-desktop">
          <ul className="flex gap-[40px]">
            <li>
              <button
                onClick={() => handleSectionNavigation("templates")}
                className="txt-1 text-white cursor-pointer bg-transparent border-none"
              >
                Templates
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionNavigation("cases")}
                className="txt-1 text-white cursor-pointer bg-transparent border-none"
              >
                Use Cases
              </button>
            </li>
            <li>
              <NavLink to="/consultation" className="txt-1 text-white">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="txt-1 text-white">
                Knowledge Hub
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-[40px] items-center desktop-head-right">
        <select className="py-[4px] px-[8.5px] bg-[white] rounded-[5px] text-[11px]">
          <option className="text-[11px] font-semibold">PL</option>
        </select>
        <button className="black-btn py-[12px] px-[54px]">Try now</button>
      </div>
      <div
        className={`burger-menu-btn ${isOpen ? "burger-close " : ""}`}
        onClick={toggleBurger}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <BugrerMenu
        isOpen={isOpen}
        onSectionClick={handleSectionNavigation}
        onLogoClick={handleLogoClick}
      />
    </header>
  );
}
