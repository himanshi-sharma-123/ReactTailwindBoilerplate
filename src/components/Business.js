import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Business = () => {
  return (
    <div className="mt-10">
      <div className="bg-purple-200 ml-20 mr-20 items-center justify-center px-10 py-10">
        <h1 className="text-xl font-bold">Business & eCommerce plans</h1>
        <div className="py-5">
          {" "}
          <p className="">
            Grow and manage your online business with a custom storefont,
            catalog and order management,
          </p>
          <p>shipping and taxes, integrated sales channels and more.</p>
        </div>
        <div className="flex flex-row items-center">
          {" "}
          <a href="/" className="text-blue-500">
            See Business Plans
          </a>
          <IoIosArrowRoundForward
            style={{ color: "blue", fontSize: 20, marginLeft: 4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
