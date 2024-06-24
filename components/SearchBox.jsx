import React, { useState } from "react";
import { Box, FormLabel, Input } from "@mui/material";

const SearchBox = ({ search, setSearch, onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Implement your search logic here
    onSubmit();
  };
  return (
    <Box className="bg-blue-400 h-[100px] flex justify-center items-center">
      <Box className="flex items-center gap-4">
        <FormLabel
          className="text-[28px] font-light text-white"
          htmlFor="search"
        >
          Corporate way to say
        </FormLabel>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="text-[28px] font-light text-white"
            style={{ textAlign: "center" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="text-[28px] font-light text-white">?</span>
        </form>
      </Box>
    </Box>
  );
};

export default SearchBox;
