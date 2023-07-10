import React from "react";
import {
  BiUpvote,
  BiDownvote,
  BiSolidUpvote,
  BiSolidDownvote,
} from "react-icons/bi";

const Card = ({ slang }) => {
  return (
    <div className="p-10 rounded-3xl bg-[#635985] flex flex-col items-start my-8">
      <h1 className="text-[28px] font-bold text-white">{slang.title}</h1>
      <p className="text-[14px] font-semibold">{slang.meaning}</p>
      <div className="border-l-2 border-blue-400 pl-2 mt-2">
        <p className="mt-2">{slang.example.firstPerson}</p>
        <p className="font-semibold">{slang.example.secondPerson}</p>
      </div>

      <p className="mt-2 font-medium">By: {slang.username}</p>
      <div className="flex gap-2 mt-4">
        <button className=" rounded flex justify-center items-center">
          <BiUpvote size={40} className="hover:text-blue-400" />
        </button>
        <button className=" rounded flex justify-center items-center">
          <BiDownvote size={40} className="hover:text-blue-400" />
        </button>
      </div>
    </div>
  );
};

export default Card;
