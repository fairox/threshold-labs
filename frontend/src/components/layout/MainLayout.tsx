import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import React from 'react';

interface MainLayoutProps {
    children?: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
            <Header />
            {children || <Outlet />}
        </main>
    );
}
