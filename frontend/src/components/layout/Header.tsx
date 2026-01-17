import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-50 text-foreground mix-blend-difference invert dark:invert-0">
            <Link to="/" className="group">
                <div className="text-sm font-medium leading-tight tracking-tight uppercase">
                    <div>Threshold</div>
                    <div>Applied</div>
                    <div>Research</div>
                    <div>Division.</div>
                </div>
            </Link>

            <nav className="flex gap-6 uppercase text-xs font-semibold tracking-widest">
                <Link to="/research" className="hover:opacity-70 transition-opacity">
                    Research
                </Link>
                <Link to="/manifesto" className="text-red-600 hover:text-red-500 transition-colors">
                    Manifesto
                </Link>
                <Link to="/litema" className="hover:opacity-70 transition-opacity">
                    Litema
                </Link>
                <Link
                    to="#about"
                    className="hover:opacity-70 transition-opacity"
                >
                    About
                </Link>
            </nav>
        </header>

        /* Note: "mix-blend-difference" helps visibility on light/dark, 
           but standard colored text is safer. 
           The reference has black text on white. */
    );
}
