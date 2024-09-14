import { DotPatternBackground } from "@/components/background/dotpatter";
import { CustomDuck } from "@/components/CustomDuck";

export default function Home() {
  return (
    <div>
      <DotPatternBackground x={500} />
      <CustomDuck />
    </div>
  );
}
