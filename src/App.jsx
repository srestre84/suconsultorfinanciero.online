import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ShareWidget from './components/ShareWidget';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import ServiceDetail from './pages/ServiceDetail';
import DictionaryDetail from './pages/DictionaryDetail';
import CalculatorDetail from './pages/CalculatorDetail';

import { analytics } from './config/firebase';
import { logEvent } from 'firebase/analytics';

// Componente para manejar el scroll a anclas (ID)
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

// Componente para rastreo de analíticas (Google/Firebase)
function AnalyticsTracker() {
    const location = useLocation();

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'page_view', {
                page_path: location.pathname + location.search + location.hash,
                page_location: window.location.href,
                page_title: document.title
            });
        }
    }, [location]);

    return null;
}

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter 
                future={{ 
                    v7_startTransition: true, 
                    v7_relativeSplatPath: true 
                }}
            >
                <ScrollToHash />
                <AnalyticsTracker />
                <div className="app-container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/terminos" element={<Terms />} />
                        <Route path="/privacidad" element={<Privacy />} />
                        <Route path="/inmuebles" element={<Properties />} />
                        <Route path="/inmuebles/:id" element={<PropertyDetail />} />
                        <Route path="/servicios/:id" element={<ServiceDetail />} />
                        <Route path="/diccionario/:id" element={<DictionaryDetail />} />
                        <Route path="/calculadora" element={<CalculatorDetail />} />
                    </Routes>
                    <Footer />
                    <Chatbot />
                    <ShareWidget />
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
