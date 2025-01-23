import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Assignment",
  description: "Creating my first next-js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-slate-500 text-white ">
          <Navbar></Navbar>
        </header>
        <main className="min-h-screen container mx-auto">{children}</main>
        <footer className="bg-slate-500 text-white p-10">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
