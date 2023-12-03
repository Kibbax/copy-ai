"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import NavbarButton from './LogOutButton';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

function NavBar() {
  const { data: session } = useSession();

  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  return (
    <div>
      <nav className="w-full bg-black bg-opacity-60">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link
                href="/"
                className="m-4 font-titleFont text-2xl"
                aria-label="Navigate to Home"
              >
                COPY craft pro
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-fontPurple rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoClose width={30} height={30} alt="logo" />
                  ) : (
                    <RxHamburgerMenu
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none color-fontPurple"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {!session?.user ? (
                  <>
                    <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link
                        href="/auth/login"
                        onClick={() => setNavbar(!navbar)}
                        aria-label="Navigate to Login Page"
                      >
                        <button
                          className={`link ${
                            pathname === "/auth/login" ? "bg-primary" : " "
                          } hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                    <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link
                        href="/auth/register"
                        onClick={() => setNavbar(!navbar)}
                        aria-label="Navigate to Sign Up Page"
                      >
                        <button
                          className={`link ${
                            pathname === "/auth/register" ? "bg-primary" : " "
                          } hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}
                        >
                          Register
                        </button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link
                        href="/history"
                        onClick={() => setNavbar(!navbar)}
                        aria-label="Navigate to Download Page"
                      >
                        <button
                          className={`link ${
                            pathname === "/history" ? "bg-primary" : " "
                          } hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}
                        >
                          History
                        </button>
                      </Link>
                    </li>
                    <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link
                        href="/input"
                        onClick={() => setNavbar(!navbar)}
                        aria-label="Navigate to Input Page"
                      >
                        <button
                          className={`link ${
                            pathname === "/input" ? "bg-primary" : " "
                          } hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}
                        >
                          Input
                        </button>
                      </Link>
                    </li>
                    <li
                      aria-label="Log Out"
                      className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent"
                    >
                      <button onClick={() => signOut()}>SignOut</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
