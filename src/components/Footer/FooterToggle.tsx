"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

interface Link {
  to: string;
  text: string;
}

interface ToggleProps {
  heading: string;
  links: Link[];
}

function FooterToggle({ heading, links }: ToggleProps): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);
  const [arrow, setArrow] = useState<JSX.Element>(<IoIosArrowDown size={20} />);

  const handleToggle = (): void => {
    setToggle(!toggle);
    setArrow(
      !toggle ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />
    );
  };

  return (
    <div className="border-b border-white py-5">
      <div
        className="flex  px-2 items-center justify-between"
        onClick={handleToggle}
      >
        <h1 className="uppercase px-2  text-xl py-2">{heading}</h1>
        {arrow}
      </div>
      {toggle && (
        <ul>
          {links.map((link: Link, index: number) => (
            <li className="capitalize px-4 text-sm" key={index}>
              <Link href={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FooterToggle;
