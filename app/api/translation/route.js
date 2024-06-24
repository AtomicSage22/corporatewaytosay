import { NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);



async function generate(prompt) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}


export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const prompt = searchParams.get('prompt');
    const response = await generate(prompt);
  
    console.log(prompt); // This should log the prompt to the console
  
    return NextResponse.json(
        { 
            message: `Received prompt: ${prompt}`,
            response: response
    });
  }