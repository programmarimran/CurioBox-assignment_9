import React, { use } from "react";
import BoxDetails from "../Components/HomeLayout/BoxDetails";

const detailsBox = fetch("/curiousDetails.json").then((res) => res.json());
const AllBoxes = () => {
  const details = use(detailsBox);
  console.log(details);
  return (
    <div>
      this is all AllBoxes
      {/* <div className=" grid grid-cols-3">
        {details.map((product) => (
          <BoxDetails key={product.id} product={product}></BoxDetails>
        ))}
      </div> */}
    </div>
  );
};

export default AllBoxes;
