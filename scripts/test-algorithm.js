/**
 * test-algorithm.js
 * 
 * Standalone script to test the interest rate conversion algorithm
 * used in the Su Consultor Financiero project.
 */

function calculateEquivalentRates(rateValue, rateType) {
    const value = parseFloat(rateValue);
    
    // 1. Calculate the base Effective Annual (EA) rate in decimal form
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

    // 2. Generate equivalencies from the EA decimal
    const eaPorcentaje = (eaDecimal * 100).toFixed(4);
    const mvPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 12) - 1) * 100).toFixed(4);
    const tvPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 4) - 1) * 100).toFixed(4);
    const svPorcentaje = ((Math.pow(1 + eaDecimal, 1 / 2) - 1) * 100).toFixed(4);

    return {
        EA: eaPorcentaje,
        MV: mvPorcentaje,
        TV: tvPorcentaje,
        SV: svPorcentaje,
        originalType: rateType,
        originalValue: rateValue
    };
}

function displayResults(results) {
    console.log(`\n--- Resultados para ${results.originalValue}% ${results.originalType} ---`);
    if (results.originalType !== 'EA') console.log(`• Efectiva Anual (EA): ${results.EA}%`);
    if (results.originalType !== 'MV') console.log(`• Mes Vencido (NMV): ${results.MV}%`);
    if (results.originalType !== 'TV') console.log(`• Trimestre Vencido (NTV): ${results.TV}%`);
    if (results.originalType !== 'SV') console.log(`• Semestre Vencido (NSV): ${results.SV}%`);
}

// Test Cases
const testCases = [
    { value: 26.8242, type: 'EA' },
    { value: 2, type: 'MV' },
    { value: 6.1208, type: 'TV' }
];

console.log('Ejecutando el Algoritmo de Conversión de Tasas...');

testCases.forEach(testCase => {
    const results = calculateEquivalentRates(testCase.value, testCase.type);
    displayResults(results);
});

console.log('\n¡Algoritmo ejecutado con éxito!');
