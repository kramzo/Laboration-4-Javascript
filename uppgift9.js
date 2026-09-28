/*Lösning för Uppgift 9: Sammanhängande program av Kei A.*/

"use strict";

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

function listPeople(person) {
  if (person.age >= 18) {
    console.log(person.name + " bor i " + person.city + " och är myndig. ");
  } else {
    console.log(
      person.name + " bor i " + person.city + " och är inte myndig. ",
    );
  }
}

for (let i = 0; i < people.length; i++) {
  listPeople(people[i]);
}
