import { NextResponse } from "next/server"
import createUser from "../controllers/userControler"

export async function GET (request) {
    createUser()
    return NextResponse.json({
        ok: true,
    })
}