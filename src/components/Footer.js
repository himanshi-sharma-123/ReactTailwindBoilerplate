import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoPinterestAlt,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { BsTiktok } from "react-icons/bs";
import logo from "../assets/logo.png";

const products = [
  {
    id: 1,
    link: "Templates",
  },
  {
    id: 2,
    link: "Explore",
  },
  {
    id: 3,
    link: "Features",
  },
  {
    id: 4,
    link: "Website Builder",
  },
  {
    id: 5,
    link: "Web Accessibility",
  },
  {
    id: 6,
    link: "Velo",
  },
  {
    id: 7,
    link: "Wix Playground",
  },
  {
    id: 8,
    link: "My Sites",
  },
  {
    id: 9,
    link: "Premium Plans",
  },
  {
    id: 10,
    link: "Wix SEO",
  },
  {
    id: 11,
    link: "Logo Maker",
  },
  {
    id: 12,
    link: "Create a Blog",
  },
  {
    id: 13,
    link: "Online Store",
  },
  {
    id: 14,
    link: "Wix Bookings",
  },
  {
    id: 15,
    link: "Restuarants",
  },
  {
    id: 16,
    link: "App Market",
  },
  {
    id: 17,
    link: "Domains",
  },
  {
    id: 18,
    link: "Business Email",
  },
  {
    id: 19,
    link: "Web Hosting",
  },
  {
    id: 20,
    link: "Developers",
  },
  {
    id: 21,
    link: "Enterprise",
  },
  {
    id: 22,
    link: "Email Marketing",
  },
  {
    id: 23,
    link: "Website Design",
  },
  {
    id: 24,
    link: "Professional Tools",
  },
  {
    id: 25,
    link: "Email Marketing",
  },
  {
    id: 26,
    link: "Website Design",
  },
  {
    id: 27,
    link: "Professional Tools",
  },
];

const company = [
  {
    id: 1,
    link: "About Wix",
  },
  {
    id: 2,
    link: "Press Room",
  },
  {
    id: 3,
    link: "Investors Relations",
  },
  {
    id: 4,
    link: "Wix Jobs",
  },
  {
    id: 5,
    link: "Design Assets",
  },
  {
    id: 6,
    link: "Term of Use",
  },
  {
    id: 7,
    link: "App Market Terms",
  },
  {
    id: 8,
    link: "Privacy Policy",
  },
  {
    id: 9,
    link: "Privacy and Security Hub",
  },
  {
    id: 10,
    link: "Accessibility Statement",
  },
  {
    id: 11,
    link: "Abuse",
  },
  {
    id: 12,
    link: "Affiliates",
  },
  {
    id: 13,
    link: "Wix Capital",
  },
  {
    id: 14,
    link: "Updates & Releases",
  },
  {
    id: 15,
    link: "Contact Us",
  },
  {
    id: 16,
    link: "Patent Notice",
  },
  {
    id: 17,
    link: "Sitemap",
  },
];

const community = [
  {
    id: 1,
    link: "Wix Blog",
  },
  {
    id: 2,
    link: "Wix Marketplace",
  },
  {
    id: 3,
    link: "Student Website",
  },
  {
    id: 4,
    link: "Wix Encyclopedia",
  },
  {
    id: 5,
    link: "Partner Community",
  },
];

const support = [
  {
    id: 1,
    link: "Support Center",
  },
  {
    id: 2,
    link: "Getting Started Guide",
  },
  {
    id: 3,
    link: "Wix Learn",
  },
  {
    id: 4,
    link: "Status Page",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-full mx-auto py-16 px-40 grid lg:grid-cols-5 mt-10">
      <div className="">
        <h1 className="text-gray-600">PRODUCTS</h1>
        {products.map((product) => (
          <ul key={product.id} className="mt-3">
            <li className="text-sm text-gray-500">{product.link}</li>
          </ul>
        ))}
      </div>

      <div className="">
        <h1 className="text-gray-600">COMPANY</h1>
        {company.map((comp) => (
          <ul key={comp.id} className="mt-3">
            <li className="text-sm text-gray-500">{comp.link}</li>
          </ul>
        ))}
      </div>
      <div className="">
        <h1 className="text-gray-600">COMMUNITY</h1>
        {community.map((comm) => (
          <ul key={comm.id} className="mt-3">
            <li className="text-sm text-gray-500">{comm.link}</li>
          </ul>
        ))}
      </div>
      <div className="">
        <h1 className="text-gray-600">SUPPORT</h1>
        {support.map((supp) => (
          <ul key={supp.id} className="mt-3">
            <li className="text-sm text-gray-500">{supp.link}</li>
          </ul>
        ))}
      </div>
      <div>
        <img src={logo} alt="" width={100} />
        <p className="text-sm leading-6 text-gray-600 mt-2">
          The Wix website builder offers a complete solution from enterprise
          grade infrastructure and business features to advanced SEO and
          marketing tools--enabling anyone to create and grow online.
        </p>
        <h1 className="text-sm leading-6 text-gray-600 mt-2">
          &copy; 2006-2022 Wix.com, Inc
        </h1>
        <div className="flex flex-row gap-2 mt-4 text-gray-700">
          <Link to="/">
            <BiLogoFacebook size={20} />
          </Link>
          <Link to="/">
            <BiLogoTwitter size={20} />
          </Link>
          <Link to="/">
            <BiLogoYoutube size={20} />
          </Link>
          <Link to="/">
            <BiLogoPinterestAlt size={20} />
          </Link>
          <Link to="/">
            <BiLogoInstagram size={20} />
          </Link>
          <Link to="/">
            <BiLogoLinkedin size={20} />
          </Link>
          <Link to="/">
            <BsTiktok size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
