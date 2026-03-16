import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Properties from './pages/Properties';

// Componente para manejar el scroll a anclas (ID) con HashRouter
function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return null;
}

function App() {
    return (
        <HelmetProvider>
            <HashRouter 
                future={{ 
                    v7_startTransition: true, 
                    v7_relativeSplatPath: true 
                }}
            >
                <ScrollToHash />
                <div className="app-container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/terminos" element={<Terms />} />
                        <Route path="/privacidad" element={<Privacy />} />
                        <Route path="/inmuebles" element={<Properties />} />
                    </Routes>
                    <Footer />
                    <Chatbot />
                </div>
            </HashRouter>
        </HelmetProvider>
    );
}

export default App;
