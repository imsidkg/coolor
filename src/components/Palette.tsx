"use client";
import React, { useState } from "react";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
extend([namesPlugin]);
type Props = {
  color: string;
};

const Palette = ({ color }: Props) => {
  const [colorInstance, setColorInstance] = useState(`#${color}`);
  const handleColorName = (colorHex: string) => {
    return colord("#fe0000").toName({ closest: true });
  };

  const colorName = handleColorName(colorInstance);

  return (
    <div
      style={{
        backgroundColor: `${colorInstance}`,
      }}
      className="w-full lg:h-screen h-full   flex flex-row-reverse justify-center items-center px-[5px] relativeF"
    >
      <div className="lg:absolute left-0 flex lg:items-center flex-col w-full mb-1">
        <h3
          className={`text-xl lg:text-[30px] uppercase font-semibold cursor-pointer text-left`}
        >
          {colorInstance.replace(/^#/, "")}
        </h3>
        <p className={`text-[11px] opacity-[0.5] capitalize inset-0 mt-[9px]`}>
          ~{colorName}
        </p>
      </div>
      
    </div>
  );
};

export default Palette;
