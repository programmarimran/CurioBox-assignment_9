import { Link } from "react-router";
import { FaStar } from "react-icons/fa";


const BoxCard = ({ product }) => {
    
  return (
    <div className="bg-linear-to-b from-[#f0f4ff] to-[#dbeafe]  mx-auto w-full h-full rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.banner}
        alt={product.name}
        className=" w-11/12 mx-auto mt-4 shadow-2xl h-48 object-cover rounded-t-2xl"
      />

      <div className="p-4 space-y-2 shadow-2xl border-t-2 border-gray-200  rounded-b-2xl">
       <div className=" w-11/12 space-y-4 mx-auto">
       <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <div className=" bg-amber-400 text-sm p-1 rounded-xl">{product.tech_category}</div>
          
        </div>

        <p className="text-gray-600 font-bold italic text-sm">{product.slogan}</p>
        <hr  className=" border-2 border-dashed border-gray-500" />
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <hr  className=" border-2 border-dashed border-gray-500" />
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center text-yellow-500 gap-1">
            <FaStar /> <span>{product.ratings}</span>
            <span className="text-gray-500 text-xs">({product.number_of_reviews})</span>
          </div>
          <div>
            <span className="text-lg font-semibold">${product.price}</span>
            <span className="text-sm text-gray-500 ml-1">/ {product.frequency}</span>
          </div>
        </div>

        <Link
          to={`/box-details/${product.id}`}
          className="btn btn-primary btn-sm w-full mt-4"
        >
          View Details
        </Link>
       </div>
      </div>
    </div>
  );
};

export default BoxCard;
