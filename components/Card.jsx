import React, { useState } from "react";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import Stepper from "./Stepper";

const Card = ({ slang }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="p-10 rounded-3xl bg-[#635985] flex flex-col items-start my-8">
      <h1 className="text-[28px] font-bold text-white">{slang.title}</h1>
      <p className="text-[20px] font-semibold text-blue-200">{slang.meaning}</p>
      <div className="border-l-2 border-blue-400 pl-2 mt-2">
        <p className="mt-2 text-white">{slang.examples[current].firstPerson}</p>
        <p className="font-semibold text-white">
          {slang.examples[current].secondPerson}
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <Stepper
          items={slang.examples}
          current={current}
          setCurrent={setCurrent}
        />
      </div>

      <p className="mt-2 font-medium text-white">
        {" "}
        By:{" "}
        <span className="text-white cursor-pointer hover:text-blue-400">
          {slang.username}
        </span>
      </p>
      <div className="flex gap-2 mt-4">
        <button className="flex justify-center items-center border-[1px] rounded-full hover:border-blue-400">
          <ArrowUpward size={40} className="text-white hover:text-blue-400" />
        </button>
        <button className="flex justify-center items-center border-[1px] rounded-full hover:border-blue-400">
          <ArrowDownward size={40} className="text-white hover:text-blue-400" />
        </button>
      </div>
    </div>
  );
};

export default Card;
