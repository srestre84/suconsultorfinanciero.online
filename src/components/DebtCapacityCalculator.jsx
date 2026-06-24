import React, { useState } from 'react';
import './DebtCapacityCalculator.css';

const DebtCapacityCalculator = () => {
    const [income, setIncome] = useState('');
    const [debts, setDebts] = useState('');
    const [appType, setAppType] = useState('individual');
    const [housingType, setHousingType] = useState('VIS');
    const [termYears, setTermYears] = useState(20);
    const [results, setResults] = useState(null);

    // Formatear números a moneda local (COP)
    const formatCOP = (val) => {
        if (!val) return '$0';
        return '$' + parseInt(val).toLocaleString('es-CO');
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        
        const monthlyIncome = parseFloat(income) || 0;
        const monthlyDebts = parseFloat(debts) || 0;

        if (monthlyIncome <= 0) {
            alert('Por favor, ingresa tus ingresos mensuales.');
            return;
        }

        // Ley de Vivienda en Colombia: 
        // VIS (Vivienda de Interés Social): Máximo 40% de ingresos se destina a cuota de vivienda.
        // No VIS (Vivienda de clase media/alta): Máximo 30% de ingresos se destina a cuota de vivienda.
        const pctLimit = housingType === 'VIS' ? 0.40 : 0.30;
        
        // Capacidad bruta de cuota (sin deudas)
        const grossCapacity = monthlyIncome * pctLimit;
        
        // Capacidad neta (restando deudas externas)
        let netCapacity = grossCapacity - monthlyDebts;
        if (netCapacity < 0) netCapacity = 0;

        // Estimar tasa mensual en 2026: aproximado 11.5% E.A. -> ~0.91% M.V.
        const rateMV = 0.0091; 
        const nMonths = termYears * 12;

        // Fórmula de Anualidad para valor presente (monto estimado de crédito prestado)
        // PV = PMT * [1 - (1+r)^-n] / r
        let estimatedLoan = 0;
        if (netCapacity > 0) {
            estimatedLoan = netCapacity * ((1 - Math.pow(1 + rateMV, -nMonths)) / rateMV);
        }

        // Sugerencias de vivienda recomendadas
        let housingRecommendation = '';
        if (estimatedLoan < 150000000) {
            housingRecommendation = 'Te recomendamos buscar proyectos VIS (Vivienda de Interés Social), que reciben subsidio de tasa de interés y cajas de compensación.';
        } else {
            housingRecommendation = 'Puedes optar a proyectos No VIS de clase media o alta. Límite de cuota del 30% de tus ingresos para proteger tu salud financiera.';
        }

        setResults({
            netCapacity: Math.round(netCapacity),
            estimatedLoan: Math.round(estimatedLoan),
            pctLimit: pctLimit * 100,
            grossCapacity: Math.round(grossCapacity),
            housingRecommendation
        });
    };

    const handleShare = () => {
        const url = `${window.location.origin}/calculadora`;
        const shareText = `📊 ¡Calculé mi capacidad de crédito hipotecario! Mi capacidad de cuota es ${formatCOP(results.netCapacity)} y me prestarían aprox ${formatCOP(results.estimatedLoan)}. Calcula la tuya aquí:`;
        
        if (navigator.share) {
            navigator.share({ title: 'Simulador de Capacidad de Crédito', text: shareText, url }).catch(console.error);
        } else {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + url)}`, '_blank');
        }
    };

    const whatsappText = results ? 
        `¡Hola! Hice la simulación de capacidad en la web. Mis ingresos son de ${formatCOP(income)} y mis deudas de ${formatCOP(debts)}. Mi capacidad de cuota estimada es de ${formatCOP(results.netCapacity)} y el préstamo estimado es de ${formatCOP(results.estimatedLoan)}. Quisiera realizar una simulación oficial con amortización detallada.` : '';

    const whatsappUrl = `https://wa.me/573167443613?text=${encodeURIComponent(whatsappText)}`;

    return (
        <div className="debt-capacity-calculator animate-fade-in">
            <div className="debt-calculator-header">
                <h3>📊 Simulador de Capacidad de Crédito</h3>
                <p>Calcula la cuota mensual máxima que te prestaría un banco según la Ley de Vivienda en Colombia.</p>
            </div>

            <form onSubmit={handleCalculate} className="debt-form">
                <div className="debt-input-row">
                    <div className="debt-input-group">
                        <label>Ingresos Mensuales Netos ($)</label>
                        <input 
                            type="number" 
                            placeholder="Ej. 3000000" 
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            required
                        />
                        <span className="debt-helper">{formatCOP(income)} COP</span>
                    </div>

                    <div className="debt-input-group">
                        <label>Deudas/Cuotas de otros bancos ($)</label>
                        <input 
                            type="number" 
                            placeholder="Ej. 500000" 
                            value={debts}
                            onChange={(e) => setDebts(e.target.value)}
                        />
                        <span className="debt-helper">{formatCOP(debts)} COP</span>
                    </div>
                </div>

                <div className="debt-input-row">
                    <div className="debt-input-group">
                        <label>Tipo de Solicitud</label>
                        <select value={appType} onChange={(e) => setAppType(e.target.value)}>
                            <option value="individual">Individual (Solo mis ingresos)</option>
                            <option value="joint">Familiar (Ingresos conjuntos con pareja)</option>
                        </select>
                    </div>

                    <div className="debt-input-group">
                        <label>Tipo de Vivienda a Comprar</label>
                        <select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
                            <option value="VIS">Vivienda VIS (Interés Social - Tope ~150 SMLMV)</option>
                            <option value="NoVIS">Vivienda No VIS (Clase Media/Alta - Mayor a 150 SMLMV)</option>
                        </select>
                    </div>
                </div>

                <div className="debt-input-group">
                    <label>Plazo del Crédito: <strong>{termYears} años</strong> (240 meses)</label>
                    <input 
                        type="range" 
                        min="5" 
                        max="30" 
                        step="5"
                        value={termYears}
                        onChange={(e) => setTermYears(parseInt(e.target.value))}
                        className="debt-range-slider"
                    />
                    <div className="debt-range-labels">
                        <span>5 años</span>
                        <span>15 años</span>
                        <span>30 años</span>
                    </div>
                </div>

                <button type="submit" className="debt-calc-btn">
                    Calcular mi Capacidad Financiera
                </button>
            </form>

            {results && (
                <div className="debt-results animate-fade-in">
                    <div className="debt-results-grid">
                        <div className="debt-result-card highlight">
                            <span className="debt-result-title">Cuota Mensual Máxima</span>
                            <span className="debt-result-value">{formatCOP(results.netCapacity)}</span>
                            <p className="debt-result-desc">Tu cuota máxima mensual autorizada por Ley ({results.pctLimit}% de tus ingresos netos menos tus deudas).</p>
                        </div>

                        <div className="debt-result-card highlight-gold">
                            <span className="debt-result-title">Préstamo Máximo Estimado</span>
                            <span className="debt-result-value">{formatCOP(results.estimatedLoan)}</span>
                            <p className="debt-result-desc">El valor aproximado del crédito hipotecario a {termYears} años que un banco te otorgaría.</p>
                        </div>
                    </div>

                    <div className="debt-recommendation-box">
                        <h4>💡 Diagnóstico Financiero:</h4>
                        <p>{results.housingRecommendation}</p>
                        {results.netCapacity === 0 && (
                            <p className="warning-text">⚠️ Alerta: Tus deudas actuales son iguales o superiores a tu límite legal de cuota. Recomendamos realizar una **Compra de Cartera** para unificar y bajar tus cuotas mensuales antes de solicitar tu crédito de vivienda.</p>
                        )}
                    </div>

                    <div className="debt-results-actions">
                        <a 
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="debt-whatsapp-btn"
                        >
                            💬 Solicitar Simulación Oficial e iniciar pre-aprobado
                        </a>
                        
                        <button onClick={handleShare} className="debt-share-btn">
                            🔗 Compartir mi resultado
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DebtCapacityCalculator;
