import React, { useState } from "react";
import logo from "../assets/logo.png";
import { TbWorldWww } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex lg:flex-row lg:items-center lg:justify-between">
      <div className="relative flex flex-row items-center justify-between">
        <img src={logo} alt="Logo" />

        <div
          className={`${
            showMenu ? "block" : "hidden"
          }  lg:flex flex-col lg:flex-row lg:gap-10 w-full lg:w-auto absolute top-28 left-4 lg:static`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-10">
            <li>
              Creation
              <FontAwesomeIcon icon={faAngleDown} />{" "}
            </li>
            <li>
              Business <FontAwesomeIcon icon={faAngleDown} />{" "}
            </li>
            <li>
              Growth <FontAwesomeIcon icon={faAngleDown} />{" "}
            </li>
            <li>
              Resources <FontAwesomeIcon icon={faAngleDown} />{" "}
            </li>
          </ul>
          <span className="hidden lg:block">|</span>
          <ul className="flex flex-col lg:flex-row lg:gap-10">
            <li>Enterprise</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-4 absolute lg:static top-72`}
      >
        <TbWorldWww style={{ height: 30, width: 50 }} />
        <button className="bg-white text-blue-500 border-2 border-blue-500 hover:bg-[#FF92A5] hover:text-black hover:border-black py-3 px-10 rounded-full cursor-pointer lg:mr-4 mr-1">
          Sign in
        </button>
      </div>
      <div className="flex lg:hidden items-center ml-auto">
        {showMenu ? (
          <AiOutlineClose
            className="text-3xl cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            className="text-3xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import logo from "../assets/logo.png";
// import { TbWorldWww } from "react-icons/tb";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   return (
//     <div className="lg:flex flex-col lg:flex-row lg:items-center lg:justify-between">
//       <div className="lg:flex flex-col lg:flex-row items-center ">
//         <img src={logo} alt="" />
//         <div className="lg:flex flex-col lg:flex-row lg:gap-10">
//           {" "}
//           <ul className="lg:flex flex-col lg:flex-row lg:gap-10">
//             <li>
//               Creation
//               <FontAwesomeIcon icon={faCaretDown} />{" "}
//             </li>
//             <li>
//               Business <FontAwesomeIcon icon={faCaretDown} />{" "}
//             </li>
//             <li>
//               Growth <FontAwesomeIcon icon={faCaretDown} />{" "}
//             </li>
//             <li>
//               Resources <FontAwesomeIcon icon={faCaretDown} />{" "}
//             </li>
//           </ul>
//           <span className="hidden lg:block">|</span>
//           <ul className="lg:flex flex-col lg:flex-row gap-10">
//             <li>Enterprise</li>
//             <li>Pricing</li>
//             <li>Support</li>
//           </ul>
//         </div>
//       </div>
//       <div className="lg:flex flex-col lg:flex-row items-center gap-4">
//         <TbWorldWww style={{ height: 30, width: 50 }} />
//         <button className="bg-white text-blue-500 border-2 border-blue-500 hover:bg-[#FF92A5] hover:text-black hover:border-black py-3 px-10 rounded-full cursor-pointer mr-4">
//           Sign in
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
