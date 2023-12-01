import { NextResponse } from "next/server";
import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async () => {
    const session = await getServerSession(authOptions);

    const data = await db.User.findUnique({
        where: {
            email: session.user.email,
        },
        select: {
            inputs: {
                select: {
                    content: true,
                    results: true
                },

            },
        },
    },
    );

    return NextResponse.json(data);
};
