import React from "react";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import amex from "../assets/amex.png";
import unionpay from "../assets/unionpay.png";
import last from "../assets/last.png";
import fourteen from "../assets/14.png";
import secure from "../assets/secure.png";

const Payment = () => {
  return (
    <div className="mt-10">
      <div className="text-sm font-light px-20">
        <p>
          Displayed prices are for yearly subscriptions, paid in full at the
          time of purchase. Prices do not include applicable taxes, which are
          determined according to your billing address.
        </p>
        <p>
          The final price can be seen on the purchase page, before payment is
          completed.
        </p>
      </div>
      <hr className="mt-7" />
      <div className="flex lg:flex-row md:flex-row flex-col mt-10 px-20 justify-between overflow-x-hidden">
        <div className="">
          <div>Accepted Payments</div>
          <div className="flex flex-row">
            <img src={visa} alt="" width={60} height={60} />
            <img src={mastercard} alt="" width={60} height={60} />
            <img src={amex} alt="" width={60} height={60} />
            <img src={unionpay} alt="" width={60} height={60} />
            <img src={last} alt="" width={60} height={60} />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={fourteen} alt="" className="mt-4 mr-4" />
          </div>
          <div>
            <h1>Money Back Gurantee</h1>
            <div className="mt-4">
              <p className="font-light">
                Try Wix for 14 days and if you're not 100%{" "}
              </p>
              <p className="font-light">satisfied, get your money back.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={secure} alt="" className="mt-4 mr-4" />
          </div>
          <div>
            <h1>SSL Secure Payment</h1>
            <div className="mt-4">
              <p className="font-light">
                Your information is protected by 256-bit SSL
              </p>
              <p className="font-light">encryption.</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Payment;
