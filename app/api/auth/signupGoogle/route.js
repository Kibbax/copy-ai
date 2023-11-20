/* import { NextResponse } from "next/server";
import db from "@/lib/db";

// Controlador para la solicitud POST de registro de usuarios
export async function POST(req) {
    try {
        const session = await req.json();
    const data = session.session
    
    const userFound = await db.user.findUnique({
        where: {
          email: data.email,
        },
      });


    if(userFound?.password){
        console.log("ya estoy logueado")
        return NextResponse.json({
            message: "User already exists with other method",
        }, {
            status: 200
        });
    }

    if(userFound){
        console.log("todo piola")
        return NextResponse.json({
            message: "Todo oki"
        },{
            status:200
        })
    }else{
        const newUser = await db.user.create({
            data: {
              name: data.name,
              email: data.email,
            },
          });
          return NextResponse.json(newUser);
    }

    } catch (error) {
       console.log(error)        
    }
    

} */

/*
 useEffect(() => {
    async function registerUserWithGoogle(session) {
      if (session?.user?.image) {
        try {
          const res = await fetch('/api/auth/signupGoogle', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              session: session.user
            }),
          });

          if (!res.ok) {
            console.error('Failed to register user with Google. Response status:', res.status);
          }
        } catch (error) {
          console.error('Error registering user with Google:', error);
        }
      }
    }

  }, [session]);
    */