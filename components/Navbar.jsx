"use client";

import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#393053] h-[8rem] flex items-center justify-around">
      <h1 className="text-[40px] font-bold text-white ml-4">
        corporateway<span className="text-blue-400">tosay</span>
      </h1>
      <TextField
        className="bg-gray-800"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search className="text-blue-400" />
            </InputAdornment>
          ),
          style: {
            color: "white",
          },
        }}
        variant="outlined"
      />
    </nav>
  );
};

export default Navbar;
