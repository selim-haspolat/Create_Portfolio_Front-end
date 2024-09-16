import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const AddComponentsList = () => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-2">
      <div className="w-full flex flex-col gap-2">
        <MagicCard
          className="items-center justify-center shadow-sm whitespace-nowrap rounded-md py-2"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          {/* <div className="scale-[0.2]">
      
          </div> */}
        </MagicCard>
        <div className="flex items-center justify-between">
          <h2>Hero</h2>
          <Button size="sm">+ Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddComponentsList;
