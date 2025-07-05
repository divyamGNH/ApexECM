import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ServiceDD from "./serviceDD.jsx";
import ShopDD from "./shopDD.jsx";
import CatalogueDD from "./catalogueDD.jsx"; // capitalized import

const NavBar = () => {
  const [showDD, setShowDD] = useState("");

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-black">🎁 CorporateGifts</div>

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
          <a href="">About Us</a>
          <a href="">Our Past Work</a>

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

          <a href="">Book a Call</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
