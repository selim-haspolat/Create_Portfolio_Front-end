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
          className={`w-full min-h-full max-h-full relative ${
            selectedObject === object.id
              ? "outline-dashed outline-[2.5px] outline-offset-[-2px]"
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
              ? "outline-dashed outline-[2.5px] outline-offset-[-2px]"
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
    return <div className="w-full min-h-full px-3 py-10">
      {renderObject(object)}

    </div>
  });
};

export default Screen;
