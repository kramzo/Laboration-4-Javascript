/*Lösning på Uppgift 7: Arrayer och funktioner av Kei A.*/

"use strict";

let numbers = [10, 20, 30, 40, 50, 60];


function arrayAddition(numbers) {
 for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

arrayAddition(numbers);

console.log ("Summan är " + numbers);