import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { CancelIcon, CopyIcon, DragIcon, LockIcon, OpenIcon } from "./Icons";
import { Reorder } from "framer-motion";
import { useParams } from "next/navigation";
import { handleColorTextClass } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCopy } from "@/hooks/use-copy";
import { Toast } from "./ui/toast";
import { useToast } from "@/hooks/use-toast";

type Props = {
  color: string;
  setDraggable: (value: boolean) => void;
  lockedHexes : string[]
  toggleHex : (value : string) => void
};

const Options = ({ color , setDraggable, lockedHexes, toggleHex }: Props) => {
  const { slug } = useParams<{ slug: string }>();

  const { toast } = useToast();
  const { copy, copiedText } = useCopy();
  const router = useRouter();
  const currentColor =
    handleColorTextClass(color) === "white" ? "white" : "black";

  const handleRemoveColor = (colorToRemove: string) => {
    const colors = slug.split("-");
    const updatedColors = colors.filter(
      (c) => c !== colorToRemove.replace(/^#/, "")
    );
    console.log(updatedColors);
    const newRoute = updatedColors.join("-");

    router.replace(newRoute);
  };

  const handleHexCopy = async (color: string) => {
    await copy(color);

    toast({
      title: "Color copied to the clipboard!",
      description: color,
    });
  };

  
  return (
    <div
      className="flex flex-row lg:flex-col lg:space-y-4 space-y-0 space-x-4 lg:space-x-0  
    items-center"
    >
      {slug.split("-").length > 2 && (
        <div onClick={() => handleRemoveColor(color)}>
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
      )}

      <div className="" onClick={() => handleHexCopy(color)}>
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
        onMouseEnter={() => setDraggable(true)}
        onMouseLeave={() => setDraggable(false)} // retain this for better animation
        onTouchStart={() => setDraggable(true)}
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

      <div onClick={() => toggleHex(color)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
             {lockedHexes?.includes(color) ? (
               <LockIcon currentColor={currentColor} />
             ) : (
               <OpenIcon currentColor={currentColor} />
             )}
           </TooltipTrigger>

            <TooltipContent>Togle lock</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Options;
