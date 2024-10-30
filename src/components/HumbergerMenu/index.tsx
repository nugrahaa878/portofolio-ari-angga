import { useState } from 'react';
import humbergerMenu from "../../assets/humberger.svg";

interface NavLinkProps {
  text: string;
  targetId: string;
  onClick?: () => void;
}

const NavLink = ({ text, targetId, onClick }: NavLinkProps) => (
  <button
    onClick={() => {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
      onClick?.();
    }}
    className="w-full text-left py-4 px-6 hover:bg-gray-100 transition-colors"
  >
    <h3>{text}</h3>
  </button>
);

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        onClick={toggleMenu}
        className="absolute right-8 top-8 z-50"
        aria-label="Toggle menu"
      >
        <img src={humbergerMenu} alt="menu" className="w-8" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile menu */}
      <div 
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 flex flex-col">
          <NavLink text="Projects" targetId="projects" onClick={toggleMenu} />
          <NavLink text="Experiences" targetId="experiences" onClick={toggleMenu} />
          <NavLink text="Article" targetId="articles" onClick={toggleMenu} />
          <div className="px-6 py-4">
            <button
              onClick={() => {
                const element = document.getElementById("experiences");
                element?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;