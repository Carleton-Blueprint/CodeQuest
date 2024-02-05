import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import NavItems from "./NavItems";

const Header = () => {
  const userId = "null"; 
  return (
    <header className="flex flex-row items-center justify-between bg-transparent border-b-2  p-4">
      <Link href={"/"}>
        <h1 className="font-extrabold text-4xl text-white">Applify</h1>
      </Link>
      <div className="flex items-center flex-row  gap-x-5">
        {userId !== null ? (
          <>
            <nav className="hidden md:block  ">
              {/* <NavItems /> */}
            </nav>
            {/* <UserButton afterSignOutUrl="/" /> */}
            <Sheet>
              <SheetTrigger className="block md:hidden">
                <MenuIcon />
              </SheetTrigger>

              <SheetContent className="bg-white/80">
                <SheetHeader>
                  <SheetTitle className="mb-10">
                    {" "}
                    <>
                      <h1 className="font-extrabold text-2xl">Applify</h1>
                    </>
                  </SheetTitle>
                  <SheetDescription>
                    <NavItems />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <Button className="h-8" variant={"default"}>
            <Link href={"/sign-in"}>Login </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
