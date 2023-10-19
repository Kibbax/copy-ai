import Link from "next/link"


export default function Navbar (){
    return (
        <nav className="">
          
          <div className="fixed top-0 left-0 h-screen w-40 bg-stone-900 text-white hidden"> 
          ✌️
          <ul className="">
            <li className="py-4 border-b border-white">
            <Link href="/" className="m-4">Home</Link>
            </li>

            <li className="py-4 border-b border-white ">
              <Link href="/auth" className="m-4">Login</Link>
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

        <div className="flex items-center justify-between  bg-stone-900">
        <div >
            <Link href="/" className="m-4">COPY.AI</Link>
        </div>
        <ul className="flex items-center justify-between  bg-stone-900">
           

            <li className="">
              <Link href="/auth" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg inline-block mr-4">LOGIN</Link>
            </li>

            <li className="py-4">
            <Link href="/input" className="m-4">Sign Up</Link>
            </li>

            
          </ul>
        </div>

        </nav>
    )
}