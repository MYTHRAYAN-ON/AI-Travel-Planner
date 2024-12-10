import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Elegant button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white hover:from-purple-700 hover:to-teal-500", // Elegant gradient
        outline:
          "border border-gray-300 text-gray-800 bg-transparent hover:bg-gray-100 hover:text-gray-900", // Light border outline with soft hover
        secondary:
          "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:text-gray-900", // Light color secondary button
        ghost:
          "hover:bg-gray-100 hover:text-gray-800 text-gray-600 bg-transparent", // Transparent ghost button with hover effect
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3", // Larger, refined button size
        sm: "h-10 rounded-md px-4", // Smaller button for subtle interactions
        lg: "h-14 px-10", // Large, spacious button for impactful calls to action
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
