import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ComponentHero = () => {
  return (
    <div className="gap-16 flex justify-between items-center mx-auto lg:max-w-[750px]">
      <div className="flex-col flex flex-1 space-y-3">
        <h1 className="text-3xl lg:text-5xl">Hi, I'm Selim 👋</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <Avatar className="size-36">
        <AvatarImage
          alt={"DATA.name"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRydNybcixjoFjfaMJannx0HTaLD6bqGOZTg&s"
          }
        />
        <AvatarFallback>{"SH"}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ComponentHero;
