import React from 'react'
import { Button } from '../ui/button';

const UserProfile = () => {
  return (
    <div className="grid grid-cols-6 gap-4 wrapper">
      {/* PROFILE BOX  */}
      <div className="bg-gray-600/20 rounded-lg h-[300px] p-5 flex flex-col gap-y-5">
        <div className="h-[80px] w-[80px] bg-gray-500 rounded-xl" />
        <h3 className="font-bold text-lg "> Username </h3>
        <p> 1st Year Computer Science</p>

        <Button className="bg-secondary text-black"> Edit Profile </Button>
      </div>

      {/* TOTAL PROBLEMS SOLVED */}
      <div className="bg-gray-600/20 rounded-lg  col-span-2 p-5 relative ">
        {" "}
        <span className="text-xl font-semibold">Total Problems solved </span>
        <h4 className="font-extrabold text-9xl absolute bottom-10 right-5">
          {" "}
          100
        </h4>
      </div>
      {/* BADGES */}
      <div className="bg-gray-600/20 rounded-lg  col-span-3 p-5 relative">
        {" "}
        <span className="text-xl font-semibold">Badges</span>{" "}
        <h4 className="font-extrabold text-3xl absolute top-16 "> 2 </h4>
        <div className="absolute w-full bottom-5">
          <p className="font-medium text-md"> Most Recent Badge</p>
          <p className="font-extrabold text-5xl"> Blueprinter </p>
        </div>
      </div>
      {/* RANKING */}
      <div className="bg-gray-600/20 rounded-lg h-40 p-5 relative">
        <span className="text-xl font-semibold">Ranking </span>
        <h4 className="font-extrabold text-7xl absolute bottom-5 right-5">
          {" "}
          #1{" "}
        </h4>
      </div>
      {/* STREAK */}
      <div className="bg-gray-600/20 rounded-lg h-40 p-5 relative">
        <span className="text-xl font-semibold">Streak </span>
        <span className="absolute bottom-5 right-5 flex  flex-row items-end">
          {" "}
          <h4 className="font-extrabold text-7xl "> 5 </h4>
          <h5 className="font-medium mb-1"> Questions</h5>
        </span>
      </div>
      {/* SCORE */}
      <div className="bg-gray-600/20 rounded-lg h-40 p-5 relative">
        <span className="text-xl font-semibold">Score </span>
        <h4 className="font-extrabold text-5xl absolute bottom-5 right-5">
          {" "}
          1000{" "}
        </h4>
      </div>
    </div>
  );
}

export default UserProfile