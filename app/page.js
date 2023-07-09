import React from "react";
import Card from "@/components/Card";
import { slangs } from "../slangs/slangs";

export default function Home() {
  return (
    <div className="max-w-[1220px] m-auto">
      <main className="min-h-screen flex flex-col justify-center gap-4">
        {slangs.map((slang) => (
          <Card slang={slang} />
        ))}
      </main>
    </div>
  );
}
