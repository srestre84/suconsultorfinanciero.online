import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { dictionaryData } from '../data/dictionaryData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const initialOptions = [
        { label: '📊 Simular Crédito / Amortización', value: 'simulacion' },
        { label: '📖 Definiciones Financieras', value: 'definiciones' },
        { label: '💬 Escribir al WhatsApp', value: 'whatsapp' }
    ];

    const [messages, setMessages] = useState([
        { 
            text: "¡Hola! Soy tu asistente financiero. 🤖<br/>Puedo ayudarte con la conversión de tasas, brindarte definiciones de términos financieros del mercado colombiano, o guiarte para simulaciones de crédito. Selecciona una opción o escribe tu consulta:", 
            sender: 'bot',
            options: initialOptions
        }
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

    const handleOptionClick = (value, label) => {
        // Agregar el mensaje del usuario
        setMessages(prev => [...prev, { text: label, sender: 'user' }]);

        setTimeout(() => {
            let responseText = "";
            let nextOptions = null;

            if (value === 'simulacion') {
                responseText = "Para realizar simulaciones personalizadas de crédito hipotecario o compra de cartera, calcular tu capacidad de endeudamiento exacta o generar tablas de amortización detalladas con las tasas vigentes de los bancos colombianos, te daremos una asesoría directa e inmediata por WhatsApp. ¡Hagamos los números juntos!";
                nextOptions = [
                    { label: '💬 Chatear por WhatsApp ahora', value: 'whatsapp' },
                    { label: '🏠 Volver al menú', value: 'menu' }
                ];
            } else if (value === 'definiciones') {
                responseText = "Selecciona una de las definiciones financieras básicas para ver su significado, o escribe el término que desees consultar:";
                nextOptions = [
                    { label: '📈 ¿Qué es la Tasa EA?', value: 'def_ea' },
                    { label: '🏦 ¿Qué es la Compra de Cartera?', value: 'def_compra' },
                    { label: '⚖️ ¿Qué es la Tasa de Usura?', value: 'def_usura' },
                    { label: '📋 Ver lista de conceptos', value: 'def_lista' },
                    { label: '🏠 Volver al menú', value: 'menu' }
                ];
            } else if (value === 'whatsapp') {
                responseText = "Conéctate de inmediato al WhatsApp del consultor para recibir asesoría personalizada, simulaciones de cuotas e información sobre tasas:<br/><br/><a href='https://wa.me/573167443613?text=Hola,%20me%20gustar%C3%ADa%20hacer%20una%20simulaci%C3%B3n%20y%20conocer%20los%20detalles%20de%20amortizaci%C3%B3n%20para%20un%20cr%C3%A9dito.' target='_blank' rel='noopener noreferrer' class='whatsapp-chat-link' style='display:inline-block; background-color:#25d366; color:white; padding:0.6rem 1.2rem; border-radius:20px; text-decoration:none; font-weight:bold; margin-top:0.5rem; text-align:center; box-shadow:0 4px 10px rgba(37,211,102,0.3)'>🟢 Escribir por WhatsApp</a>";
                nextOptions = [
                    { label: '🏠 Volver al menú', value: 'menu' }
                ];
            } else if (value === 'menu') {
                responseText = "¿En qué más te puedo colaborar hoy? Selecciona una opción o escribe tu pregunta:";
                nextOptions = initialOptions;
            } else if (value.startsWith('def_')) {
                const defKey = value.replace('def_', '');
                if (defKey === 'lista') {
                    responseText = "Puedes preguntar en el chat sobre cualquiera de estos conceptos clave:<br/>• UVT<br/>• SMLMV<br/>• TRM<br/>• CDT<br/>• Score Crediticio<br/>• Amortización<br/>• Capacidad de endeudamiento<br/>• Paz y Salvo<br/>• Abono a capital<br/>• Pre-aprobado hipotecario<br/>• Estudio de títulos<br/>• Avalúo comercial<br/>• Seguro de vida deudores<br/>• Ley de Borrón y Cuenta Nueva";
                    nextOptions = [
                        { label: '💬 Consultar al Asesor (WhatsApp)', value: 'whatsapp' },
                        { label: '🏠 Volver al menú', value: 'menu' }
                    ];
                } else {
                    const termMap = {
                        ea: 'ea',
                        compra: 'compra-cartera',
                        usura: 'tasa-usura',
                        leasing: 'opcion-de-compra-leasing'
                    };
                    const targetId = termMap[defKey];
                    const dictItem = dictionaryData.find(item => item.id === targetId);
                    if (dictItem) {
                        responseText = `<b>${dictItem.term}:</b> ${dictItem.definition}${dictItem.value ? '<br/><br/><i>Nota: ' + dictItem.value + '</i>' : ''}`;
                    } else {
                        responseText = "Definición no encontrada.";
                    }
                    nextOptions = [
                        { label: '📖 Ver otras definiciones', value: 'definiciones' },
                        { label: '🏠 Volver al menú', value: 'menu' }
                    ];
                }
            }

            setMessages(prev => [...prev, {
                text: responseText,
                sender: 'bot',
                options: nextOptions
            }]);
        }, 500);
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userInput = input;
        // Agregar mensaje del usuario
        setMessages(prev => [...prev, { text: userInput, sender: 'user' }]);
        setInput('');

        setTimeout(() => {
            const textUpper = userInput.toUpperCase();
            
            // 1. Verificar si es una tasa de interés para convertir
            const match = userInput.match(/(\d+(\.\d+)?)/);
            const hasRateKeywords = textUpper.includes('%') || textUpper.includes('EA') || textUpper.includes('MV') || textUpper.includes('TV') || textUpper.includes('SV') || textUpper.includes('TASA');
            
            // 2. Verificar si pide simulación, amortización o detalles
            const hasSimulationKeywords = ["AMORTIZA", "SIMULA", "DETALLE", "CUOTA", "PRESTAR", "TABLA", "CREDITO", "CRÉDITO", "FINANCIA", "LEASING", "VALOR"].some(word => textUpper.includes(word));

            if (hasSimulationKeywords) {
                const responseText = "Para brindarte información específica sobre **amortizaciones, cuotas y simulaciones**, te daremos atención directa en nuestro canal de WhatsApp. Allí calculamos tu capacidad de endeudamiento en tiempo real con las tasas de los bancos y te generamos tu plan de pagos:<br/><br/><a href='https://wa.me/573167443613?text=Hola,%20me%20gustar%C3%ADa%20hacer%20una%20simulaci%C3%B3n%20y%20conocer%20los%20detalles%20de%20amortizaci%C3%B3n%20para%20un%20cr%C3%A9dito.' target='_blank' rel='noopener noreferrer' class='whatsapp-chat-link' style='display:inline-block; background-color:#25d366; color:white; padding:0.6rem 1.2rem; border-radius:20px; text-decoration:none; font-weight:bold; margin-top:0.5rem; text-align:center; box-shadow:0 4px 10px rgba(37,211,102,0.3)'>🟢 Escribir por WhatsApp</a>";
                setMessages(prev => [...prev, {
                    text: responseText,
                    sender: 'bot',
                    options: [
                        { label: '🏠 Volver al menú', value: 'menu' }
                    ]
                }]);
            } else if (match && hasRateKeywords) {
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

                let responseText = `Para una tasa del <b>${rateValue}% ${rateType}</b>, las equivalencias son:<br/><ul>`;
                if (rateType !== 'EA') responseText += `<li><b>${eaPorcentaje}%</b> Efectiva Anual (EA)</li>`;
                if (rateType !== 'MV') responseText += `<li><b>${mvPorcentaje}%</b> Nominal Mes Vencido (NMV)</li>`;
                if (rateType !== 'TV') responseText += `<li><b>${tvPorcentaje}%</b> Nominal Trimestre Vencido (NTV)</li>`;
                if (rateType !== 'SV') responseText += `<li><b>${svPorcentaje}%</b> Nominal Semestre Vencido (NSV)</li>`;
                responseText += `</ul>`;

                setMessages(prev => [...prev, {
                    text: responseText,
                    sender: 'bot',
                    options: [
                        { label: '💬 Consultar viabilidad en WhatsApp', value: 'whatsapp' },
                        { label: '🏠 Volver al menú', value: 'menu' }
                    ]
                }]);
            } else {
                // 3. Buscar definición básica de términos
                const foundTerm = dictionaryData.find(item => {
                    const termUpper = item.term.toUpperCase();
                    const idUpper = item.id.toUpperCase();
                    return textUpper.includes(termUpper) || textUpper.includes(idUpper) || (termUpper.split(' ').length > 1 && termUpper.split(' ').every(word => word.length > 2 && textUpper.includes(word)));
                });

                if (foundTerm) {
                    const responseText = `<b>${foundTerm.term}</b> (${foundTerm.category}):<br/>${foundTerm.definition}${foundTerm.value ? '<br/><br/><i>Nota: ' + foundTerm.value + '</i>' : ''}`;
                    setMessages(prev => [...prev, {
                        text: responseText,
                        sender: 'bot',
                        options: [
                            { label: '💬 Preguntar detalles por WhatsApp', value: 'whatsapp' },
                            { label: '📖 Ver otras definiciones', value: 'definiciones' },
                            { label: '🏠 Volver al menú', value: 'menu' }
                        ]
                    }]);
                } else {
                    // Fallback
                    const responseText = "No logré identificar la consulta. Puedes ingresar una tasa a convertir (ej. '12% EA'), preguntar por la definición de un término financiero (ej. '¿Qué es el CDT?'), o seleccionar una opción rápida:";
                    setMessages(prev => [...prev, {
                        text: responseText,
                        sender: 'bot',
                        options: initialOptions
                    }]);
                }
            }
        }, 600);
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
                        <div key={idx} className="message-container" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <div className={`message-wrapper ${msg.sender}`}>
                                {msg.sender === 'bot' ? (
                                    <div 
                                        className={`message ${msg.sender}`}
                                        dangerouslySetInnerHTML={{ __html: msg.text }}
                                    />
                                ) : (
                                    <div className={`message ${msg.sender}`}>
                                        {msg.text}
                                    </div>
                                )}
                            </div>
                            {msg.sender === 'bot' && msg.options && (
                                <div className="chat-options-container">
                                    {msg.options.map((opt, oIdx) => (
                                        <button 
                                            key={oIdx} 
                                            className="chat-option-button" 
                                            onClick={() => handleOptionClick(opt.value, opt.label)}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}
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
                        placeholder="Escribe tu duda o consulta..."
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
