// React removed because it's unused in this file (JSX transform handles it)

interface ChapterHeaderProps {
    number: string;
    title: string;
    theme?: 'dark' | 'light';
}

export default function ChapterHeader({ number, title, theme = 'light' }: ChapterHeaderProps) {
    const textColor = theme === 'dark' ? 'text-neutral-50' : 'text-neutral-900';
    const subColor = theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500';

    return (
        <header className="mb-12 border-b border-current pb-6">
            <div className={`font-mono text-xs uppercase tracking-widest mb-2 ${subColor}`}>
                Chapter {number}
            </div>
            <h1 className={`text-6xl md:text-8xl font-bold tracking-tighter uppercase ${textColor}`}>
                {title}
            </h1>
        </header>
    );
}
