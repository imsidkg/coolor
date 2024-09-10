import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { CancelIcon, CopyIcon, DragIcon, LockIcon, OpenIcon } from './Icons'
import { useParams } from "next/navigation";
import { handleColorTextClass } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type Props = {
  color : string
}

const Options = ({color}: Props) => {
  const router = useRouter()
  const currentColor =
    handleColorTextClass(color) === "white" ? "white" : "black";

  const {slug} = useParams<{slug: string}>();


  const handleRemoveColor =(colorToRemove : string) => {
    const colors = slug.split("-");
    const updatedColors = colors.filter((c) => c !== colorToRemove.replace(/^#/, ''));
    console.log(updatedColors);
    const newRoute = updatedColors.join("-");

    router.replace(newRoute);
    
  }
  return (
    <div className="flex flex-row lg:flex-col lg:space-y-4 space-y-0 space-x-4 lg:space-x-0  
    items-center" onClick={() => handleRemoveColor(color)}>
    
       <div >
         <TooltipProvider>
           <Tooltip>
             <TooltipTrigger>
               {" "}
               <CancelIcon currentColor={currentColor}  />
             </TooltipTrigger>

             <TooltipContent>Remove</TooltipContent>
           </Tooltip>
         </TooltipProvider>
       </div>
     

     <div  className="">
       <TooltipProvider>
         <Tooltip>
           <TooltipTrigger>
             {" "}
             <CopyIcon currentColor={currentColor} />
           </TooltipTrigger>

           <TooltipContent>Copy Hex</TooltipContent>
         </Tooltip>
       </TooltipProvider>
     </div>

     <div
   
       className=""
     >
       <TooltipProvider>
         <Tooltip>
           <TooltipTrigger>
             {" "}
             <DragIcon currentColor={currentColor} />
           </TooltipTrigger>

           <TooltipContent>Drag</TooltipContent>
         </Tooltip>
       </TooltipProvider>
     </div>

     <div >
       <TooltipProvider>
         <Tooltip>
           {/* <TooltipTrigger>
             {lockedHexes?.includes(color) ? (
               <LockIcon currentColor={currentColor} />
             ) : (
               <OpenIcon currentColor={currentColor} />
             )}
           </TooltipTrigger> */}

           <TooltipContent>Togle lock</TooltipContent>
         </Tooltip>
       </TooltipProvider>
     </div>
   </div>
  )
}

export default Options