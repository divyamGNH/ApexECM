import React from "react";

// MANY CONTENT HAS OTHER BRAND NAMES NEED TO BE FIXED
const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full px-6 py-12">

        {/* Column 1 - What We Offer */}
        <div className="flex flex-col">
          <p className="font-semibold text-base mb-4">What We Offer</p>
          <a href="" className="mb-1 hover:underline">Make Your Corporate Box</a>
          <a href="" className="mb-1 hover:underline">Micro Gift Shop</a>
          <a href="" className="mb-1 hover:underline">Gift Vouchers</a>
          <a href="" className="mb-1 hover:underline">Promotional Gifts</a>
          <a href="" className="mb-1 hover:underline">Pre-curated Hampers</a>
          <a href="" className="hover:underline">Corporate Gifts Consultation</a>
        </div>

        {/* Column 2 - Resources */}
        <div className="flex flex-col">
          <p className="font-semibold text-base mb-4">Resources</p>
          <a href="" className="mb-1 hover:underline">About Us</a>
          <a href="" className="mb-1 hover:underline">Contact Us</a>
          <a href="" className="mb-1 hover:underline">Book A Call</a>
          <a href="" className="mb-1 hover:underline">Shipping & Return Policy</a>
          <a href="" className="mb-1 hover:underline">Community Support</a>
          <a href="" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Column 3 - Newsletter */}
        {/* <div className="flex flex-col md:col-span-1">
          <p className="font-semibold text-base mb-4">Sign up to our newsletter</p>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 border border-gray-400 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button className="bg-black text-white w-fit px-4 py-2 rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div> */}

        {/* Column 4 - Contact Info */}
        <div className="flex flex-col">
          <p className="font-semibold text-base mb-4">Contact Us</p>
          <p className="mb-1">CG Innovations Private Limited</p>
          <p className="mb-1">SF-16, Crossroad Mall, Sector-2,</p>
          <p className="mb-1">Vidhyadhar Nagar, Jaipur, Rajasthan</p>
          <p className="mb-1">India, 302039</p>
          <p className="mt-2">Email: <a href="mailto:corporategifting@confettigifts.in" className="text-blue-600 hover:underline">corporategifting@confettigifts.in</a></p>
          <p>Phone: +91-9649381111</p>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center text-xs py-4">
        © 2025, Corporategiftsbyconfetti. Powered by Shopify
      </div>
    </div>
  );
};

export default Footer;
