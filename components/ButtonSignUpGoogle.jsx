"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function ButtonSignUpGoogle() {
  const [loading, setLoading] = useState(false);

  return (
    <button type="button"
      onClick={() => {signIn("google", { callbackUrl: "/input" }); setLoading(true)}}
      className={`link hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg block m-auto`}
    >
      {loading ? "Loading...": "Login Google"}
      
    </button>
  );
} 
