/*Lösningen för uppgift 2: Operatorer och beräkningar*/

"use strict";

const productPrice = 250;
console.log("Produktpris: " + productPrice);

const productQuantity = 2;
console.log("Antal: " + productQuantity);

const totalPrice = (productPrice * productQuantity);
console.log("Totalt: " + totalPrice);

const totalMoms = totalPrice + {totalPrice * 0.25};
console.log ("Totalt inklusive moms: " + totalPrice + totalMoms)