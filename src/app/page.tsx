"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="lg:text-7xl text-4xl max-w-[500px] tracking-tight mx-auto font-black text-center mb-[30px]">
          The super fast color palettes generator!
        </h1>
        <p className="text-lg max-w-[400px] mb-[35px] mx-auto font-medium text-[#464853] text-center  ">
          Create the prefect palette or get inspired by thousnands of beautiful
          color schemes.
        </p>

        <div>
          {isLoaded && isSignedIn ? (
            <div>
              <Button
                className="bg-[#0066ff] w-full text-white
          font-semibold h-[46px] px-[21px] my-3  rounded-lg"
              >
                <Link href={"/generate"}>Start the generator!</Link>
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className="bg-[#0066ff] w-full text-white
          font-semibold h-[46px] px-[21px] my-3  rounded-lg"
              >
                <Link href={"/sign-in"}>Sign in to use the generator!</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
