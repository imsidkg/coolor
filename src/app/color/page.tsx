'use client'
import React, { useEffect, useRef } from 'react'
import { colord ,random } from "colord";



const page = () => {
    const gray = colord("#ff0000").grayscale().alpha(0.25).toRgbString(); // "rgba(128, 128, 128, 0.25)"
  const isLight = colord("rgb(192, 192, 192)").isLight(); // true
  const darkHex = colord("hsl(0, 50%, 50%)").darken(0.25).toHex(); // "#602020"
    const canvasRef = useRef(null);

const randomColor = () => {
   return (
    random().toHex()
   )
}
//@ts-ignore
const initialDraw = (ctx , color) => {
    const canvas = canvasRef.current;
       
        
        ctx.clearRect(0, 0, 100, 100); // Clear the previous circle
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
}

    useEffect(() => {
        const canvas = canvasRef.current;
        //@ts-ignore
        const ctx = canvas.getContext("2d");

        initialDraw(ctx, randomColor());

        function handleClick () {
            initialDraw(ctx, randomColor());
        }
        //@ts-ignore
        canvas.addEventListener('click', handleClick);
    
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        ctx.fillStyle = randomColor();
        ctx.fill();
      }, [randomColor]);
  return (
    <div>
    <p>Grayscale color with alpha: {gray}</p>
    <p>Is light: {isLight ? "Yes" : "No"}</p>
    <p>Darkened color: {darkHex}</p>
    <canvas ref={canvasRef} width="100" height="100" ></canvas>
  </div>
  )
}

export default page