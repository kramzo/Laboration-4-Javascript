/*Lösning på Uppgift 6: Funktioner av Kei A.

Programmet använder en funktion för att beräkna arean utifrån
en angiven bredd och höjd. Funktionen anropas med olika värden
för att beräkna och skriva ut olika resultat i terminalen.*/

"use strict";

function calculateArea(a, b) {
    return a * b;
}

console.log("Arean är " + calculateArea(10, 5));

console.log("Arean är " + calculateArea(8, 4));

console.log("Arean är " + calculateArea(2, 6));