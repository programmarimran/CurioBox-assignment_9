import React, { use, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const BoxDetails = () => {
  const navigate = useNavigate();
  const { user, loading } = use(AuthContext);
  const { handleAddToCard } = use(ProductContext);
  // console.log(user)
  const products = useLoaderData();
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  const [ratingType, setRatingType] = useState("Excellent");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState({});
  console.log(review);
  const handleSubmit = () => {
    if (!rating) {
      Swal.fire({
        icon: "warning",
        text: "Please select (1-5) rating",
        confirmButtonText: "Ok",
      });
      return;
    }
    const userFeedback = { comment: ratingType, rating: rating };
    toast.success("Thanks for Your Feedback !!");
    setReview(userFeedback);
  };
  // handle add to card button and redirect My boxes

  const handleAddToCardButton = (product, review) => {
    if (!review?.rating) {
      Swal.fire({
        icon: "warning",
        title: "Please",
        text: "Submit your Feedback and then Add to Card this Product Your Boxes .",
        confirmButtonText: "Okey",
      });
      return;
    }

    handleAddToCard(product, review);
    navigate("/myboxes");
    return;
  };

  return (
    <div className="px-4 py-6 space-y-6">
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      {/* Title + Description */}
      <div className="bg-gray-100 border-white border-2 p-5 rounded-lg text-center">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
      </div>

      {/* Image + Details + Rating + Price */}
      <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row gap-4">
        {/* Image */}
        <div className="w-full flex justify-center items-center md:w-2/3">
          <img
            src={product.banner}
            alt={product.name}
            className="rounded-md w-full  object-cover"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-2/3 rounded-2xl bg-amber-50 p-4 space-y-7">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.slogan}</p>

          <p className="text-gray-600 text-sm mt-2">{product.description}</p>

          <ul className="list-disc list-inside text-sm text-gray-700">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 text-xs">
            {product.subscription_benefits.map((benefit, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {benefit}
              </span>
            ))}
          </div>

          {/* card bottom price and rating */}
          <div className=" flex justify-between">
            <p className="text-yellow-600 font-semibold">
              ⭐ {product.ratings || 4.5} ({product.number_of_reviews || 120}{" "}
              reviews)
            </p>
            <p className="text-green-700 font-bold text-lg">
              ${product.price || 22}
            </p>
          </div>
          <button
            onClick={() => handleAddToCardButton(product, review)}
            className="btn btn-primary w-full "
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* ********************************* */}
      {/* show rating and review */}
      {review?.rating ? (
        <div className="  ">
          <div className=" space-y-6 bg-amber-50 p-8 rounded-2xl my-8">
            <div className=" space-y-4 md:flex gap-16 items-center justify-center">
              <h1 className=" text-2xl font-extrabold text-green-500 bg-green-50 p-4 rounded-2xl border-2 border-green-200">
                {review.comment}
              </h1>
              <div className=" md:flex text-2xl font-extrabold text-yellow-800 bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-300">
                <span className="">Rating:</span>
                <span className=" flex">
                  {" "}
                  {[1, 2, 3, 4, 5].map((num, i) =>
                    num <= review.rating ? (
                      <p key={i} className="">
                        ⭐
                      </p>
                    ) : (
                      <p key={i} className="">
                        ☆{" "}
                      </p>
                    )
                  )}
                </span>
              </div>
            </div>

            <div className=" space-y-4 md:flex gap-4 justify-center text-2xl font-extrabold text-gray-800 bg-gray-50 p-4 rounded-2xl border-2 border-gray-300">
              <div>
                <img
                  className=" mx-auto h-10 w-10 rounded-full border-2 border-blue-600"
                  src={user ? user.photoURL : ""}
                  alt=""
                />
              </div>
              <div>
                {loading ? (
                  <span className="loading loading-dots loading-xl"></span>
                ) : (
                  <h1 className="break-words text-lg font-bold">
                    {user && user.email}
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* ******************************* */}

      {/* Rating Form */}
      <div className="bg-gray-50 p-5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Please Give Your Rating</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Rating Type</label>
            <select
              className="select select-bordered w-full"
              value={ratingType}
              onChange={(e) => setRatingType(e.target.value)}
            >
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Rating (1-5)</label>
            <div className="flex gap-1 text-2xl">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setRating(num)}
                  className={
                    num <= rating ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  <FaStar />
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Your rating: {rating} star{rating > 1 ? "s" : ""}
            </p>
          </div>
          <button className="btn btn-success w-full" onClick={handleSubmit}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxDetails;
