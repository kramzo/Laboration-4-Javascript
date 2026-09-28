/*Lösning för uppgift 4: Loopar och villkor by Kei A.

Programmet använder först en for-loop för att gå igenom talen 1–20.
Sedan används modulusoperatorn (%) tillsammans med ett villkor
för att hitta och skriva ut endast de jämna talen.*/

"use strict";

for (let i = 1; i < 21; i++) { // Loopen går igenom talen 1 till 20.
if (i % 2 === 0) {console.log(i);} 
}  // % ger resten efter division. Resten 0 betyder jämnt tal.