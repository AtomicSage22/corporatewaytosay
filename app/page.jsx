"use client"
import React from "react";
import Card from "@/components/Card";
import { slangs } from "../slangs/slangs";
import {Container} from "@mui/material";


export default function Home() {
  return (
    // <div className="max-w-[1220px] m-auto">
    //   <main className="min-h-screen flex flex-col justify-center gap-4">
    //     {slangs.map((slang) => (
    //       <Card slang={slang} />
    //     ))}
    //   </main>
    // </div>
    <>
      <nav className="w-full bg-[#393053] h-[8rem] flex justify-center items-center">
        <h1 className=" h-[3rem] text-5xl font-bold text-white">Corporate Way To Say</h1>
      </nav>
        <main className="bg-[#18122B] w-full h-[calc(100vh-8rem)] flex flex-col gap-10 p-10">
        <Container maxWidth = "lg" sx={{
          display: "flex",
          gap: "3rem",
          flexDirection: "column",
        }}>
          {slangs.map((slang) => (
              <Card slang={slang} />
            ))}
        </Container>
        </main>
    </>
  );
}
