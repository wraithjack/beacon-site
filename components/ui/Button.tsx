import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const variants = {
            primary: "bg-emerald-600 text-white hover:bg-emerald-700",
            outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
            ghost: "text-slate-900 hover:bg-slate-100",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    className
                )}
                tabIndex={0}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, cn };
