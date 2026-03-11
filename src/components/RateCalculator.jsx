import React, { useState } from 'react';
import './RateCalculator.css';

const RateCalculator = () => {
    const [rateValue, setRateValue] = useState('');
    const [rateType, setRateType] = useState('EA');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(false);

    const calculateRates = (e) => {
        e.preventDefault();
        
        if (!rateValue || isNaN(rateValue) || rateValue <= 0) {
            setError(true);
            setResults(null);
            return;
        }

        setError(false);
        const value = parseFloat(rateValue);

        // Cálculo de EA base
        let eaDecimal = 0;
        if (rateType === 'EA') {
            eaDecimal = value / 100;
        } else if (rateType === 'MV') {
            eaDecimal = Math.pow(1 + (value / 100), 12) - 1;
        } else if (rateType === 'TV') {
            eaDecimal = Math.pow(1 + (value / 100), 4) - 1;
        } else if (rateType === 'SV') {
            eaDecimal = Math.pow(1 + (value / 100), 2) - 1;
        }

        // Generar equivalencias
        const eaPorcentaje = (eaDecimal * 100).toFixed(4);
        const mvPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 12) - 1) * 100).toFixed(4);
        const tvPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 4) - 1) * 100).toFixed(4);
        const svPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 2) - 1) * 100).toFixed(4);

        setResults({
            EA: eaPorcentaje,
            MV: mvPorcentaje,
            TV: tvPorcentaje,
            SV: svPorcentaje,
            originalType: rateType,
            originalValue: value
        });
    };

    return (
        <div className="rate-calculator animate-fade-in delay-2">
            <div className="rate-calculator-header">
                <h3>🧮 Calculadora de Tasas</h3>
                <p>Convierte cualquier tasa de interés a todas sus equivalencias al instante.</p>
            </div>

            <form onSubmit={calculateRates} className="rate-form">
                <div className="rate-input-group">
                    <label>Valor de la tasa (%)</label>
                    <input 
                        type="number" 
                        step="0.01" 
                        placeholder="Ej. 1.5" 
                        value={rateValue}
                        onChange={(e) => setRateValue(e.target.value)}
                        required
                    />
                </div>
                <div className="rate-input-group">
                    <label>Tipo de Tasa</label>
                    <select value={rateType} onChange={(e) => setRateType(e.target.value)}>
                        <option value="EA">Efectiva Anual (EA)</option>
                        <option value="MV">Nominal Mes Vencido (NMV/MV)</option>
                        <option value="TV">Nominal Trimestre Vencido (NTV/TV)</option>
                        <option value="SV">Nominal Semestre Vencido (NSV/SV)</option>
                    </select>
                </div>
                
                <button type="submit" className="rate-calc-btn">
                    Convertir Tasa Ahora
                </button>
            </form>

            {error && <div className="rate-error">Por favor, ingresa un número de tasa válido.</div>}

            {results && (
                <div className="rate-results animate-fade-in">
                    <h4>Resultados Equivalentes:</h4>
                    
                    {results.originalType !== 'EA' && (
                        <div className="rate-result-item">
                            <span className="rate-result-label">Efectiva Anual (EA)</span>
                            <span className="rate-result-value">{results.EA}%</span>
                        </div>
                    )}
                    
                    {results.originalType !== 'MV' && (
                        <div className="rate-result-item">
                            <span className="rate-result-label">Mes Vencido (NMV)</span>
                            <span className="rate-result-value">{results.MV}%</span>
                        </div>
                    )}
                    
                    {results.originalType !== 'TV' && (
                        <div className="rate-result-item">
                            <span className="rate-result-label">Trimestre Vencido (NTV)</span>
                            <span className="rate-result-value">{results.TV}%</span>
                        </div>
                    )}
                    
                    {results.originalType !== 'SV' && (
                        <div className="rate-result-item">
                            <span className="rate-result-label">Semestre Vencido (NSV)</span>
                            <span className="rate-result-value">{results.SV}%</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RateCalculator;
