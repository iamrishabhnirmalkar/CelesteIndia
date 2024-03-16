"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface Navlink {
  text: string;
  links: string;
}

function Header() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const Navlinks: Navlink[] = [
    {
      text: "Sale",
      links: "/sale",
    },
    {
      text: "Trending",
      links: "/trending",
    },
    {
      text: "Earrings",
      links: "/earrings",
    },
    {
      text: "Necklaces",
      links: "/necklaces",
    },
    {
      text: "rings",
      links: "/rings",
    },
    {
      text: "bracelets",
      links: "/bracelets",
    },
  ];
  const MobNavlinks: Navlink[] = [
    ...Navlinks,
    {
      text: "My Accounts",
      links: "/my_accounts",
    },
    {
      text: "Contact Us",
      links: "/contact_us",
    },
    {
      text: "Return Policy",
      links: "/Return_Refund_policy",
    },
  ];

  return (
    <>
      <div className="bg-white text-black ">
        <div className="flex justify-between items-center px-5">
          {/* Navmenuicons */}
          <div className="lg:hidden" onClick={toggleMobileMenu}>
            {mobileMenu ? <IoMdClose size={25} /> : <CiMenuBurger size={25} />}
          </div>
          {/* Logo */}
          <div className="lg:w-[8rem]  w-full flex justify-center items-center ">
            <Image
              src="\Images\logo.svg"
              width={100}
              height={100}
              alt="Logo Of the Website"
            />
          </div>
          {/* Pc Navlinks */}
          <div className="flex-1 justify-start hidden sm:block">
            <ul className="flex justify-center items-center space-x-5 font-regular">
              {Navlinks.map((navlink, index) => (
                <li key={index}>
                  <Link href={navlink.links}>
                    <p
                      className={
                        navlink.text === "Sale"
                          ? "uppercase text-red-700"
                          : "uppercase"
                      }
                    >
                      {navlink.text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Search for Desktop */}
          <div className="flex-1 hidden sm:block">
            <div className=" flex justify-center items-center ">
              <input
                type="text"
                className="border p-2"
                placeholder="Search.."
              />
            </div>
          </div>
          {/* Icons */}
          <div className="flex space-x-2 items-center  ">
            <Link href="/">
              <FaRegUser size={20} className="cursor-pointer" />
            </Link>
            <Link href="/">
              <FaRegHeart size={20} className="cursor-pointer" />
            </Link>
            <Link href="/">
              <MdOutlineShoppingBag size={20} className="cursor-pointer" />
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="flex flex-col animation px-5 max-w-screen h-screen">
            <div>
              <ul className="space-y-5">
                {MobNavlinks.map((navlink, index) => (
                  <div key={index}>
                    <li>
                      <Link href={navlink.links} onClick={closeMobileMenu}>
                        <p
                          className={
                            navlink.text === "Sale"
                              ? "uppercase text-red-700"
                              : navlink.text === "My Accounts" ||
                                navlink.text === "Contact Us" ||
                                navlink.text === "Return Policy"
                              ? "capitalize text-xs"
                              : "uppercase"
                          }
                        >
                          {navlink.text}
                        </p>
                      </Link>
                    </li>
                    {navlink.text === "bracelets" && (
                      <li>
                        <hr className="my-2 border-gray-300" />
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Mobile Seach Bar */}
        <div className="flex-1 lg:hidden ">
          <div className="p-3 flex justify-center items-center ">
            <input
              type="text"
              className="border p-2 w-full"
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
