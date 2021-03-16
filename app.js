let transportation = ['car','bike','plane','walking','bus'];
let destinations = ['chilis','beach','bowling alley', 'concert'];
let entertainment = ['music','video games','book','movie'];
let dayTrip = []

function getRandomTransportation(array){
    randomTransportation = array[Math.floor(Math.random()* array.length)];
    dayTrip.push(randomTransportation);
}
function getRandomDestination(array){
    randomDestination= array[Math.floor(Math.random()* array.length)];
    dayTrip.push(randomDestination);
}
function getRandomEntertainment(array){
    randomEntertainment = array[Math.floor(Math.random()* array.length)];
    dayTrip.push(randomEntertainment);
}








getRandomTransportation(transportation);
getRandomDestination(destinations);
getRandomEntertainment(entertainment);
console.log(dayTrip);