"use strict";
let modesOfTransportation = ['driving a car','riding a bike','flying a plane','walking','riding the bus'];
let differentDestinations = ['the beach','a bowling alley', 'a concert'];
let typesOfEntertainment = ['listening to music',' playing video games','reading a book','watching a movie'];
let differentRestaurants = ['chilis','buffalo wild wings','TGI Fridays','Wendys','Ihop']
let dayTrip = []

function getRandomSelection(array){
    let randomSelection = array[Math.floor(Math.random()* array.length)];
    alert("your selection is "+ randomSelection);
    return randomSelection;
}
function generateAnotherSelection(array){
    let anotherSelection;
    while(userInput !== "yes"){
        let anotherSelection = array[Math.floor(Math.random()* array.length)];
        alert("Your new selection is "+ anotherSelection);
        userInput = prompt("did you like your new selection? Yes or No");   
        if(userInput == "yes"){
            dayTrip.push(anotherSelection);
        }
    }
}
function pushToDayTrip(dayTripPiece){
    dayTrip.push(dayTripPiece);
}
let transportation = getRandomSelection(modesOfTransportation);
let userInput = prompt("did you like your selection? enter yes or no")
    if (userInput !== "yes"){
       let anotherSelection = generateAnotherSelection(modesOfTransportation);
    }
    else if (userInput == "yes"){
        dayTrip.push(transportation);
    }  
let destination = getRandomSelection(differentDestinations);
    userInput = prompt("did you like your selection? enter yes or no")
    if (userInput !== "yes"){
        let anotherSelection = generateAnotherSelection(differentDestinations);
    }    
    else if (userInput == "yes"){
        dayTrip.push(destination)
    }
let entertainment = getRandomSelection(typesOfEntertainment);
    userInput = prompt("did you like your selection? enter yes or no")
    if (userInput !== "yes"){
        let anotherSelection = generateAnotherSelection(typesOfEntertainment);
    }
    else if(userInput == "yes"){
        dayTrip.push(entertainment);
    }
let resturant  = getRandomSelection(differentRestaurants);
    userInput = prompt("did you like your selection? enter yes or no")
    if (userInput !== "yes"){
        let anotherSelection = generateAnotherSelection(differentRestaurants);
    }
    else if(userInput == "yes"){
        dayTrip.push(resturant);
    }
console.log("Your transportation will be "+ dayTrip[0]+". Your destination will be "+dayTrip[1]+" your entertainment during transit will be "+dayTrip[2]+". Lastly the restuarant you will be going to will be "+dayTrip[3]+".");



