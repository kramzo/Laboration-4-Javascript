/*Lösning för Uppgift 5: Arrayer av Kei A.

Programmet skapar en array med fem olika maträtter och skriver ut
det första och sista elementet. Därefter läggs "Sushi" till sist
i arrayen och "Spaghetti" tas bort från början.*/

"use strict";

let foods = ["Spaghetti", "Pommes", "Nuggets", "Köttbullar", "Potatismos"] // En array som innehåller flera maträtter.

console.log(foods);

console.log(foods[0]); // [0] hämtar det första elementet i arrayen.

console.log(foods[4]);

foods.push("Sushi"); // .push() lägger till ett nytt element sist.

foods.shift(); // .shift() tar bort det första elementet.

console.log(foods);