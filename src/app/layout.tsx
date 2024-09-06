import type { Metadata } from "next";
import {
  ClerkProvider,
  RedirectToSignUp,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'


const inter = Inter({ subsets: ["latin"] });

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
 

  <html>
  <body>
    <ClerkProvider>
      <SignedIn>
        <Header/>
        {children}</SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </ClerkProvider>
  </body>
</html>
  );
}
