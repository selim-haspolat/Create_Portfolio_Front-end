import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ComponentHero from "./component-hero";

import { v4 } from "uuid";

const AddComponentsList = ({ objects, selectedObject, setObjects }) => {
  const { theme } = useTheme();

  const addComponent = (component) => {
    const addChildToObject = (items) => {
      return items.map(item => {
        if (item.id === selectedObject) {
          // Mevcut öğe eşleşiyorsa, yeni child ekle
          return {
            ...item,
            child: [
              ...item.child,
              {
                id: v4(),
                ...component,
              }
            ]
          };
        }
        // Eğer öğe eşleşmiyorsa, child dizisini kontrol et
        if (item.child && item.child.length > 0) {
          return {
            ...item,
            child: addChildToObject(item.child) // Rekürsif çağrı
          };
        }
        return item;
      });
    };
  
    // Yeni state oluşturulacak
    setObjects(addChildToObject(objects));
  };

  return (
    <div className="flex gap-2">
      <div className="w-full flex flex-col gap-2">
        <MagicCard
          className="items-center justify-center shadow-sm whitespace-nowrap rounded-md py-2"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="scale-[0.2]">
            <ComponentHero preview={true} />
          </div>
        </MagicCard>
        <div className="flex items-center justify-between">
          <h2>Hero</h2>
          <Button size="sm" onClick={() => addComponent(<ComponentHero />)}>+ Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddComponentsList;
