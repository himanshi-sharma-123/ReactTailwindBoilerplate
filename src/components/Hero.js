import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#ebe7fc] h-80">
      <div className="items-center justify-center lg:ml-80 md:ml-40 py-7">
        <div className="lg:text-4xl md:text-4xl text-3xl font-bold lg:ml-60 md:ml-60 ml-20">
          Wix Premium Plans
        </div>
        <div className="lg:text-xl md:text-xl lg:ml-20 lg:px-7 lg:mt-2 md:ml-20 px-0">
          <p> Wix gives you 100s of templates, unlimited pages & top grade</p>
          <p className="lg:ml-10">
            hosting FREE. Upgrade to Premium and get even more.
          </p>
        </div>
        <div className="lg:ml-60 md:ml-60 mt-5 ml-10">
          <button className="bg-purple-500 text-white border-2 hover:bg-[#c85ad4] hover:text-black hover:border-black py-3 px-10 rounded-full cursor-pointer ml-10">
            Get Started Today
          </button>
        </div>
        <div className="flex flex-row lg:h-24 mt-5 lg:px-10 ">
          <div className="bg-white lg:px-6 md:px-6 rounded-xl rounded-b-none">
            <h1 className="text-purple-500 lg:text-xl md:text-xl text-sm mt-4 lg:ml-20 md:ml-20 ml-10">
              Website Plans
            </h1>
            <p className="text-purple-500 text-sm ml-5">
              Great for showcasing a professional site
            </p>
          </div>
          <div className="bg-blue-300 lg:px-6 md:px-6 rounded-b-none rounded-xl">
            <h1 className="mt-4 lg:text-xl md:text-xl text-sm ml-3">
              Business and Ecommerce Plans
            </h1>
            <p className="text-sm ml-3">
              Essential for accepting online payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
