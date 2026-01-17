import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import Home from './pages/Home';
import Litema from './pages/Litema';
import LitemaRead from './pages/LitemaRead';
import Research from './pages/Research';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/litema" element={<Litema />} />
                <Route path="/research" element={<Research />} />
            </Route>
            <Route path="/litema/read" element={<LitemaRead />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
