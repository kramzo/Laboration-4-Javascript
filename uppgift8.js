/*Lösning för Uppgift 8: Objekt av Kei A.

I programmet skapas ett objekt som representerar en bok.
Funktionen tar emot bokobjektet som parameter och skriver ut
information om boken.*/


"use strict";

// Ett objekt som samlar information om en bok.
const book = {
  title: "Circe",
  author: "Madeline Miller",
  releaseYear: 2018,
};

// Funktionen tar emot ett bokobjekt som parameter.
function bookInformation(book) {

  // Punktnotation används för att hämta objektets egenskaper.
  console.log("Titel: " + book.title);
  console.log("Författare: " + book.author);
  console.log("Utgivningsår: " + book.releaseYear);
}

// Skickar objektet book till funktionen.
bookInformation(book);
