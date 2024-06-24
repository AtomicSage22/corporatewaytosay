"use client";

import React, { useState, useEffect } from "react";

import Card from "@/components/Card";
import { Container } from "@mui/material";
import SearchBox from "@/components/SearchBox";
import { slangsList } from "../slangs/slangs";
import axios from "axios";

function parseStringToJSX(str) {
  // Convert the string to an array of lines
  const lines = str.split('\n');

  // Process each line
  return lines.map((line, index) => {
    // Match bold text
    const boldPattern = /\*\*(.*?)\*\*/g;
    const parts = line.split(boldPattern).map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );

    // Check if the line is a list item
    if (line.startsWith('* ')) {
      const listItemContent = parts.join('');
      return <li key={index}>{listItemContent}</li>;
    }

    // Return as paragraph if it's not a list item
    return <p key={index}>{parts}</p>;
  });
}

export default function Home() {
  const intialPrompt = 'Translate the following casual phrase into five different professional corporate tones and only respond with the converted texts: '
  const [search, setSearch] = useState("");
  const [responses, setResponses] = useState([]); 





  async function fetchData() {
    const response = await axios.get(`http://localhost:3000/api/translation?prompt=${encodeURIComponent(intialPrompt + search)}`);
    setResponses(response.data.response.trim().split(/\d+\.\s+/)
    .map(sentence => sentence.trim().replace(/\n$/, ''))
    .filter(sentence => sentence !== ''))
  }
  
  

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
          <SearchBox search={search} setSearch={setSearch} onSubmit={fetchData} />
          {responses.map((response, index) => (
            <Card slang={response} prompt={prompt} key={index} />
          ))}
        </Container>
      </main>
    </>
  );
}
