import Link from "next/link";
import NavbarButton from "./NavbarButton";
import LogOutButton from "./LogOutButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
//import { usePathname } from "next/navigation"
//import {signOut} from 'next-auth/react'

export default async function Navbar() {
  //const pathname = usePathname()
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-black bg-opacity-60">
      <div className="fixed top-0 left-0 h-screen w-40 bg-stone-900 text-white hidden">
        <ul className="">
          <li className="py-4 border-b border-white">
            <Link href="/" className="m-4">
              Home
            </Link>
          </li>

          <li className="py-4 border-b border-white ">
            <Link href="/auth/login" className="m-4">
              Login
            </Link>
          </li>

          <li className="py-4 border-b border-white">
            <Link href="/input" className="m-4">
              Input
            </Link>
          </li>

          <li className="py-4 border-b border-white">
            <Link href="/result" className="m-4">
              Results
            </Link>
          </li>

          <li className="py-4 border-b border-white">
            <Link href="/download" className="m-4">
              Download
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-screen flex items-center justify-between ">
        <div>
          <Link href="/" className="m-4">
            COPY.AI
          </Link>
        </div>
        <ul className="flex items-center justify-between pt-2 ">
          {!session?.user ? (
            <>
              <li className="">
                <Link href="/auth/login">
                  <NavbarButton text="Login" route="/auth/login" />
                </Link>
              </li>
              <li className="">
                <Link href="/auth/register">
                  <NavbarButton text="Sign Up" route="/auth/register" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="">
                <Link href="/download">
                  <NavbarButton text="history" route="/download" />
                </Link>
              </li>
              <li className="">
                <Link href="/input">
                  <NavbarButton text="Input Prompt" route="/input" />
                </Link>
              </li>
              <li>
                <LogOutButton />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
