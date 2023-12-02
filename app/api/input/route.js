import db from '@/lib/db'
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { NextResponse } from "next/server";
import jwt from "next-auth/jwt";


export const POST = async (req, res) => {
  const session = await getServerSession(authOptions)

  const data = await req.json();

  if (!session) {
    return NextResponse.json({
      message: "Unauthorized",
    }, {
      status: 401
    });
  }

  const { prompt, value, targetAge } = data;

  if (!prompt) {
    return NextResponse.json({
      message: "Missing prompt",
    }, {
      status: 400
    });
  }
  try{
    const userFound = await db.user.findUnique({
      where: {
          email: session.user.email
      }
    })
  
    function upperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    const newInput = await db.ContentInput.create({
      data: {
        userId: userFound.id,
        content: upperCase(prompt),
        networkType: value,
        targetAge: targetAge,
      }
    });
    return NextResponse.json(newInput);
  }catch(error){
    console.log(error)
    return NextResponse.json({
      message: "Something went wrong",
    }, {
      status: 500
    });
  }
  

}
