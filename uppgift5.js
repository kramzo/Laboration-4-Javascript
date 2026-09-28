/*Lösning för Uppgift 5: Arrayer av Kei A.

Programmet skapar en array med fem olika maträtter och skriver ut
det första och sista elementet. Därefter läggs "Sushi" till sist
i arrayen och "Spaghetti" tas bort från början.*/

"use strict";

let foods = ["Spaghetti", "Pommes", "Nuggets", "Köttbullar", "Potatismos"]

console.log(foods);

console.log(foods[0]);

console.log(foods[4]);

foods.push("Sushi");

foods.shift();

console.log(foods);