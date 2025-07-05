import react from "react";
import CustomGift from "../assets/CustomGift.gif";
import BulkOrderForm from "./Form";

//Add another seperate form or a call option for custom gifts currently we have attached the bulk order form.

const CustomGifts = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center w-full p-6 gap-6">
        {/* Left section with form */}
        <div className="flex justify-center items-center w-full p-6">
          <BulkOrderForm />
        </div>
        {/* Right section with text and GIF */}
        <div className="flex flex-col items-center justify-center text-center w-full p-6 gap-0">
          <img src={CustomGift} alt="CustomGift" className="w-full max-w-md" />

          <p className="text-2xl font-semibold">Have a Custom gift request!?</p>

          <p className="text-xl">
            Let out team assit you on your unique ideas for you and your
            partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomGifts;
