import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy tu asistente financiero. Puedo ayudarte a convertir cualquier tipo de tasa (Ej. EA, MV, TV, SV) a todas sus equivalencias. Solo dime tu tasa, por ejemplo: '15% EA' o '2% MV'.", sender: 'bot' }
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

        // Analizar el input para buscar números y tipos
        setTimeout(() => {
            const match = input.match(/(\d+(\.\d+)?)/);
            const textUpper = input.toUpperCase();

            if (match) {
                const rateValue = parseFloat(match[0]);

                // Determinar tipo de tasa
                let rateType = 'EA';
                if (textUpper.includes('MES VENCIDO') || textUpper.includes('MV') || textUpper.includes('NMV')) {
                    rateType = 'MV';
                } else if (textUpper.includes('TRIMESTRE VENCIDO') || textUpper.includes('TV') || textUpper.includes('NTV')) {
                    rateType = 'TV';
                } else if (textUpper.includes('SEMESTRE VENCIDO') || textUpper.includes('SV') || textUpper.includes('NSV')) {
                    rateType = 'SV';
                }

                // Cálculo de EA base
                let eaDecimal = 0;
                if (rateType === 'EA') {
                    eaDecimal = rateValue / 100;
                } else if (rateType === 'MV') {
                    eaDecimal = Math.pow(1 + (rateValue / 100), 12) - 1;
                } else if (rateType === 'TV') {
                    eaDecimal = Math.pow(1 + (rateValue / 100), 4) - 1;
                } else if (rateType === 'SV') {
                    eaDecimal = Math.pow(1 + (rateValue / 100), 2) - 1;
                }

                // Generar equivalencias
                const eaPorcentaje = (eaDecimal * 100).toFixed(4);
                const mvPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 12) - 1) * 100).toFixed(4);
                const tvPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 4) - 1) * 100).toFixed(4);
                const svPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 2) - 1) * 100).toFixed(4);

                let responseText = `Para una tasa del ${rateValue}% ${rateType}, las equivalencias son:\n`;
                if (rateType !== 'EA') responseText += `\n• ${eaPorcentaje}% Efectiva Anual (EA)`;
                if (rateType !== 'MV') responseText += `\n• ${mvPorcentaje}% Nominal Mes Vencido (NMV)`;
                if (rateType !== 'TV') responseText += `\n• ${tvPorcentaje}% Nominal Trimestre Vencido (NTV)`;
                if (rateType !== 'SV') responseText += `\n• ${svPorcentaje}% Nominal Semestre Vencido (NSV)`;

                setMessages(prev => [...prev, {
                    text: responseText,
                    sender: 'bot'
                }]);
            } else {
                setMessages(prev => [...prev, {
                    text: "No detecté ningún número. Por favor, ingresa una tasa con su tipo, por ejemplo: '15.5% EA', '2% MV', o '5% TV'.",
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
                        placeholder="Escribe una tasa (ej. 15% EA, 2% MV)..."
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
