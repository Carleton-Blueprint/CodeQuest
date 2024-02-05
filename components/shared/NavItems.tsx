"use client";
import {  Book, Home, Trophy, User } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: Book,
    text: "Questions",
    href: "/questions",
  },
  {
    icon: Trophy,
    text: "Leaderboards",
    href: "/leaderboards",
  },
  {
    icon: Home,
    text: "Home",
    href: "/",
  },

  //   {
  //     icon: User,
  //     text: "Profile",
  //     href: "/profile",
  //   },
];
const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className="space-y-5 flex flex-col md:flex-row md:space-x-5 md:space-y-0 ">
      {items.map((item) => (
        <li
          key={item.text}
          className={cn(
            "border-2 p-3 md:p-0 md:border-0  rounded-md border-white hover:bg-gray-200 hover:text-black whitespace-nowrap",
            pathName === item.href && "bg-gray-400"
          )}
        >
          <Link href={item.href}>
            {" "}
            <span className="gap-x-2 flex items-center ">
              {" "}
              <item.icon /> {item.text}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
