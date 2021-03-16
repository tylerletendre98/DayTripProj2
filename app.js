"use strict"
let transportation = ['car','bike','plane','walking','bus'];
let destinations = ['chilis','the beach','a bowling alley', 'a concert'];
let entertainment = ['listening to music',' playing video games','a book','watching a movie'];
let dayTrip = []

function getRandomTransportation(array){
    let randomTransportation = array[Math.floor(Math.random()* array.length)];
    alert(randomTransportation);
    let userInput = prompt("Please write yes or no to keep this entertainment");
    while(userInput !== "yes"){
        randomTransportation = array[Math.floor(Math.random()* array.length)];
        alert(randomTransportation);
        userInput = prompt("do you want to keep this entertainment yes or no?");
        if (userInput== "yes"){
            dayTrip.push(randomTransportation);
        }
    }
    dayTrip.push(randomTransportation);
}
function getRandomDestination(array){
    let randomDestination = array[Math.floor(Math.random()* array.length)];
    alert(randomDestination);
    let userInput = prompt("Please write yes or no to keep this entertainment");
    while(userInput !== "yes"){
        randomDestination = array[Math.floor(Math.random()* array.length)];
        alert(randomDestination);
        userInput = prompt("do you want to keep this entertainment yes or no?");
        if (userInput== "yes"){
            dayTrip.push(randomDestination);
        }
    }
    dayTrip.push(randomDestination);
}
function getRandomEntertainment(array){
    let randomEntertainment = array[Math.floor(Math.random()* array.length)];
    alert(randomEntertainment);
    let userInput = prompt("Please write yes or no to keep this entertainment");
    while(userInput !== "yes"){
        randomEntertainment = array[Math.floor(Math.random()* array.length)];
        alert(randomEntertainment);
        userInput = prompt("do you want to keep this entertainment yes or no?");
        if (userInput== "yes"){
            dayTrip.push(randomEntertainment);
        }
    }
    dayTrip.push(randomEntertainment);
}
getRandomTransportation(transportation);
getRandomDestination(destinations);
getRandomEntertainment(entertainment);
console.log("I will be using a"+ " "+dayTrip[0]+" my destination will be"+" "+dayTrip[1]+" my form of entertainment will be"+" "+dayTrip[2]+".");