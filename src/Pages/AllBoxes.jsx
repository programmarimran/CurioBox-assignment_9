import React, { use } from "react";
import BoxDetails from "../Components/HomeLayout/BoxDetails";
import { Helmet } from "react-helmet-async";

const detailsBox = fetch("/curiousDetails.json").then((res) => res.json());
const AllBoxes = () => {
  const details = use(detailsBox);
  console.log(details);
  return (
    <div>
      <Helmet><title>CurioBox||My-Booking page</title></Helmet>
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
