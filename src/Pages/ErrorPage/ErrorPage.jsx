import React, { useContext, useEffect } from "react";
import { Link } from "react-router";
import { HomeContext } from "../../Layout/Root";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const { setIsError } = useContext(HomeContext);
  useEffect(() => {
    setIsError(true);

    return () => {
      setIsError(false);
    };
  }, [setIsError]);
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>CurioBOx||404 Page 2</title>
      </Helmet>
      <div className=" relative">
        <img
          className=" rounded-2xl"
          src="https://i.ibb.co.com/rYGxCbf/404-page-cover.jpg"
          alt=""
        />
        <Link
          className="btn absolute bottom-0 md:my-4 left-[40%] bg-blue-500 text-white wfull"
          to={"/"}
        >
          back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
