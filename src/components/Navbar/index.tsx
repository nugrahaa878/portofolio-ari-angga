import { Menu, X } from "lucide-react";
import { useState } from "react";
import iconMain from "../../assets/icon-main.png";
import iconText from "../../assets/icon-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b py-2 border-synergyGray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={iconMain}
              alt="Synergy Bytes Logo"
              className="w-10 h-10 object-contain"
            />
            <img
              src={iconText}
              alt="Synergy Bytes"
              className="h-5 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-synergyGray-700 hover:text-synergyBlue-600 font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-synergyGray-700 hover:text-synergyBlue-600 font-medium transition-colors duration-200"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-synergyGray-700 hover:text-synergyBlue-600 font-medium transition-colors duration-200"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-synergyGray-700 hover:text-synergyBlue-600 font-medium transition-colors duration-200"
            >
              About
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-synergyBlue-600 hover:text-synergyBlue-700 font-medium transition-colors duration-200"
            >
              Contact
            </button>
            <button className="bg-synergyBlue-600 hover:bg-synergyBlue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-synergyGray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-synergyGray-700" />
            ) : (
              <Menu className="w-6 h-6 text-synergyGray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-synergyGray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-synergyGray-700 hover:text-synergyBlue-600 font-medium py-2 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="block w-full text-left text-synergyGray-700 hover:text-synergyBlue-600 font-medium py-2 transition-colors duration-200"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="block w-full text-left text-synergyGray-700 hover:text-synergyBlue-600 font-medium py-2 transition-colors duration-200"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block w-full text-left text-synergyGray-700 hover:text-synergyBlue-600 font-medium py-2 transition-colors duration-200"
              >
                About
              </button>
              <div className="pt-4 border-t border-synergyGray-200 space-y-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-synergyBlue-600 hover:text-synergyBlue-700 font-medium py-2 transition-colors duration-200"
                >
                  Contact
                </button>
                <button className="w-full bg-synergyBlue-600 hover:bg-synergyBlue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
