/*Lösning för Uppgift 8: Objekt av Kei A.

I programmet skapas ett objekt som representerar en bok.
Funktionen tar emot bokobjektet som parameter och skriver ut
information om boken.*/


"use strict";

const book = {
  title: "Circe",
  author: "Madeline Miller",
  releaseYear: 2018,
};

function bookInformation(book) {
  console.log("Titel: " + book.title);
  console.log("Författare: " + book.author);
  console.log("Utgivningsår: " + book.releaseYear);
}

bookInformation(book);
