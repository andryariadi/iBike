"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Bikes",
    path: "/our-bikes",
  },
];

export default function NavbarLink() {
  const pathName = usePathname();

  return (
    <>
      <nav className="flex items-center gap-0 md:gap-1 text-lg nav-bar">
        {links.map((link, index) => {
          return (
            <Link href={link.path} key={index} className={`${pathName === link.path && "text-accent"} text-sm md:text-xl font-bold`}>
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
