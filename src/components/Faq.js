import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
  {
    id: 1,
    ques: "What is a Premium Plan?",
    ans: "Creating your website is free. With a Premium Plan you can connect your own domain, remove Wix ads from your site, and more. Most Premium Plans include a 1year free domain voucher. For best value, we recommend our Yearly or Multi-Year Plans.",
  },
  {
    id: 2,
    ques: "Can I try a Wix Premium Plan for free?",
    ans: "Yes. Try any Wix Premium Plan and if you decide it's not for you, you can cancel within 14 days and recieve a full refund-no questions asked. This applies to the initial upgrade to a Premium Plan.",
  },
  {
    id: 3,
    ques: "How do I get my free domain?",
    ans: "Most Yearly or Multi-Year Premium Plans come with a 1 year free domain voucher. You can choose your own domain name with suffixes such as .com, .net, .org and more. Once you find the perfect domain for your site, your voucher will be waiting for you at checkout.",
  },
  {
    id: 4,
    ques: "Why do I need a custom domain?",
    ans: "A custom domain, like mystunningwebsite.com, is a great way to get found online and promote your brand. Replace your free Wix UL (username.wixsite.com/sitename) with a custom domain you purchased from Wix, or one you already won.",
  },
  {
    id: 5,
    ques: "How can I get my own personalized email address?",
    ans: "Once you have your own domain, you ca purchase a Google Workspace plan and get a custom email address using your domain, like info@mystunningwebsite.com. We've partnered with Google to give you 30GB of Drive storage, as well as Google Calendar, Docs, Sheets and Slides.",
  },
  {
    id: 6,
    ques: "Where can I find my billing information?",
    ans: "Sign into your Wix account and choose Billing & Payments from the main menu at the top-right of the page. You'll see all your subscriptions and billing history right there.",
  },
  {
    id: 7,
    ques: "What online payments are accepted?",
    ans: "Wix accepts all major credit cards and debit cards, including Visa, Mastercard, American Express, Discover, JCB and Diners. Additional payment options may be availbale in your specific location.",
  },
];

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="mt-4 bg-gray-100">
      <div className="flex lg:flex-row md:flex-row flex-col py-20 px-20 gap-40">
        <div className="px-10">
          <h1 className="font-bold text-4xl">Frequently Asked</h1>
          <h1 className="font-bold text-4xl">Questions</h1>
          <p className="text-sm">Haven't found what you're looking</p>
          <p className="text-sm">
            for? Try the <span className="text-blue-500">Wix Help Center</span>{" "}
            or <span className="text-blue-500">Contact Us</span>
          </p>
        </div>

        <div className="">
          {faqs.map((faq) => (
            <div className=" bg-gray-100 flex flex-col " key={faq.id}>
              <article className="flex items-center justify-between py-6 border-gray-400 border-t">
                <h2
                  className="cursor-pointer font-bold"
                  onClick={() => setShowAnswer(!showAnswer)}
                >
                  {faq.ques}
                </h2>
                <ul>
                  {!showAnswer && (
                    <li>
                      <button onClick={() => setShowAnswer(true)}>
                        <MdKeyboardArrowDown />
                      </button>
                    </li>
                  )}
                  {showAnswer && (
                    <li>
                      <button onClick={() => setShowAnswer(false)}>
                        <MdKeyboardArrowUp />
                      </button>
                    </li>
                  )}
                </ul>
              </article>

              <article className={`${showAnswer} py-3`}>
                {showAnswer && <p>{faq.ans}</p>}
              </article>
            </div>
          ))}
          <hr className="border-t border-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
