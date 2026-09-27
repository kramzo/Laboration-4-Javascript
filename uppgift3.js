/*Lösning för uppgift 3: Villkor */

"use strict";

const age = 18;

if (age < 18) {
    console.log("Barn");
} else if (age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}