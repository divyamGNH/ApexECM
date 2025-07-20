import React, { useState } from "react";
import axios from "axios";

const BulkOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productTags: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/send-enquiry",
        formData
      );

      console.log("Form submitted:", response.data);
      alert("Order submitted successfully!");
    } catch(err){
      console.log("Error sending form data",err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-gray-50 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Bulk Order Enquiry
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-gray-300 text-base"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            value={formData.company}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-gray-300 text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-gray-300 text-base"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-gray-300 text-base"
          />
        </div>

        <input
          type="text"
          name="productTags"
          placeholder="Product Code(s) e.g. #A101, #B205"
          required
          value={formData.productTags}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-gray-300 text-base"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
          value={formData.quantity}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-gray-300 text-base"
        />

        <textarea
          name="message"
          placeholder="Custom Message or Instructions"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-gray-300 text-base h-32 resize-none"
        />

        <button
          type="submit"
          className="py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-md transition-colors"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default BulkOrderForm;
