import Navbar from "../components/Navbar"
import './globals.css'
 
export const metadata = {
  title: 'Copy AI',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-primary">
          <Navbar />

          {children}
        </body>
      </html>
    )
  }