import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcrypt";

// Controlador para la solicitud POST de registro de usuarios
export async function POST(req) {
  try {
    // Parsea los datos JSON de la solicitud
    const data = await req.json();
    
    // Busca al usuario en la base de datos por correo electrónico
    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // Si el usuario ya existe, retorna un mensaje de error
    if (userFound) {
      return NextResponse.json({
        message: "User already exists",
      }, {
        status: 400
      });
    }

    // Hashea la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Crea un nuevo usuario en la base de datos con la contraseña hasheada
    const newUser = await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    // Filtra la contraseña del objeto del usuario antes de enviar la respuesta
    const { password: _, ...user } = newUser;

    // Retorna los datos del usuario recién creado
    return NextResponse.json(user);
  } catch (error) {
    // Si ocurre un error, retorna un mensaje de error interno del servidor
    return NextResponse.json({
      message: "Something went wrong",
    }, {
      status: 500
    });
  }
}
