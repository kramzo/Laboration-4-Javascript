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
    name: "Madelene",
    age: 34,
    city: "Uppsala",
  },
];

function listPeople(person) {

if (person.age >= 18) {
  console.log(person.name + " bor i " + person.city + " och är myndig. ");
} else {person.age <= 17
    console.log(person.name + " bor i " + person.city + " inte myndig. ")
}

}

for (let i = 0; i < people.length; i++) {
  listPeople(people[i]);
}

