'use client'
import Palette from '@/components/Palette';
import React, { useState } from 'react'

type Props = {}

const page = ({params} : {params : {slug:string}} ) => {

    const generatedColors = params.slug;
    const colors:undefined | string[] | any = generatedColors && generatedColors.split("-");

    const [colorPalattes ,setColorPalattes] = useState(colors);



  return (
    <div>
        <p>
            {generatedColors}
        </p>
        {colorPalattes.map((color:string ,index:number) => {
            return(
                <Palette key={index     } color={color}/>
            )
        })}
    </div>
  )
}

export default page