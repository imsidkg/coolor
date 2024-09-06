'use client '
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAuth } from '@clerk/nextjs'
import Image from "next/image";

export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
        hi
       {/* {isSignedIn ? <div>sign in to use the generator</div>}  */}
    </main>
  );
}
