import React, { useState } from "react";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Circle,
} from "@mui/icons-material";

const Stepper = ({ items, current, setCurrent }) => {
  function moveForward() {
    setCurrent((prev) => {
      return prev !== items.length - 1 ? prev + 1 : prev;
    });
  }

  function moveBackward() {
    setCurrent((prev) => {
      return prev !== 0 ? prev - 1 : prev;
    });
  }

  return (
    <div className="flex items-center">
      <button onClick={moveBackward}>
        <KeyboardArrowLeft className="text-white hover:text-blue-400" />
      </button>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setCurrent(index);
          }}
        >
          <Circle
            className={`${
              index === current ? "text-blue-400" : "text-white"
            } text-sm  hover:text-blue-400`}
          />
        </button>
      ))}
      <button onClick={moveForward}>
        <KeyboardArrowRight className="text-white hover:text-blue-400" />
      </button>
    </div>
  );
};

export default Stepper;
