import Navbar from "../components/Navbar"
import './globals.css'
import Background from "@/components/Background"
import { Toaster } from "sonner"
import { Providers } from "./Providers"
 
export const metadata = {
  title: 'Copy Craft Pro',
  description: 'Generated by Mila',
}
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-primary font-textFont text-fontWhite" >
          <Providers>
          <Navbar />
          <Background/>
          {children}
          <Toaster />
          </Providers>
        </body>
      </html>
    )
  }


