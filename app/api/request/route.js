import { NextResponse } from "next/server";
import OpenAI from "openai";




/* export const POST = async(request)=>{
    const body = await request.json()
    console.log(body)

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-3.5-turbo",
    });
} */


export const POST = async (request) => {
  const openai = new OpenAI({
    apiKey: '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',
 });

  try {
    const body = await request.json();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: body.prompt}],
      model: "gpt-3.5-turbo",
    //   temperature: 0.7,
    //   max_tokens: 60,
    });
    console.log(chatCompletion.choices[0].message.content);
     return NextResponse.json(chatCompletion.choices[0].message.content);
    
  } catch (error) {
    console.error(error)
  }
  
};
/* import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const configuration = new Configuration({
  apiKey: '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',
});

if (!configuration.apiKey)
  throw new Error("No OPENAI_API_KEY environment variable found");

const openai = new OpenAIApi(configuration);

export async function POST(request) {
  const body = await request.json().body;

  //   better error handling
  if (!body.prompt || body.prompt.length === 0) {
    return NextResponse.error(new Error("You must provide a prompt"), {
      status: 400,
    });
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Dame un chiste para programador enfocado en el tema: ${body.prompt}`,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log("probandooooo",NextResponse.json(response.data.choices[0].text))
    return NextResponse.json(response.data.choices[0].text);
  } catch (error) {
    return NextResponse.error(error, { status: 500 });
  }
} */