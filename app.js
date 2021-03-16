"use strict"
let transportation = ['driving a car','riding a bike','flying a plane','walking','riding the bus'];
let destinations = ['chilis','the beach','a bowling alley', 'a concert'];
let entertainment = ['listening to music',' playing video games','reading a book','watching a movie'];
let dayTrip = []

function getRandomTransportation(array){
    let randomTransportation = array[Math.floor(Math.random()* array.length)];// riding a bike
    alert(randomTransportation);
    let userInput = prompt("Please write yes or no to keep this transportation");//no
    if (userInput == "yes"){
        dayTrip.push(randomTransportation)
    }
    else if (userInput !== "yes"){
        while(userInput !== "yes"){
            randomTransportation = array[Math.floor(Math.random()* array.length)];// driving a car
            alert(randomTransportation);
            userInput = prompt("do you want to keep this transportation yes or no?");
            if (userInput== "yes"){
            dayTrip.push(randomTransportation);
            } 
        }  
    }
}

function getRandomDestination(array){
    let randomDestination = array[Math.floor(Math.random()* array.length)];// chilis 
    alert(randomDestination);// alerts chilis
    let userInput = prompt("Please write yes or no to keep this destination");//no
    if (userInput == "yes"){
        dayTrip.push(randomDestination)
    }
    else if (userInput !== "yes"){
        while(userInput !== "yes"){
        randomDestination = array[Math.floor(Math.random()* array.length)];
        alert(randomDestination);
        userInput = prompt("do you want to keep this entertainment yes or no?");
            if (userInput== "yes"){
             dayTrip.push(randomDestination);
            }  
        } 
    }
}
function getRandomEntertainment(array){
    let randomEntertainment = array[Math.floor(Math.random()* array.length)];
    alert(randomEntertainment);
    let userInput = prompt("Please write yes or no to keep this entertainment");
    if (userInput == "yes"){
        dayTrip.push(randomEntertainment)
    }
    else if (userInput !== "yes"){
        while(userInput !== "yes"){
        randomEntertainment = array[Math.floor(Math.random()* array.length)];
        alert(randomEntertainment);
        userInput = prompt("do you want to keep this entertainment yes or no?");
            if (userInput== "yes"){
             dayTrip.push(randomEntertainment);
            } 
        }
    }
}
getRandomTransportation(transportation);
getRandomDestination(destinations);
getRandomEntertainment(entertainment);
console.log("CONGRATULATIONS!! You will be "+dayTrip[0]+" my destination will be "+dayTrip[1]+" my form of entertainment will be during the trip will be "+dayTrip[2]+".");