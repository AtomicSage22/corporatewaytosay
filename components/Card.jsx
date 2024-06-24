import React, { useState } from "react";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import Stepper from "./Stepper";

const Card = ({ slang, prompt }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="p-10 rounded-3xl bg-[#635985] flex flex-col items-start my-8">
      <h1 className="text-[28px] font-bold text-white">{slang}</h1>
      <p className="text-[20px] font-semibold text-blue-200">{prompt}</p>



    </div>
  );
};

export default Card;
