var valorDolar = 399.99

valorEmDolarNumero = parseFloat(valorDolar)

alert(valorEmDolarNumero) // printa valor em float

var valorEmReal = valorEmDolarNumero * 5.50

var valorEmRealDecimal = valorEmReal.toFixed(2)
// valor toFixed, fixa 2 valores após o ponto ( .95 ) ,
// 399.99 convertido para 2199.95

alert(valorEmRealDecimal) 


