import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
         <Navbar/>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
