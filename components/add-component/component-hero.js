import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ComponentHero = ({ preview = false }) => {
  return (
    <div className={`gap-16 flex justify-between items-center mx-auto ${preview ? "" :  "lg:max-w-[750px]"}`}>
      <div className="flex-col flex flex-1 space-y-3">
        <h1 className="text-3xl lg:text-5xl">Hi, I'm Selim 👋</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <Avatar className="size-36">
        <AvatarImage alt={"abuzer"} className="rounded-full" src={"https://preview.redd.it/is-this-ai-v0-gl04o77llplb1.jpg?width=640&crop=smart&auto=webp&s=75d8fe14bdfd613ac4d3b988c8a4e6476d269904"} />
        <AvatarFallback>abuzer</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ComponentHero;
