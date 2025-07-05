import React from "react";

const Block = ({ source, title, description }) => {
  return (
    <div className="text-center p-4">
      <img
        src={source}
        alt="Error loading sample img"
        className="mx-auto mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className="text-gray-600 mt-2 px-8">{description}</p>
    </div>
  );
};

const OfferPage = () => {
  return (
    <div>
      <p className="text-4xl text-center">What We Offer</p>

      <p className="text-center justify-center mt-10">
        <span className="block">
          Tailored Gifting Solutions: Crafting Micro Gift Shop, Curated Gifts,
          Custom Corporate Boxes, Vouchers,
        </span>
        <span className="block mt-1">
          Promotional Gifts & Expert Consultation
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-4 px-10 ">
        {/* Hardcode this part into the frontend as this will rarely change */}
        <Block
          source="src\assets\sample-photo.webp"
          title="Micro Gift Shop"
          description="Give your recipients the gift of choice with easy-to-use micro-gift shop."
        />
        <Block
          source="src\assets\sample-photo.webp"
          title="Make Your Corporate Box"
          description="Craft personalized hampers for a seamless gift-giving experience."
        />
        <Block
          source="src\assets\sample-photo.webp"
          title="Gift Vouchers"
          description="Simple and effective. Gift freely with the simplicity of our vouchers."
        />
        
        <Block
          source="src\assets\sample-photo.webp"
          title="Gift Vouchers"
          description="Simple and effective. Gift freely with the simplicity of our vouchers."
        />

        <Block
          source="src\assets\sample-photo.webp"
          title="Gift Vouchers"
          description="Simple and effective. Gift freely with the simplicity of our vouchers."
        />

        <Block
          source="src\assets\sample-photo.webp"
          title="Gift Vouchers"
          description="Simple and effective. Gift freely with the simplicity of our vouchers."
        />

        
      </div>
    </div>
  );
};

export default OfferPage;
