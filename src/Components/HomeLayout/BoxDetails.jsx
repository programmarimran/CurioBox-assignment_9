import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { Button } from "daisyui";

const BoxDetails = ({ product }) => {
  const [ratingType, setRatingType] = useState("Excellent");
  const [ratingValue, setRatingValue] = useState("");

  const handleSubmit = () => {
    if (!ratingValue) {
      alert("Please enter a rating.");
      return;
    }
    console.log("Submitted Rating:", { ratingType, ratingValue });
    alert("Thanks for your rating!");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
      <img
        src={product.banner}
        alt={product.name}
        className="w-full h-56 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.slogan}</p>
      <p className="text-gray-600 text-sm mt-2">{product.description}</p>

      <ul className="list-disc list-inside text-sm text-gray-700">
        {product.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 text-xs">
        {product.subscription_benefits.map((benefit, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
          >
            {benefit}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <FaStar className="text-yellow-500" />
        <span className="text-sm font-medium">
          {product.ratings} ({product.number_of_reviews} reviews)
        </span>
      </div>

      <p className="text-lg font-semibold text-green-600">${product.price}</p>

      <button className="btn btn-primary w-full">Add to Cart</button>

      {/* Rating Submission Section */}
      <div className="bg-gray-50 p-4 rounded-md mt-4 space-y-3">
        <div>
          <label className="label">
            <span className="label-text">Select Rating Type</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={ratingType}
            onChange={(e) => setRatingType(e.target.value)}
          >
            <option>Excellent</option>
            <option>Good</option>
            <option>Average</option>
            <option>Poor</option>
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text">Your Rating (1-5)</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="Give a rating (e.g. 4.5)"
            min="1"
            max="5"
            step="0.1"
            value={ratingValue}
            onChange={(e) => setRatingValue(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-full" onClick={handleSubmit}>
          Submit Rating
        </button>
      </div>
    </div>
  );
};

export default BoxDetails;
