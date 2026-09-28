/*Lösning för uppgift 3: Villkor by Kei A. 

Programmet utgår från en angiven ålder och använder villkor
för att avgöra åldersgrupp. Personer under 18 år anges som barn,
18–64 år som vuxna och personer från 65 år som pensionärer.*/

"use strict";

const age = 18;

if (age < 18) {
    console.log("Barn");
} else if (age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}