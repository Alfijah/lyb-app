import type React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; //function is nog leeg
// import "./globals.css"; //moet dit nog toegevoegd worden???

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}

export default RootLayout;
