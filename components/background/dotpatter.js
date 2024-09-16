"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export function DotPatternBackground({ xasf }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        className={
          `[mask-image:radial-gradient(circle_at_center,white,transparent)]`
        }
      />
    </div>
  );
}
