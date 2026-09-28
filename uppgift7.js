/*Lösning på Uppgift 7: Arrayer och funktioner av Kei A.

Programmet loopar igenom alla tal i en array, med start på index 0.
Varje värde läggs till den tidigare summan (0 + 10 = 10,
10 + 20 = 30 osv.). När loopen är klar returneras totalsumman 210.*/

"use strict";

let numbers = [10, 20, 30, 40, 50, 60]; 

function arrayAddition(numbers) //Funktionen tar emot hela arrayen som parameter. 

{ let sumNumbers = 0; // Här sparas summan medan loopen arbetar.

 for (let i = 0; i < numbers.length; i++) {
    sumNumbers = sumNumbers + numbers[i]         // Lägger det aktuella värdet till den tidigare summan.
        console.log(numbers[i]);
    }
        return sumNumbers;     // Skickar tillbaka den färdiga summan.
}
console.log ("Summan är " + arrayAddition(numbers));