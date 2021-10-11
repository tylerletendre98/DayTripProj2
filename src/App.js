import { Component } from "react";
import Header from "./components/header/header";
import "./App.css";

class App extends Component {
  state = {
    modesOfTransportation: [
      "driving a car",
      "riding a bike",
      "flying a plane",
      "walking",
      "riding the bus",
    ],
    differentDestinations: ["the beach", "a bowling alley", "a concert"],
    typesOfEntertainment: [
      "listening to music",
      " playing video games",
      "reading a book",
      "watching a movie",
    ],
    differentRestaurants: [
      "chilis",
      "buffalo wild wings",
      "TGI Fridays",
      "Wendys",
      "Ihop",
    ],
    dayTrip:[]
  };

  generateADayTrip=()=>{
    this.genderateASelection(this.state.modesOfTransportation);
    this.genderateASelection(this.state.differentDestinations);
    this.genderateASelection(this.state.typesOfEntertainment);
    this.genderateASelection(this.state.differentRestaurants);
    console.log(this.state.dayTrip)
  }

  genderateASelection=(array)=>{
    let selection = array[Math.floor(Math.random()*array.length)];
    alert(`Your selection is ${selection}`);
    this.state.dayTrip.push(selection);
  }
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <button onClick={this.generateADayTrip}>Click to generate a day trip</button>
        </div>
      </div>
    );
  }
}

export default App;
