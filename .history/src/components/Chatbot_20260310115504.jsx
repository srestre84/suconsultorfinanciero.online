import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy tu asistente financiero. Puedo ayudarte a convertir tasas de Efectiva Anual (EA) a Nominal Mes Vencido (NMV). Solo dime la tasa, por ejemplo: '15' o '20%'.", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (!input.trim()) return;

        // Agregar mensaje del usuario
        const newMessages = [...messages, { text: input, sender: 'user' }];
        setMessages(newMessages);
        setInput('');

        // Analizar el input para buscar números
        setTimeout(() => {
            const match = input.match(/(\d+(\.\d+)?)/);

            if (match) {
                const ea = parseFloat(match[0]);
                // Fórmula de conversión: MV = ((1 + EA)^(1/12)) - 1
                // EA debe estar en decimal (ej. 15% -> 0.15)
                const eaDecimal = ea / 100;
                const mvDecimal = Math.pow(1 + eaDecimal, 1 / 12) - 1;
                const mvPorcentaje = (mvDecimal * 100).toFixed(4);

                setMessages(prev => [...prev, {
                    text: `Para una tasa del ${ea}% Efectiva Anual (EA), la tasa equivalente es  ${mvPorcentaje}% Nominal Mes Vencido (NMV).`,
                    sender: 'bot'
                }]);
            } else {
                setMessages(prev => [...prev, {
                    text: "No detecté un número en tu mensaje. Por favor, ingresa una tasa como '15', '20.5', etc.",
                    sender: 'bot'
                }]);
            }
        }, 600); // Pequeña demora para simular que está "escribiendo"
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="chatbot-container">
            {/* Botón Flotante */}
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleChat}
                aria-label="Abrir asistente financiero"
            >
                {isOpen ? '✕' : '🤖'}
            </button>

            {/* Ventana de Chat */}
            <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
                <div className="chatbot-header">
                    <span className="chatbot-title">🏠 Asistente Financiero</span>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message-wrapper ${msg.sender}`}>
                            <div className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-input-area">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Escribe una tasa EA (ej. 15%)..."
                    />
                    <button onClick={handleSend} className="send-btn">
                        ➤
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
