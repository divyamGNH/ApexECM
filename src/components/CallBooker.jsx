import { useEffect } from "react";

const BookCall = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="flex flex-col items-center px-4 py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Book a Call</h2>
      <p className="text-gray-500 mb-8 max-w-xl text-center">
        Schedule a 30-minute consultation with our team to discuss your gifting
        needs.
      </p>

      <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg bg-white p-4">
        <div
          className="meetings-iframe-container"
          data-src="https://meetings-na2.hubspot.com/divyam?embed=true"
        ></div>
      </div>
    </section>
  );
};

export default BookCall;
