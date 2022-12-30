// Truthy
Boolean(true) // True
Boolean("a") // True
Boolean(1) // True (Numeros positivos y negativos son true)
Boolean([]) // True
Boolean({}) // True
Boolean(function(){}) // True

// Falsy o False
Boolean(); // False
Boolean(0); // False
Boolean(null); // False
Boolean(NaN); // False (NaN: Not a Number)
Boolean(undefined); // False
Boolean(""); // False
Boolean(" ") // true