import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return <input type={type} className={cn("flex h-[50px] w-full border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent px-6", className)} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
