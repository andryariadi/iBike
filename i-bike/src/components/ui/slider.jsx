"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-accent">
      <SliderPrimitive.Range className="absolute h-full bg-accent dark:bg-slate-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-[18px] w-[18px] rounded-full border-white  bg-primary ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-accent dark:ring-offset-accent dark:focus-visible:ring-slate-300" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
