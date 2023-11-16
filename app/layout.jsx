import Title from "@/components/Title"
import Navbar from "../components/Navbar"
import './globals.css'
import Button from "@/components/Button"
import Background from "@/components/Background"
import { Toaster } from "sonner"
 
export const metadata = {
  title: 'Copy AI',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-primary font-textFont text-fontWhite" >
          <Navbar />
          <Background/>
          {children}
          <Toaster />
        </body>
      </html>
    )
  }