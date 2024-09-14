import { Separator } from "@/components/ui/separator";
import React from "react";

const SideBar = ({ object }) => {
  console.log(object);

  // bg #673AB7 #4CAF50
  return (
    <div className="w-96 h-full overflow-y-auto p-3 bg-[#1C1C1C]">
      <h2 className="uppercase text-center bg-[#4CAF50] p-1 rounded-md text-[#DADADA] tracking-wider">{object?.type || "-"}</h2>
      <Separator className="my-3 bg-[#E0E0E0]" />
    </div>
  );
};

export default SideBar;
