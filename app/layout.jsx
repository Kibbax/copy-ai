import Navbar from "../components/Navbar"
import './globals.css'
import Background from "@/components/Background"
import { Toaster } from "sonner"
import { Providers } from "./Providers"
import { ResultProvider } from "../context/resultContext"  
 
export const metadata = {
  icon: "/favicon.ico",
  title: "Copy Craft Pro",
  description:
    "CopyCraft Pro aims to simplify and expedite the content creation process for marketing teams, utilizing advanced technologies such as artificial intelligence.",
};
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


