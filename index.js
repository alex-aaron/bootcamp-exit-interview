
const pets = [
    {
        name: 'Noodles',
        species: 'cat',
        age: 7,
        gender: 'male',
        vetVisits: [
            {
                date: 'February 7, 2023',
                type: 'Non-emergency',
                notes: 'Saw Noodles for annual check-up.'
            },
            {
                date: 'October 15, 2024',
                type: 'Emergency',
                notes: 'Noodles ate a plant poisonous to cats.'
            }
        ]
    },
    {
        name: 'Fleur',
        species: 'cat',
        age: 13,
        gender: 'female',
        vetVisits: [
            {
                date: "July 20, 2023",
                type: 'Non-emergency',
                notes: 'Saw Fleur for annual check-up.'
            },
            {
                date: 'July 20, 2024',
                type: 'Non-emergency',
                notes: 'Saw Fleur for annual check-up and administered vaccinations.'
            }
        ]
    },
    {
        name: 'Bernie',
        species: 'dog',
        age: 6,
        gender: 'male',
        vetVisits: [
            {
                date: "September 5, 2024",
                type: 'Emergency',
                notes: 'Bernie was brought in for excessive vomitting.'
            }
        ]
    },
    {
        name: 'Bart',
        species: 'dog',
        age: 3,
        gender: 'male',
        vetVisits: [
            {
                date: 'April 18, 2021',
                type: 'Non-emergency',
                notes: "Performed Bart's neutering."
            },
            {
                date: 'November, 22, 2022',
                type: 'Non-emergency',
                notes: 'Administered vaccinations.'
            }
        ]
    }
];

/*
Create a function called logNotes that takes in an array of pet objects. 
This function should log the notes from each pet's vetVisits array.
*/

function logNotes(pets){
    for (let i = 0; i < pets.length; i++){
        for (let j = 0; j < pets[i].vetVisits.length; j++){
            // we're not hitting this code
        }
    }

}

// console.log(logNotes(pets));



/*
Create a function called getFirstVetVisitType that takes in an array of pet objects
and returns a new array of the dates of each pet's first vet visit.

example output:

        getFirstVetVisitType(pets); // => ['Non-emergency', 'Non-emergency', 'Emergency', 'Non-Emergency]
*/

function getFirstVetVisitType(){

}

/*
Use the native filter method to return a new array of only the pets that are male cats.
*/

let maleCats;


/*
Use the native map method to return a new array of the names and species of each pet.

Example output:
[
    'Noodles - cat',
    'Fleur - cat',
    'Bernie - dog'
    'Bart - dog'
]
*/




/*
Use the native filter method to return a new array of only the pets that are dogs
that have had only one vet vist.
*/

let dogsWithOneVisit;


/*
Use the native filter method to return a new array of only the pets that have had
vet vists marked as 'Emergency'.
*/

let emergency;

/*
Use the map method to return a new array of strings containing each pet's name, age, 
and gender.

example output =>
[ 
    "Noodles - male - 7 years old",
    "Fleur - female - 13 years old",
    "Bernie - male - 6 years old",
    "Bart - male - 3 years old"
]
*/



/*
Use the native reduce method to return a string of each pet's name followed by the
date of their most recent vet vist (assume the most recent is the visit that is LAST
in the array).

example output =>
"Noodles - last visit: October 15, 2024\nFleur - last visit: July 20, 2024\nBernie - last visit: September 5, 2024\nBart - last visit: November 22, 2022"
*/

let reducedStrings;