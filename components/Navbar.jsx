"use client"
import { useState } from "react";
import Link from "next/link";
import NavbarButton from "./NavbarButton";
import LogOutButton from "./LogOutButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

export default async function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const session = await getServerSession(authOptions);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-60">
      {/* ... (código existente) */}
      
      <div className="w-screen flex items-center justify-between" aria-label="Header Navigation">
        <div>
          <Link href="/" className="m-4 font-titleFont text-2xl" aria-label="Navigate to Home">
            COPY craft pro
          </Link>
        </div>
        
        {/* ... (código existente) */}
        
        <div className="md:hidden">
          <button
            className="text-white p-4 focus:outline-none"
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          {/* ... (código existente) */}
        </div>
      )}
    </nav>
  );
}
