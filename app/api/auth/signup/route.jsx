import { NextResponse } from "next/server";
import db from "../../../../lib/db.js";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const data = await req.json();
    
    const userFound = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (userFound) {
        return NextResponse.json({
            message: "User already exists"
        }, {
            status: 400
        })
    }
    
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword
        }
    })
    console.log(data);

    const {password: _ , ...user} = newUser
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
        message: "Something went wrong",
    }, {
        status: 500
    })
  }
}