import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

interface Navlink {
  text: string;
  links: string;
}

function Header() {
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

  return (
    <>
      <div className="bg-white text-black flex justify-between items-center px-5">
        <div className="w-[8rem] justify-start">
          <Image
            src="\Images\logo.svg"
            width={100}
            height={100}
            alt="Logo Of the Website"
          />
        </div>
        <div className="flex-1 justify-start">
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
        <div className="flex-1 flex justify-center items-center">
          <input type="text" className="border p-2" placeholder="Search.." />
        </div>
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
    </>
  );
}

export default Header;
