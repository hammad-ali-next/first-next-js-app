"use client";

// import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forget Password", href: "/forget-password" },

]



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (

    <>
      <div>
        <input className="bg-amber-100 text-black" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div>
        {navlinks.map((link) => {
          const isActive = pathname == link.href || (pathname.startsWith(link.href) && link.href != "/")
          return (
            <>
              <Link
                className={isActive ? "font-bold bg-red-400" : "text-blue-500 bg-gray-100"}
                href={link.href}
                style={{ padding: "2px" }}
              >
                {link.name}</Link>
              <br />
            </>
          )
        })}
      </div >

      {children}

    </>

  );
}
