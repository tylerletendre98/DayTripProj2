"use strict"
let modesOfTransportation = ['driving a car','riding a bike','flying a plane','walking','riding the bus'];
let differentDestinations = ['chilis','the beach','a bowling alley', 'a concert'];
let typesOfEntertainment = ['listening to music',' playing video games','reading a book','watching a movie'];
let dayTrip = []

function getRandomSelection(array){
    let randomSelection = array[Math.floor(Math.random()* array.length)];
    alert("your selection is "+ randomSelection);
    return randomSelection;
}
function changeRandomSelection(array,previousSelection){
    let userInput = prompt("do you want to keep this selection");
    if(user == yes){
        daytrip.push()
    }
}
let transportation = getRandomSelection(modesOfTransportation);
let destination = getRandomSelection(differentDestinations);
let entertainment = getRandomSelection(typesOfEntertainment);
console.log(transportation,destination,entertainment);
