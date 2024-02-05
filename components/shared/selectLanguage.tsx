"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Code2Icon } from "lucide-react";
import { LANGUAGE_VERSIONS } from "@/lib/data/constrants";



const languages = Object.entries(LANGUAGE_VERSIONS);

export function SelectLanguage({ language, setLanguage} : {language: string, setLanguage: any}) {
  

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <div className="flex-1"> 


        <Button variant="outline" className="h-[30px] text-black ">{language === "" ? <Code2Icon/> : language}</Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>

          {languages.map(([lang, version]) => { 
            return (
              <DropdownMenuRadioItem value={lang} key={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)} &nbsp; <span className="text-gray-500"> ({version })</span>
              </DropdownMenuRadioItem>
            );
          })}
          {/* <DropdownMenuRadioItem value="python">Python ({})</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="java">Java ()</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="c++">C++ ()</DropdownMenuRadioItem> */}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
