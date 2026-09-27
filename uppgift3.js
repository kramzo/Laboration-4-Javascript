/*Lösning för uppgift 3: Villkor by Kei A. */

"use strict";

const age = 18;

if (age < 18) {
    console.log("Barn");
} else if (age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}