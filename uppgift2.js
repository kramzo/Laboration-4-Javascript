/*Lösningen för uppgift 2: Operatorer och beräkningar by Kei A.

Programmet lagrar en produkts pris och antal i variabler.
Det beräknar det totala priset och lägger sedan till 25 % moms.
Resultatet skrivs ut i terminalen.*/

"use strict";

const productPrice = 250;
console.log("Produktpris: " + productPrice);

const productQuantity = 2;
console.log("Antal: " + productQuantity);

const totalPrice = productPrice * productQuantity;
console.log("Totalt: " + totalPrice);

const totalMoms = totalPrice * 0.25;
const totalWithVAT = totalPrice + totalMoms;
console.log("Totalt inklusive moms: " + totalWithVAT);