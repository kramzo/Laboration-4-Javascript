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

if (person.age <= 34) {
  console.log(person.name + " bor i " + person.city + " och är yngre än Valdemar. ");
} else {person.age >= 36
    console.log(person.name + " bor i " + person.city + " är äldre än Kei och Madelene. ")
}

}

for (let i = 0; i < people.length; i++) {
  listPeople(people[i]);
}

