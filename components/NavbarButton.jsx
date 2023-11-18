'use client'
import { usePathname } from "next/navigation"

export default function NavbarButton({text, route}){
    const pathname = usePathname()

    return(
        <button className={`link ${
            pathname === route ? "bg-primary" : " "} hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}>{text}
        </button>
    )
}