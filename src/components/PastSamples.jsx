import React from "react";

//add spacing to the texts before deploying

const Block = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center w-full p-8 gap-25">
      <img
        src="src/assets/PWsamples.webp"
        alt="Gift Box"
        className="w-full md:w-1/2 rounded-lg border border-gray-200"
      />
      <div className="w-full md:w-1/2 space-y-4 ">
        <h2 className="text-2xl font-semibold">Livspace Gift Box</h2>

        <div>
          <h3 className="font-semibold ">Box Includes:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>4700BC Gourmet Chocolate Popcorn</li>
            <li>Temperature Display Water Bottle (500 ml)</li>
            <li>Google Nest Mini (2nd Generation)</li>
            <li>Black Ceramic Coffee Mug</li>
            <li>Davidoff Rich Aroma Coffee</li>
            <li>After Eight Orange and Mint Chocolate Thins</li>
            <li>Lindt Excellence Extra Creamy Milk Chocolate</li>
            <li>Greeting Card with Message</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Box Details:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Size: 14 x 12 x 4 inch</li>
            <li>Material: Rigid Kappa Board</li>
            <li>Shredded Confetti: Red</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const PastSamples = () => {
  return (
    <div className="space-y-8 p-4">
      <Block />
      <Block />
    </div>
  );
};

export default PastSamples;
