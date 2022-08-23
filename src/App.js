import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/cardList/cardList-component";

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
      searchField: "",
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  // (2) Render runs after the constructor
  render() {
    // console.log("render");

    // So we do not keep using this.state, we can destructure to pull out data we need
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((data) => {
      return data.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* In the input box we need to detect changes made to the text area with the onChange event */}
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />

        {/* all components must have the first letter capitalized and must be in
        camelcase */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
