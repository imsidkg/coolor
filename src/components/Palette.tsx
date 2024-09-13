// "use client";
// import React, { useState } from "react";
// import { colord, extend } from "colord";
// import namesPlugin from "colord/plugins/names";
// import { handleColorTextClass } from "@/lib/utils";
// extend([namesPlugin]);
// type Props = {
//   color: string;
// };

// const Palette = ({ color }: Props) => {
//   const [colorInstance, setColorInstance] = useState(`#${color}`);
//   const handleColorName = (colorHex: string) => {
//     return colord("#fe0000").toName({ closest: true });
//   };

//   const colorName = handleColorName(colorInstance);
//   const colorTextLumi = handleColorTextClass(colorInstance)

//   return (
//     <div
//       style={{
//         backgroundColor: `${colorInstance}`,
//       }}
//       className="w-full lg:h-screen h-full   flex flex-row-reverse justify-center items-center px-[5px] relativeF"
//     >
//       <div  className={`lg:absolute static bottom-16 left-0  flex
// ${colorTextLumi === "white" ? "text-white" : "text-black "}
// lg:items-center flex-col w-full mb-1`}>
//         <h3
//           className={`text-xl lg:text-[30px] uppercase font-semibold cursor-pointer text-left`}
//         >
//           {colorInstance.replace(/^#/, "")}
//         </h3>
//         <p className={`text-[11px] opacity-[0.5] capitalize inset-0 mt-[9px]`}>
//           ~{colorName}
//         </p>
//       </div>

//     </div>
//   );
// };

// export default Palette;

"use client";
import React, { useState } from "react";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import { handleColorTextClass } from "@/lib/utils";
import Options from "./Options";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import { columnChildVariant, columVariant } from "@/lib/variants";
import { Reorder } from "framer-motion";
import { useRouter } from "next/navigation";
import ReactGPicker from "react-gcolor-picker";
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "./ui/tooltip";

extend([namesPlugin]);

type Props = {
  color: string;
  colors: string[];
  colorIndex: number;
  lockedHexes: string[];
  setLockedHexes: (value: string[]) => void;
};

const Palette = ({
  color,
  colors,
  colorIndex,
  lockedHexes,
  setLockedHexes,
}: Props) => {
  const [colorInstance, setColorInstance] = useState(`#${color}`);
  const [showColorPicker , setShowColorPicker] = useState(false);

  // Function to handle getting the color name
  const handleColorName = (colorHex: string) => {
    return colord(colorHex).toName({ closest: true });
  };

  const colorName = handleColorName(colorInstance);
  const colorTextLumi = handleColorTextClass(colorInstance);

  const isDesktop = useMediaQuery("(min-width:768px)");
  const [draggable, setDraggable] = useState<boolean>(false);

  const handleToggleHex = (hex: string) => {
    if (lockedHexes.includes(hex)) {
      setLockedHexes(
        lockedHexes.filter((h) => {
          h !== hex;
        })
      );
    }
    else {

      setLockedHexes([...lockedHexes, hex]);
    }
  };


  const handlesetColor = (color : string , index : number ) => {
    console.log(color)
    const newColor =  color.replace(/^#/ , '');
    console.log('new color' , newColor)

    if(newColor) {
      const newColors = [...colors];
      console.log(newColors)
      newColors[index] = newColor
      console.log(newColors)

    }
  }

  return (
    <Reorder.Item
    value={color}
    key={color}
    initial={"start"}
    dragListener={draggable}
    onDragEnd={() => setDraggable(false)}
    variants={columVariant}
    whileHover={"show"}
    className="w-full lg:h-screen h-full   flex flex-row-reverse justify-center items-center px-[5px] relative"
    style={{
      backgroundColor: `${colorInstance}`,
    }}
  >
    {isDesktop ? (
      <motion.div variants={columnChildVariant} className="">
        <Options
          toggleHex={handleToggleHex}
          lockedHexes={lockedHexes}
          color={colorInstance}
          setDraggable={setDraggable}
        />
      </motion.div>
    ) : (
      <Options
        toggleHex={handleToggleHex}
        lockedHexes={lockedHexes}
        color={colorInstance}
        setDraggable={setDraggable}
      />
    )}

    {showColorPicker ? (
      <div className=" p-2 absolute rounded-3xl z-50   " >
        <ReactGPicker
          value={colorInstance}
          onChange={(value) => handlesetColor(value, colorIndex)}
          showAlpha={false}
          gradient={false}
          format="hex"
        />
      </div>
    ) : (
      ""
    )}

    <div
      className={`lg:absolute static bottom-16 left-0  flex
${colorTextLumi === "white" ? "text-white" : "text-black "}
lg:items-center flex-col w-full mb-1`}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {" "}
            <h3
              className={` text-xl  lg:text-[30px] uppercase font-semibold cursor-pointer text-left
`}
              onClick={() => setShowColorPicker(true)}
            >
              {colorInstance.replace(/^#/, "")}

              <br />
            </h3>
          </TooltipTrigger>

          <TooltipContent>Select color</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <p
        className={`  text-[11px] opacity-[0.5] capitalize inset-0 mt-[9px] `}
      >
        ~{colorName}
      </p>
    </div>
  </Reorder.Item>
  );
};

export default Palette;
