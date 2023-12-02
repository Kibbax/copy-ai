import { NextResponse } from "next/server";
import OpenAI from "openai";
import db from '@/lib/db'
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'


export const POST = async (request) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
 });

  try {
    const body = await request.json();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ 
        role: "system",
        content: "You will always respond in the same language the user writes to you, unless instructed otherwise. You are an expert in social media marketing and community management, specializing in copywriting. Users will provide information for you to process and respond with a ready-to-copy text for social media. Craft a catchy title, persuasive message, and suggest 5 #tags. "
      },{ 
        role: "user", 
        content: `Generate the best copywriting focused on ${body.prompt}, to be used in ${body.value}, and aimed at an audience of ${body.targetAge}.`
      }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 120,
    });
    /* console.log(chatCompletion.choices[0].message.content); */
    const session = await getServerSession(authOptions)
    const userFound = await db.user.findUnique({
      where: {
          email: session.user.email
      },
      include:{
        inputs: {
          select: {
            id:true,
          }
        }
      }
    })
    const input = userFound.inputs
    
    const newResult = await db.Result.create({
      data: {
        inputId: input[input.length - 1].id,
        result: chatCompletion.choices[0].message.content,
      }
    });
     return NextResponse.json(chatCompletion.choices[0].message.content);

    
  } catch (error) {
    console.error(error)
  }
  
};
