"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";



export default function ButtonSignUpGoogle() {
  const [loading, setLoading] = useState(false);

  const buttonStyles = {
    width: '200px',
    height: '44px',
    top: '556px',
    left: '88px',
    borderRadius: '10px',
    borderBottom: '1px solid #5A189A', // Borde inferior
    borderRight: '1px solid #5A189A', // Borde derecho
  };

  return (
    <button type="button"
      onClick={() => {signIn("google", { callbackUrl: "/input" }); setLoading(true)}}
      className="w-1/2 h-10 flex-shrink-1 rounded-md bg-opacity-33 bg-slate-300 hover:bg-hoverColor hover:text-hoverTextColor text-black font-bold m-3"
      style={buttonStyles}>
        
      {loading ? "Loading...": <div className=""><FcGoogle className="inline mr-2 text-2xl" />Login with Google  </div> }
      
      
    </button>
  );
} 
