// Importar las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test para convertir de Euro a Dólar
test('Convierte 1 Euro a Dólar', () => {
    const result = fromEuroToDollar(1);
    expect(result).toBe(1.07);
});

// Test para convertir de Dólar a Yen
test('Convierte 1 Dólar a Yen', () => {
    const result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26, 2); 
});

// Test para convertir de Yen a Libra
test('Convierte 1 Yen a Libra', () => {
    const result = fromYenToPound(1);
    expect(result).toBeCloseTo(0.00556, 5); 
});
