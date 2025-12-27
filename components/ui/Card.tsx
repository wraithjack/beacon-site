import * as React from "react";
import { cn } from "./Button";

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={cn("rounded-lg border border-slate-200 bg-white p-6 shadow-sm", className)}>
        {children}
    </div>
);

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <h3 className={cn("text-xl font-bold text-slate-900", className)}>{children}</h3>
);

const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <p className={cn("mt-2 text-slate-600", className)}>{children}</p>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={cn("mt-4", className)}>{children}</div>
);

export { Card, CardTitle, CardDescription, CardContent };
