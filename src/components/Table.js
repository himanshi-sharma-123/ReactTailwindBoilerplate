import React from "react";
import { BiCheck } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Table = () => {
  const data = [
    {
      id: 1,
      content: "Custom domain ",
      first: <BiCheck />,
      second: <BiCheck />,
      third: <BiCheck />,
      fourth: <BiCheck />,
    },
    {
      id: 2,
      content: "Free Domain for one year",
      first: <BiCheck />,
      second: <BiCheck />,
      third: <BiCheck />,
      fourth: "-",
    },
    {
      id: 3,
      content: "Bandwidth ",
      first: "Unlimited",
      second: "Unlimited",
      third: "2 GB",
      fourth: "1 GB",
    },
    {
      id: 4,
      content: "Storage Space ",
      first: "35 GB",
      second: "10 GB",
      third: "3 GB",
      fourth: "500 MB",
    },
    {
      id: 5,
      content: "Video hours ",
      first: "5 hours",
      second: "1 hour",
      third: "30 minutes",
      fourth: "-",
    },
    {
      id: 6,
      content: "Yandex voucher ",
      first: <BiCheck />,
      second: <BiCheck />,
      third: "-",
      fourth: "-",
    },
    {
      id: 7,
      content: "Site Booster app",
      side: "Free for 1 year",
      first: <BiCheck />,
      second: <BiCheck />,
      third: "-",
      fourth: "-",
    },
    {
      id: 8,
      content: "Visitor Analytics app ",
      side: "Free for 1 year",
      first: <BiCheck />,
      second: <BiCheck />,
      third: "-",
      fourth: "-",
    },
    {
      id: 9,
      content: "Professional logo ",
      first: <BiCheck />,
      second: "-",
      third: "-",
      fourth: "-",
    },
    {
      id: 10,
      content: "Social media logo files ",
      first: <BiCheck />,
      second: "-",
      third: "-",
      fourth: "-",
    },
    {
      id: 11,
      content: "Customer care ",
      first: "Priority customer care",
      second: "24/7 customer care",
      third: "24/7 customer care",
      fourth: "24/7 customer care",
    },
  ];

  return (
    <div className="overflow-x-auto mt-10 lg:ml-40">
      <table className="table-auto border-collapse border border-gray-300 relative">
        <thead className="">
          <tr>
            <th className="border border-gray-300 px-4 py-6"></th>
            <th className="border border-gray-300 px-4 py-20 hover:bg-gray-200 group">
              <div className="">
                <h1 className="">VIP</h1>
                <p className="font-light">First Priority Support</p>
                <span>-</span>
                <h1>500 py6./month</h1>
              </div>
            </th>
            <th className="border border-gray-300 px-4 py-2 hover:bg-gray-200 group">
              <div>
                <h1>Unlimited</h1>
                <p className="font-light">Enterpreneurs & Freelancers</p>
                <span>-</span>
                <h1>250 py6./month</h1>
              </div>
            </th>
            <th className="border border-gray-300 px-4 py-2 hover:bg-gray-200 group">
              <div>
                <h1>Combo</h1>
                <p className="font-light">First Personal Use</p>
                <span>-</span>
                <h1>150 py6./month</h1>
              </div>
            </th>
            <th className="border border-gray-300 px-4 py-2 hover:bg-gray-200 group">
              <div>
                <h1>Connect Domain</h1>
                <p className="font-light">Most Basic</p>
                <div className="text-sm font-light ">
                  <IoIosInformationCircleOutline /> This plans displays Wix ads
                </div>
                <h1>90 py6./month</h1>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-3 py-2">
                <div>
                  <div className="flex fex-row justify-between items-center">
                    {" "}
                    {item.content}
                    <IoIosInformationCircleOutline />
                  </div>
                  <div className="text-sm">{item.side}</div>
                </div>
              </td>
              <td className="border border-gray-300 px-10 py-2 items-center text-center justify-center hover:bg-gray-200 group">
                {item.first}
              </td>
              <td className="border border-gray-300 px-10 py-2 items-center text-center justify-center hover:bg-gray-200 group">
                {item.second}
              </td>
              <td className="border border-gray-300 px-10 py-2 items-center text-center justify-center hover:bg-gray-200 group">
                {item.third}
              </td>
              <td className="border border-gray-300 px-10 py-2 items-center text-center justify-center hover:bg-gray-200 group">
                {item.fourth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
