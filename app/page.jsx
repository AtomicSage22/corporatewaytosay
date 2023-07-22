"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import { Container } from "@mui/material";
import SearchBox from "@/components/SearchBox";
import { slangsList } from "../slangs/slangs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [slangs, setSlangs] = useState(slangsList);

  const filteredSlangs = slangs.filter((item) => {
    return item.meaning.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <main className=" w-full h-[calc(100vh-8rem)] flex flex-col gap-10 p-10">
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SearchBox search={search} setSearch={setSearch} />
          {filteredSlangs.map((slang) => (
            <Card slang={slang} />
          ))}
        </Container>
      </main>
    </>
  );
}
