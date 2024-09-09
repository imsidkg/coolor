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
extend([namesPlugin]);

type Props = {
  color: string;
};

const Palette = ({ color }: Props) => {
  const [colorInstance, setColorInstance] = useState(`#${color}`);
  
  // Function to handle getting the color name
  const handleColorName = (colorHex: string) => {
    return colord(colorHex).toName({ closest: true });
  };

  const colorName = handleColorName(colorInstance);
  const colorTextLumi = handleColorTextClass(colorInstance);

  return (
    <div
      style={{
        backgroundColor: colorInstance, 
      }}
      className="w-full lg:h-screen h-full flex flex-col justify-center items-center px-[5px] relative" 
    >
      
      <div
        className={`lg:absolute bottom-16 left-0 flex flex-col items-center w-full ${colorTextLumi === "white" ? "text-white" : "text-black"}`}
        style={{ padding: "20px 0" }} 
      >
        {/* Color hex value */}
        <h3 className="text-xl lg:text-[30px] uppercase font-semibold cursor-pointer text-center">
          {colorInstance.replace(/^#/, "")}
        </h3>
        <Options currentColor={color} />

        <p className="text-[11px] opacity-[0.5] capitalize mt-[9px]">
          ~ {colorName}
        </p>
      </div>
    </div>
  );
};

export default Palette;
