import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
                    {
                        "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]": variant === "primary",
                        "bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 hover:border-white/20": variant === "secondary",
                        "bg-transparent border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm": variant === "outline",
                        "hover:bg-white/10 hover:text-white": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-10 px-6 py-2": size === "md",
                        "h-12 px-8 text-lg": size === "lg",
                        "h-16 px-12 text-xl rounded-full": size === "xl",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
