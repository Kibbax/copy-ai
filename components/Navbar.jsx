import Link from "next/link"


export default function Navbar (){
    return (
        <nav>
          <h1>Navbar</h1>
          <ul>
            <li>
            <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/auth">Login</Link>
            </li>

            <li>
            <Link href="/input">Input</Link>
            </li>

            <li>
              <Link href="/result">Results</Link>
            </li>

            <li>
              <Link href="/download">Download</Link>
            </li>
          </ul>
        </nav>
    )
}