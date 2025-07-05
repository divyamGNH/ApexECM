import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ServiceDD from "./serviceDD.jsx";
import ShopDD from "./shopDD.jsx";
import CatalogueDD from "./catalogueDD.jsx";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const [showDD, setShowDD] = useState("");
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <button
          onClick={navigateHome}
          className="text-2xl font-bold text-black hover:text-blue-600 transition-colors"
        >
          🎁 CorporateGifts
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium relative">

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDD("services")}
            onMouseLeave={() => setShowDD("")}
          >
            <div className="flex items-center cursor-pointer">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 ml-1 relative top-1" />
            </div>
            {showDD === "services" && (
              <div className="absolute top-10 left-0 mt-2 z-20 bg-white shadow-md rounded">
                <ServiceDD />
              </div>
            )}
          </div>

          {/* Shop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDD("shop")}
            onMouseLeave={() => setShowDD("")}
          >
            <div className="flex items-center cursor-pointer">
              <span>Shop</span>
              <ChevronDown className="w-4 h-4 ml-1 relative top-1" />
            </div>
            {showDD === "shop" && (
              <div className="absolute top-10 left-0 mt-2 z-20 bg-white shadow-md rounded">
                <ShopDD />
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link to="/about-us" className="hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link to="/pastworks" className="hover:text-blue-600 transition-colors">
            Our Past Work
          </Link>

          {/* Catalogue Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDD("catalogue")}
            onMouseLeave={() => setShowDD("")}
          >
            <div className="flex items-center cursor-pointer">
              <span>Catalogue</span>
              <ChevronDown className="w-4 h-4 ml-1 relative top-1" />
            </div>
            {showDD === "catalogue" && (
              <div className="absolute top-10 left-0 mt-2 z-20 bg-white shadow-md rounded">
                <CatalogueDD />
              </div>
            )}
          </div>

          <Link to="/book-call" className="hover:text-blue-600 transition-colors">
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
