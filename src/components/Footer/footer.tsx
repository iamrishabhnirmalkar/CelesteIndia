import React from "react";
import List from "./List";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import FooterToggle from "./FooterToggle";

function App() {
  const currentYear = new Date().getFullYear();
  const Info = [
    {
      to: "/about_us",
      text: "About us",
    },
    {
      to: "/blogs",
      text: "Blog",
    },
    {
      to: "/contact_us",
      text: "Contact Us",
    },
    {
      to: "/contact",
      text: "my Account",
    },
  ];
  const QuickLinks = [
    {
      to: "/collections",
      text: "Collection",
    },
    {
      to: "/sale",
      text: "sale",
    },
    {
      to: "/trending",
      text: "trending ",
    },
    {
      to: "/jewellery_care",
      text: "jewellery care",
    },
  ];
  const Supports = [
    {
      to: "/privacy_policy",
      text: "privacy policy ",
    },
    {
      to: "/Return_Refund_policy",
      text: "Return/Refund Policy",
    },
    {
      to: "/shipping_cod_policy",
      text: "shipping and Cod ",
    },
    {
      to: "/contact_us",
      text: "Customer Care Support",
    },
    {
      to: "/terms_of_services",
      text: "terms of services ",
    },
  ];
  return (
    <>
      <div className="bg-black ">
        {/* NavMenu for Desktop */}
        <div className="hidden lg:block">
          <div className="flex justify-center items-center p-10">
            <List Heading="Info" Lists={Info} />
            <List Heading="Quick Links" Lists={QuickLinks} />
            <List Heading="Supports" Lists={Supports} />
          </div>
        </div>
        {/* NavMenu For Mobile */}
        <div className="block lg:hidden">
          <FooterToggle heading="Info" links={Info} />
          <FooterToggle heading="Quick Links" links={QuickLinks} />
          <FooterToggle heading="Supports" links={Supports} />
        </div>
        {/* Icons and company name */}
        <div className="flex flex-col lg:flex-row lg:p-3 p-10  ">
          <div className=" lg:flex flex-1 px-20">
            <p className="text-center uppercase">Celeste India</p>
          </div>
          <div className="flex space-x-3 justify-center px-20 lg:py-0 py-5">
            <div className="border rounded-3xl p-2 hover:text-black hover:bg-white">
              <FaFacebookF size={20} />
            </div>
            <div className="border rounded-3xl p-2 hover:text-black hover:bg-white">
              <FaInstagram size={20} />
            </div>
            <div className="border rounded-3xl p-2 hover:text-black hover:bg-white">
              <FaPinterestP size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-xs py-10 px-9">
        <Link href="https://www.linkedin.com/in/iamrishunir/">
          © {currentYear} Celeste India. All rights reserved by RN Enterprises.
          | Designed and developed by Rishabh Nirmalkar
        </Link>
      </div>
    </>
  );
}

export default App;
