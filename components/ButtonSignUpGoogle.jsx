"use client";
import { signIn } from "next-auth/react";

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
