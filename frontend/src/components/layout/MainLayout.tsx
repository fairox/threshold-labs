import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function MainLayout() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
            <Header />
            <Outlet />
        </main>
    );
}
