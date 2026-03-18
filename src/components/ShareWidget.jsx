import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ShareWidget.css';

const ShareWidget = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [canNativeShare, setCanNativeShare] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : "https://suconsultorfinanciero.online/";
    const shareTitle = typeof document !== 'undefined' ? document.title : "Su Consultor Financiero | Estrategia y Control";
    
    // Lógica para detectar si estamos en una página de servicio y usar su mensaje personalizado
    const getDynamicShareText = () => {
        const path = location.pathname;
        if (path.includes('/servicios/')) {
            const serviceId = path.split('/').pop();
            const service = servicesData.find(s => s.id === serviceId);
            if (service) return service.shareMessage;
        }
        return "🥇 **Su Consultor Financiero | Asesoría Integral**\n\nTe invito a descubrir soluciones profesionales en:\n✅ Crédito Hipotecario\n✅ Libre Inversión\n✅ Compra de Cartera\n✅ Construcción en Sitio Propio\n\nOptimiza tu flujo de caja y toma el control de tus finanzas. Mira más aquí:";
    };

    const shareText = getDynamicShareText();

    useEffect(() => {
        if (navigator.share) {
            setCanNativeShare(true);
        }
    }, []);

    const toggleMenu = () => {
        if (canNativeShare) {
            // Emplear API nativa directamente
            navigator.share({
                title: shareTitle,
                text: shareText,
                url: shareUrl,
            }).catch((error) => console.log('Error compartiendo', error));
        } else {
            setIsOpen(!isOpen);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        alert('¡Enlace copiado al portapapeles!');
        setIsOpen(false);
    };

    const handleWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    const handleFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    return (
        <div className={`share-widget-container ${isOpen ? 'active' : ''}`}>
            {(!canNativeShare && isOpen) && (
                <div className="share-widget-menu">
                    <button onClick={handleWhatsApp} className="share-item wa" title="WhatsApp">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z"/></svg>
                    </button>
                    <button onClick={handleFacebook} className="share-item fb" title="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </button>
                    <button onClick={handleCopy} className="share-item copy" title="Copiar Enlace">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    </button>
                </div>
            )}
            
            <button 
                className="share-widget-toggle" 
                onClick={toggleMenu}
                aria-label="Compartir esta página"
                title="Compartir página"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ShareWidget;
