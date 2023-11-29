import { NextResponse } from "next/server";
import OpenAI from "openai";

export const POST = async (request) => {
  const openai = new OpenAI({
    apiKey: "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",
  });

  try {
    const body = await request.json();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: body.prompt }],
      model: "gpt-3.5-turbo",
      //   temperature: 0.7,
      //   max_tokens: 60,
    });
    console.log(chatCompletion.choices[0].message.content);
    return NextResponse.json(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
};
