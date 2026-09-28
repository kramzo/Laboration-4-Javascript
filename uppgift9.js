/*Lösning för Uppgift 9: Sammanhängande program av Kei A.

Programmet skapar en array med flera personobjekt och använder en loop
för att gå igenom dem. Varje person skickas till en funktion som använder
ett villkor för att skriva ut personens namn, stad och om personen är myndig.*/

"use strict";

// En array som innehåller flera personobjekt.
const people = [
  {
    name: "Kei",
    age: 34,
    city: "Floby",
  },
  {
    name: "Valdemar",
    age: 36,
    city: "Floby",
  },
  {
    name: "Ophelia",
    age: 4,
    city: "Falköping",
  },
];

// Funktionen tar emot en person i taget.
function listPeople(person) {

  // Kontrollerar personens ålder.
  if (person.age >= 18) {
    console.log(person.name + " bor i " + person.city + " och är myndig. ");
  } else {
    console.log(
      person.name + " bor i " + person.city + " och är inte myndig. ",
    );
  }
}

// Loopen går igenom alla personer i arrayen.
for (let i = 0; i < people.length; i++) {

   // people[i] är personen på det aktuella indexet.
    // Personen skickas sedan till funktionen.
  listPeople(people[i]);
}
