import { Component } from "react";
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
  };

  render() {
    return (
      <div className="App">
        <h1>day trip app</h1>
      </div>
    );
  }
}

export default App;
