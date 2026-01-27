// React removed because it's unused in this file (JSX transform handles it)
import { useParams } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import ChapterHeader from '../components/litema/ChapterHeader';
import manuscriptData from '../data/manuscript.json';
import { ThemeVisuals, FallbackVisual } from '../components/litema/themes/ThemeRegistry';

export default function LitemaReader() {
    const { chapterId } = useParams();
    const chapter = manuscriptData.find(c => c.id === chapterId);

    if (!chapter) {
        return (
            <MainLayout>
                <div className="p-12">Chapter not found.</div>
            </MainLayout>
        );
    }

    // Theme Logic
    const isDark = chapter.theme === 'bedrock' || chapter.theme === 'future';
    const bgColor = isDark ? 'bg-neutral-900' : 'bg-neutral-50';
    const textColor = isDark ? 'text-neutral-300' : 'text-neutral-800';

    // Visual selection
    const VisualComponent = ThemeVisuals[chapter.theme] || FallbackVisual;

    return (
        <MainLayout>
            <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500`}>
                <div className="max-w-7xl mx-auto p-4 md:p-12">

                    <ChapterHeader
                        number={chapter.id}
                        title={chapter.title}
                        theme={isDark ? 'dark' : 'light'}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Content Column */}
                        <div className="lg:col-span-8 prose prose-lg prose-neutral dark:prose-invert">
                            {chapter.content.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-6 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* VISUALS / ENGINE Column */}
                        <div className="lg:col-span-4 hidden lg:block sticky top-12 h-fit">
                            <div className="border border-current p-4 transition-all duration-500">
                                <span className="font-mono text-xs uppercase block mb-4 border-b border-current pb-2">Litema Logic: {chapter.theme}</span>

                                <VisualComponent />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
