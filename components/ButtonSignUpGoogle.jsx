"use client";
import { signIn } from "next-auth/react";
// crear logica que permita corroborar que el mail usado para el login ya exista en la base de datos, de no ser asi crea el usuario en la base de datos consignando el mail usado para el login y requerir un password
export default function ButtonSignUpGoogle() {
  return (
    <button type="button"
      onClick={() => signIn("google", { callbackUrl: "/input" })}
      className={`link hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}
    >
      Login Google
    </button>
  );
} 
