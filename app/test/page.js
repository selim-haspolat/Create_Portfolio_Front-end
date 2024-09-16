"use client";

import ComponentHero from "@/components/add-component/component-hero";
import { Resizable } from "re-resizable";

const Test = () => {
  return (
    <div>
      <Resizable
        enable={{
          top: true, // Yalnızca dikey yönde boyutlandırma
          right: false,
          bottom: true, // Yalnızca dikey yönde boyutlandırma
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        minHeight={"300px"}
        maxHeight={"99.58vh"}
        defaultSize={{
          width: "100%",
        }}
        style={{
          border: "1px solid #ccc",
          display: "flex",
          justifyContent: "center", // Yatay eksende ortalama
          alignItems: "center", // Dikey eksende ortalama
        }}
      >
        <ComponentHero />
      </Resizable>
    </div>
  );
};

export default Test;
