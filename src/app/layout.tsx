import type { Metadata } from "next";
import {  Geist_Mono,Outfit } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn
} from '@clerk/nextjs'
import NavBar from "@/components/NavBar";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Render Children component when singen in by an user */}
          <SignedIn>
            <NavBar/>
            {children}
          </SignedIn>
          {/* --Render log in page when logout or not log in by an user 
          -- Centerd login page using tailwind css class */}
          <SignedOut>
            <div className="flex items-center justify-center h-screen">
              <SignIn />
            </div>
          </SignedOut>

        </body>
      </html>
    </ClerkProvider>

  );
}
