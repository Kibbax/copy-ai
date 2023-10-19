import Navbar
 from "../components/Navbar"
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Navbar />

          {children}
        </body>
      </html>
    )
  }