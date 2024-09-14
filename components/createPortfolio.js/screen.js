const Screen = ({
  selectedObject,
  changeSelectedObject,
  objects,
  position,
}) => {
  const renderObject = (object) => {
    if (object.type === "page") {
      return (
        <div
          key={object.id}
          onClick={(e) => changeSelectedObject(e, object.id)}
          className={`w-full min-h-full relative bg-black text-white ${
            selectedObject === object.id
              ? "outline-dashed outline-[#4CAF50] outline-[2.5px] outline-offset-[-2px]"
              : ""
          }`}
        >
          {object.child.map((child) => {
            return renderObject(child);
          })}
        </div>
      );
    } else if (object.type === "text") {
      return (
        <div
          key={object.id}
          className={`relative ${
            selectedObject === object.id
              ? "outline-dashed outline-[#4CAF50] outline-[2.5px] outline-offset-[-2px]"
              : ""
          }`}
          onClick={(e) => changeSelectedObject(e, object.id)}
        >
          {object.text}
        </div>
      );
    }
  };

  return objects.map((object) => {
    return renderObject(object);
  });
};

export default Screen;
