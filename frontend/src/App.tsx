import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const Litema = lazy(() => import('./pages/Litema'));
const LitemaRead = lazy(() => import('./pages/LitemaRead'));
const Research = lazy(() => import('./pages/Research'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const Loading = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
);

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/litema" element={<Litema />} />
                    <Route path="/research" element={<Research />} />
                </Route>
                <Route path="/litema/read" element={<LitemaRead />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default App;
