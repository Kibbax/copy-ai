import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
apiKey: "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"
});

export const POST = async (request) => {

  try {
    const body = await request.json();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "suerte"}],
      model: "gpt-3.5-turbo",
    //   temperature: 0.7,
    //   max_tokens: 60,
    });
    console.log(chatCompletion.choices[0]);
     return NextResponse.json(chatCompletion.data.choices[0].text);
    
  } catch (error) {
    // console.error(error)
  }
  
};
