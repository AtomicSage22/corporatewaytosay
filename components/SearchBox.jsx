import React, { useState } from "react";
import { Box, FormLabel, Input } from "@mui/material";

const SearchBox = ({ search, setSearch }) => {
  return (
    <Box className="bg-blue-400 h-[100px] flex justify-center items-center">
      <Box className="flex items-center gap-4">
        <FormLabel
          className="text-[28px] font-light text-white"
          htmlFor="search"
        >
          Corporate way to say
        </FormLabel>
        <Input
          type="text"
          className="text-[28px] font-light text-white"
          style={{ textAlign: "center" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span className="text-[28px] font-light text-white">?</span>
      </Box>
    </Box>
  );
};

export default SearchBox;
