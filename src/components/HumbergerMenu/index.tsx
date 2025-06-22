import { useState } from 'react';
import { X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import iconMain from "../../assets/icon-main.png";
import iconText from "../../assets/icon-text.png";

interface NavLinkProps {
  text: string;
  targetId: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const NavLink = ({ text, targetId, onClick, icon }: NavLinkProps) => (
  <button
    onClick={() => {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
      onClick?.();
    }}
    className="group w-full text-left py-4 px-6 hover:bg-gradient-to-r hover:from-synergyBlue-50 hover:to-synergyTeal-50 transition-all duration-300 flex items-center justify-between border-b border-synergyGray-100 last:border-b-0"
  >
    <div className="flex items-center space-x-3">
      {icon && <div className="text-synergyBlue-600">{icon}</div>}
      <span className="text-synergyGray-900 font-medium group-hover:text-synergyBlue-600 transition-colors duration-300">
        {text}
      </span>
    </div>
    <ChevronRight className="w-5 h-5 text-synergyGray-400 group-hover:text-synergyBlue-600 group-hover:translate-x-1 transition-all duration-300" />
  </button>
);

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed right-6 top-6 z-50 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-synergyGray-200 hover:bg-white transition-all duration-300"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-synergyGray-700 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 bg-synergyGray-700 mt-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-synergyGray-700 mt-1 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-synergyBlue-600 to-synergyTeal-600 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img src={iconMain} alt="Synergy Bytes" className="w-8 h-8" />
              <img src={iconText} alt="Synergy Bytes" className="h-4" />
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-bold">Healthcare Technology</h3>
            <p className="text-sm opacity-90">Reimagined</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-4">
          <NavLink
            text="Layanan Kami"
            targetId="services"
            onClick={toggleMenu}
            icon={<div className="w-5 h-5 bg-synergyBlue-100 rounded flex items-center justify-center text-xs">🏥</div>}
          />
          <NavLink
            text="Keahlian"
            targetId="expertise"
            onClick={toggleMenu}
            icon={<div className="w-5 h-5 bg-synergyTeal-100 rounded flex items-center justify-center text-xs">⚕️</div>}
          />
          <NavLink
            text="Case Studies"
            targetId="case-studies"
            onClick={toggleMenu}
            icon={<div className="w-5 h-5 bg-synergyPurple-100 rounded flex items-center justify-center text-xs">📊</div>}
          />
          <NavLink
            text="Tentang Kami"
            targetId="team"
            onClick={toggleMenu}
            icon={<div className="w-5 h-5 bg-synergyGray-100 rounded flex items-center justify-center text-xs">👥</div>}
          />
        </div>

        {/* Contact Info */}
        <div className="px-6 py-4 bg-synergyGray-50 border-t border-synergyGray-200">
          <h4 className="font-semibold text-synergyGray-900 mb-3">Hubungi Kami</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-synergyBlue-600" />
              <span className="text-sm text-synergyGray-700">+62 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-synergyBlue-600" />
              <span className="text-sm text-synergyGray-700">hello@synergybytes.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-synergyBlue-600" />
              <span className="text-sm text-synergyGray-700">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="p-6 space-y-3">
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="w-full bg-gradient-to-r from-synergyBlue-600 to-synergyTeal-600 hover:from-synergyBlue-700 hover:to-synergyTeal-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg active:scale-95"
          >
            Konsultasi Gratis
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("services");
              element?.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="w-full border-2 border-synergyBlue-600 text-synergyBlue-600 hover:bg-synergyBlue-600 hover:text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 active:scale-95"
          >
            Lihat Portfolio
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-synergyGray-900 text-center">
          <p className="text-xs text-synergyGray-400">
            © 2024 Synergy Bytes. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;