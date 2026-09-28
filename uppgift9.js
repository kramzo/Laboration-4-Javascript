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
    }
];

function listPeople(person) {

    console.log(person.name + " bor i " + person.city + " . ");
    
}

for (let i = 0; i < people.length; i++) {
       listPeople(people[i]);
}

