"use client";

import React from "react";
import Card from "@/components/Card";
import { slangs } from "../slangs/slangs";
import { Container } from "@mui/material";

export default function Home() {
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
          {slangs.map((slang) => (
            <Card slang={slang} />
          ))}
        </Container>
      </main>
    </>
  );
}
