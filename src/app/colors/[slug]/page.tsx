'use client'
import Palette from '@/components/Palette';
import { Reorder } from 'framer-motion';
import React, { useState } from 'react'

type Props = {}

const page = ({params} : {params : {slug:string}} ) => {

    const generatedColors = params.slug;
    const colors:undefined | string[] | any = generatedColors && generatedColors.split("-");

    const [colorPalattes ,setColorPalattes] = useState(colors);



  return (
    <div>

    <Reorder.Group
    values={colorPalattes}
    onReorder={setColorPalattes}
    axis='x'
    className="flex lg:flex-row flex-col w-full  h-screen">
        
        {colorPalattes.map((color:string ,index:number) => {
          return(
            <Palette key={index     } color={color} colors ={colors} colorIndex = {index}/>
          )
        })}
    </Reorder.Group>
        </div>
  )
}

export default page