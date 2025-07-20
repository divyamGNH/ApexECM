import {useState, useEffect} from "react";
import BulkOrderForm from "./Form.jsx";
import shipping from "../assets/shipping.gif";
import Gift from "../assets/Gift.gif";
import CorporateGift from "../assets/CorporateGift.gif";
import axios from "axios";


const Enquire = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full p-6 gap-6">
      {/* Left section with text and GIF */}
      <div className="flex flex-col items-center justify-center text-center w-full p-6 gap-0">
        <p className="text-2xl font-semibold">
          We understand making decisions can be hard
        </p>

        <img
          src={CorporateGift}
          alt="Gift"
          className="w-full max-w-md"
        />

        <p className="text-xl">
          Fill this form and let us help you decide the perfect gift for your partners
        </p>
      </div>

      {/* Right section with form */}
      <div className="flex justify-center items-center w-full p-6">
        <BulkOrderForm />
      </div>
    </div>
  );
};

export default Enquire;
