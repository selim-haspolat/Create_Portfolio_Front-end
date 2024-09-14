"use client";

// HOOKS
import { useState } from "react";

// Custom Components
import NavBar from "@/components/createPortfolio.js/navBar";
import Screen from "@/components/createPortfolio.js/screen";
import SideBar from "@/components/createPortfolio.js/sideBar";

import { v4 } from "uuid";

const CreatePortfolio = () => {
  const pageId = v4();

  const [selectedObject, setSelectedObject] = useState(pageId);
  const [objects, setObjects] = useState([
    {
      id: pageId,
      type: "page",
      child: [
        {
          id: v4(),
          type: "text",
          text: "Hello World",
        },
      ],
    },
  ]);

  const changeSelectedObject = (e, id) => {
    e.stopPropagation();
    setSelectedObject(id);
  };

  const findObject = (objects) => {
    const object = objects.find((object) => object.id === selectedObject);
  
    if (object) {
      return object; 
    } else {
      for (const object of objects) {
        if (object.child && object.child.length > 0) {
          const found = findObject(object.child);
          if (found) return found;
        }
      }
    }
  
    return null; // Eğer hiçbir şey bulunamazsa null döndür
  };
  

  return (
    <>
      <NavBar />
      <div className="flex h-[calc(100vh-40px)]">
        <Screen
          selectedObject={selectedObject}
          changeSelectedObject={changeSelectedObject}
          objects={objects}
        />
        <SideBar object={findObject(objects)} />
      </div>
    </>
  );
};

export default CreatePortfolio;
