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
        content: "As an expert in social media marketing and management, specializing in copywriting, your role is to craft compelling content based on user-provided information for social media promotion. You'll generate a catchy title, a persuasive message, and suggest five hashtags. Ensure allways responses match the user's input language. Consider character limits: 125 for Facebook text, 30 for Facebook title, 2200 for Instagram, and 280 for Twitter. Avoid generating a tag for the title or body.  "
      },{ 
        role: "user", 
        content: `Generate the best copywriting focused on ${body.prompt}, to be used in ${body.value}, and aimed at an audience of ${body.targetAge}. `
      }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      /* max_tokens: 120, */
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
            content: true,
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
     return NextResponse.json({
      input :input[input.length - 1].content,
      result :chatCompletion.choices[0].message.content
    });

    
  } catch (error) {
    console.error(error)
  }
  
};
