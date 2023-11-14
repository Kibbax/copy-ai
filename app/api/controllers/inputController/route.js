import db from '@/lib/db'
import { authOptions } from '../../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { NextResponse } from "next/server";
import jwt from "next-auth/jwt";


export const POST = async (req, res) => {
  const session = await getServerSession(authOptions)
  const token = await jwt.getToken({ req })
  console.log(token)

  if (!session) {
    return NextResponse.json({
      message: "Unauthorized",
    }, {
      status: 401
    });
  }

  const { prompt, value, targetAge } = req.body;

  if (!prompt) {
    return NextResponse.json({
      message: "Missing prompt",
    }, {
      status: 400
    });
  }

  const userFound = await db.user.findUnique({
    where: {
        email: credentials.email
    }
  })

  

  const newInput = await db.content_input.create({
    data: {
      userId: userId,
      content: prompt,
      networkType: value,
      targetAge: targetAge,
    }
  });
  console.log(newInput)
  return newInput;

}