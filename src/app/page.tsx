"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="flex  lg:flex-row  flex-col-reverse  items-center justify-around   lg:p-24">
      <div
        className="w-[calc(100% - 1100px + 180px)]"
       
      >
        <h1
          
          className="lg:text-7xl text-4xl max-w-[500px] tracking-tight mx-auto font-black text-center mb-[30px]"
        >
          The super fast color palettes generator!
        </h1>

        <p
          
          className="text-lg max-w-[400px] mb-[35px] mx-auto font-medium text-[#464853] text-center  "
        >
          Create the prefect palette or get inspired by thousnands of beautiful
          color schemes.
        </p>

        <div className="w-[260px] mx-auto">
          {isSignedIn && isLoaded ? (
            <button
              
              className="bg-[#0066ff] w-full text-white
          font-semibold
          
          h-[46px] px-[21px] my-3  rounded-lg"
            >
              <Link href={"/generate"}>Start the generator!</Link>
            </button>
          ) : (
            <button
             
              className="bg-[#0066ff] w-full text-white
          font-semibold h-[46px] px-[21px] my-3  rounded-lg"
            >
              <Link href={"/sign-in"}>Signin to use generator!</Link>
            </button>
          )}

          <button
            
            className="text-black w-full  border border-[#d8d8da]         font-semibold
        h-[46px] px-[21px] my-3  rounded-lg"
          >
            Explore trending palettes
          </button>
        </div>
      </div>

      <div
       
        className="w-2/3 xl:p-32 p-2 lg:mb-0 mb-10 xl:mt-0 lg:mt-32 mt-5  "
      >
        <svg
          version="1.1"
          id="homepage_hero_image-mobile"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 498.94 301.86"
          xmlSpace="preserve"
        >
          <path d="M450.79,288.72V20.22c0.1-7.6-6.1-13.9-13.8-14c0,0,0,0-0.1,0H59.59c-7.7,0.1-13.9,6.3-13.9,13.9c0,0,0,0,0,0.1v268.5 H450.79z"></path>
          <g id="homepage_hero-generator-laptop-mobile">
            <path
              className="first"
              d="M324.79,16.12h112c2.2,0,4,1.8,4,4v255h-116V16.12z"
            ></path>
            <rect
              x="249.79"
              y="16.12"
              fill="yellow"
              className=" second"
              width="115"
              height="259"
            ></rect>
            <rect
              x="171.79"
              y="16.12"
              fill="pink"
              className=" third"
              width="115"
              height="259"
            ></rect>
            <rect
              x="94.79"
              y="16.12"
              className=" fourth"
              width="116"
              height="259"
            ></rect>
            <path
              fill="purple"
              className=" fifth"
              d="M59.79,16.12h74v259h-78v-255C55.79,17.92,57.59,16.12,59.79,16.12z"
            ></path>
          </g>
          <path
          fill="#c9c8cc"
         
            d="M9.79,285.22h480l0,0c0,5.5-4.5,10-10,10h-460C14.29,295.22,9.79,290.72,9.79,285.22L9.79,285.22z"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default page;
