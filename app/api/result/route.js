import { NextResponse } from "next/server"
import createUser from "../controllers/userController"

/* export async function GET (request) {
    createUser()
    return NextResponse.json({
        ok: true,
    })
} */

/* export async function POST (req){
    console.log(req)
    const {inputData} = await 
    console.log(inputData)
    return NextResponse.json(inputData)
} */
export async function POST(request) {
    const res = await request.json()
    console.log(res)
    return Response.json({ res })
  }