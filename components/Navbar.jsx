"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navbar (){
  const pathname = usePathname()

    return (
        <nav className="bg-black bg-opacity-20">
          
          <div className="fixed top-0 left-0 h-screen w-40 bg-stone-900 text-white hidden">
          ✌️
          <ul className="">
            <li className="py-4 border-b border-white">
            <Link href="/" className="m-4">Home</Link>
            </li>

            <li className="py-4 border-b border-white ">
              <Link href="/auth/login" className="m-4">Login</Link>
            </li>

            <li className="py-4 border-b border-white">
            <Link href="/input" className="m-4">Input</Link>
            </li>

            <li className="py-4 border-b border-white">
              <Link href="/result" className="m-4">Results</Link>
            </li>

            <li className="py-4 border-b border-white">
              <Link href="/download" className="m-4">Download</Link>
            </li>
          </ul>
        </div>

        <div className="w-screen flex items-center justify-between ">
        <div >
            <Link href="/" className="m-4">COPY.AI</Link>
        </div>
        <ul className="flex items-center justify-between pt-2 ">
           

            <li className="">
              <Link href="/auth" className={`link ${
                pathname === "/auth" ? "bg-primary" : " "} hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}>LOGIN</Link>
            </li>

            <li className="">
            <Link href="/signUp" className={`link ${
                pathname === "/signUp" ? "bg-primary" : " "} hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block`}>Sign Up</Link>
            </li>

        
          </ul>
        </div>

        </nav>
    )
}