import { problemList, problems } from "@/lib";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from 'react'

const QuestionList = () => {
    
  return (
    <section className="w-full h-full flex flex-col  ">
      <div className="flex w-full items-center justify-between mb-10"> 

        <h2 className="text-4xl font-bold"> Question List </h2>
        <p className ="text-2xl font-semibold"> February</p>
      </div>
          {problemList.map((problem, index) => {
              return (
                <Link href={"/questions/" + problem} key={index}>
                  <div className={cn(" bg-green-300 p-3 my-2 flex items-center hover:bg-gray-300/30  bg-gray-700/20 ", index % 2 === 0&& "bg-gray-700/10")}>
                    {problems[problem].title}
                  </div>
                </Link>
              );
      })}
    </section>
  );
}

export default QuestionList