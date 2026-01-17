import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SwissGridProps {
    children: ReactNode;
    className?: string;
}

export function SwissGrid({ children, className }: SwissGridProps) {
    return (
        <div className={cn(
            "grid grid-cols-4 md:grid-cols-12 gap-x-[16px] md:gap-x-[20px] px-6 md:px-12 max-w-[1600px] mx-auto",
            className
        )}>
            {children}
        </div>
    );
}

// Utility to wrap items in column spans
export function SwissColumn({
    children,
    span = "col-span-full",
    className
}: {
    children: ReactNode,
    span?: string,
    className?: string
}) {
    return (
        <div className={cn(span, className)}>
            {children}
        </div>
    )
}
