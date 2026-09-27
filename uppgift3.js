/*Lösning för uppgift 3: Villkor 

uppgift3.js – Villkor
Skapa en variabel age som innehåller en valfri ålder.

Använd if, else if och else för att skriva ut ett meddelande beroende på åldern:

under 18 år: "Barn"

18–64 år: "Vuxen"

65 år eller äldre: "Pensionär"

Testa programmet med flera olika åldrar så att du ser att samtliga grenar fungerar.*/

"use strict";

const defaultAge = 18
{console.log ("Ålder :" + defaultAge)};

if (defaultAge < 18) {console.log("Barn");
}

else if (defaultAge >= 18) console.log ("Vuxen")};

else (defaultAge <= 65) {console.log("Pensionär")};