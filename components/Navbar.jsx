"use client";

import React from "react";
import { TextField, InputAdornment, Container } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#393053] h-[8rem] flex items-center">
      <Container>
        <h1 className="text-[40px] font-bold text-white ml-4">
          corporateway<span className="text-blue-400">tosay</span>
        </h1>
      </Container>
    </nav>
  );
};

export default Navbar;
