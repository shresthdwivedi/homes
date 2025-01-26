import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar"
import "./globals.css";

export const metadata: Metadata = {
  title: "Homes",
  description: "By Shresth Dwivedi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
