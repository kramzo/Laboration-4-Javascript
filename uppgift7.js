/*Lösning på Uppgift 7: Arrayer och funktioner av Kei A.*/

"use strict";

let numbers = [10, 20, 30, 40, 50, 60]; //Platser: 10, 20, 30, 40, 50, 60 -> 0, 1, 2, 3, 4, 5 index


function arrayAddition(numbers) { let sumNumbers = 0;
 for (let i = 0; i < numbers.length; i++) {
    sumNumbers = sumNumbers + numbers[i]
        console.log(numbers[i]);
    }
        return sumNumbers;
}
console.log ("Summan är " + arrayAddition(numbers));