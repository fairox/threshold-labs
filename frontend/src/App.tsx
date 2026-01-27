import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const Litema = lazy(() => import('./pages/Litema'));
const LitemaRead = lazy(() => import('./pages/LitemaRead')); // Keeping existing one for safety
const LitemaReader = lazy(() => import('./pages/LitemaReader')); // New dynamic reader
const Research = lazy(() => import('./pages/Research'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const Loading = () => (
    <div className="flex items-center justify-center min-h-screen font-mono text-xs uppercase tracking-widest">
        Loading Lab...
    </div>
);

function App() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/litema" element={<Litema />} />
                        <Route path="/research" element={<Research />} />

                        {/* New Editorial Routes */}
                        <Route path="/litema/read/:chapterId" element={<LitemaReader />} />
                    </Route>

                    {/* Legacy/Flipbook Route */}
                    <Route path="/litema/read" element={<LitemaRead />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
