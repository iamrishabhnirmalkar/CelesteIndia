import React from "react";
import Link from "next/link";

interface ListProps {
  Heading: string;
  Lists: { text: string; to: string }[];
}

const List: React.FC<ListProps> = ({ Heading, Lists }) => {
  return (
    <div className="flex-1 text-center">
      <p className="pb-5 uppercase">{Heading}</p>
      <ul className="space-y-2 capitalize text-sm">
        {Lists.map((item, index) => (
          <li key={index}>
            <Link href={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
