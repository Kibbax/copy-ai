import Navbar from "../components/Navbar"
import './globals.css'
import Background from "@/components/Background"
import { Toaster } from "sonner"
import { Providers } from "./Providers"
import { ResultProvider } from "../context/resultContext"  
 
export const metadata = {
  title: 'Copy AI',
  description: 'Generated by create next app',
  Image: '/assets/logo-copy.webp',
}
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-primary font-textFont text-fontWhite" >
          <Providers>
           <ResultProvider>
          <Navbar />
          <Background />
          {children}
          <Toaster richColors />
          </ResultProvider> 
          </Providers>
        </body>
      </html>
    )
  }


