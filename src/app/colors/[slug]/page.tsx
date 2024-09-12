"use client";
import Palette from "@/components/Palette";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Reorder } from "framer-motion";
import React, { useState } from "react";

type Props = {};

const page = ({ params }: { params: { slug: string } }) => {
  const [lockedHexes, setLockedHexes] = useState<string[]>([]);

  const generatedColors = params.slug;
  const colors: undefined | string[] | any =
    generatedColors && generatedColors.split("-");

  const [colorPalattes, setColorPalattes] = useState(colors);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const dynamicAxis = isDesktop ? "x" : "y";

  return (
    <div>
      <Reorder.Group
        values={colorPalattes}
        onReorder={setColorPalattes}
        axis="x"
        className="flex lg:flex-row flex-col w-full  h-screen"
      >
        {colorPalattes.map((color: string, index: number) => {
          return (
            <Palette
              key={index}
              color={color}
              colors={colors}
              colorIndex={index}
              lockedHexes={lockedHexes}
              setLockedHexes={setLockedHexes}
            />
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default page;
