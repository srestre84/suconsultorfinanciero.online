import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
    return (
        <HelmetProvider>
            <HashRouter>
                <div className="app-container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/terminos" element={<Terms />} />
                        <Route path="/privacidad" element={<Privacy />} />
                    </Routes>
                    <Footer />
                    <Chatbot />
                </div>
            </HashRouter>
        </HelmetProvider>
    );
}

export default App;
