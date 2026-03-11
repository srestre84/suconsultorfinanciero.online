import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Futuras rutas de Blog */}
                    {/* <Route path="/blog" element={<Blog />} /> */}
                    {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
                </Routes>
                <Footer />
                <Chatbot />
            </div>
        </BrowserRouter>
    );
}

export default App;
