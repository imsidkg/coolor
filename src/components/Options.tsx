import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { CancelIcon, CopyIcon, DragIcon, LockIcon, OpenIcon } from './Icons'

type Props = {
  currentColor : string
}

const Options = ({currentColor}: Props) => {
  return (
    <div className="flex flex-row lg:flex-col lg:space-y-4 space-y-0 space-x-4 lg:space-x-0  
    items-center   ">
    
       <div >
         <TooltipProvider>
           <Tooltip>
             <TooltipTrigger>
               {" "}
               <CancelIcon currentColor={currentColor} />
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