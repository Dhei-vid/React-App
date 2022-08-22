import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

// Class component of rendering with react
class App extends Component {
  // the way to generate and access the state is through the constructor method
  // (1) React runs the constructor first, normally
  constructor() {
    super();
    // always a JSON object
    // this just initializes the state
    this.state = {
      monsters: [],
    };

    // console.log("constructor");
  }

  // (3) This runs after the render
  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        );
      })
      .catch((err) => {
        console.error("An error occurred", err);
      });
  }

  // (2) Render runs after the constructor
  render() {
    // console.log("render");
    return (
      <div className="App">
        {/* In the input box we need to detect changes made to the text area with the onChange event */}
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((data) => {
              return data.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />

        {this.state.monsters.map((element) => {
          return (
            <div key={element.id}>
              <h1> {element.name} </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
