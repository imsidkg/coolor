'use client'
import React, { useEffect } from 'react'
import randomColor from "randomcolor"; 
import {Loader2} from 'lucide-react'
import { useRouter } from 'next/navigation';

type Props = {}

const page = (props: Props) => {
  const router = useRouter()

  const randomColorx = randomColor({
    hue: "random",
    luminosity: "random",
    count: 5,
  });


  const routeParam = randomColorx
  ?.map((color: string) => {
    return color.slice(1); // Explicit return of sliced color
  })
  .join("-");

  

  // useEffect(() => {
  //   router.replace(`/colors/${routeParam}`);
  // }) 

  return (
    <div className="h-screen bg-white w-screen flex justify-center items-center">
      <Loader2 className=' h-14 w-14 animate-spin'/>
    </div>
  )
}

export default page