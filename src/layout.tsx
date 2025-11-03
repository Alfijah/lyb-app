import type React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; //function is nog leeg
import HomePage from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow">
        {children}
        <HomePage />
      </main>
      {/* <Footer/> */}
    </div>
  );
}
