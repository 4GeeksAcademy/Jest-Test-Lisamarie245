// Tasas de conversión
const oneEuroIs = {
    JPY: 156.5, 
    USD: 1.07, 
    GBP: 0.87   
};

// Conversión de Euro a Dólar
function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}

// Conversión de Dólar a Yen
function fromDollarToYen(dollarAmount) {
    const rate = oneEuroIs.JPY / oneEuroIs.USD;
    return dollarAmount * rate;
}

// Conversión de Yen a Libra
function fromYenToPound(yenAmount) {
    const rate = oneEuroIs.GBP / oneEuroIs.JPY;
    return yenAmount * rate;
}

// Exporto las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };