import React, {useState, useEffect} from 'react';
// import logo from "./logo.svg";
import "./App.css";

// Used with class
import CardList from "./components/cardList/cardList-component";
import SearchBox from "./components/searchBox/searchBox-component";



/*-------------------------------------------------------------------*/
// FUNCTIONAL COMPONENT 
// Functional component of rendering with react
// always make use of arrow functions
/*-------------------------------------------------------------------*/
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  useEffect(()=> {
    // console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => setMonsters(users));
  }, [])

  useEffect(()=> {
    const newfilteredMonsters = monsters.filter((data) => {
      return data.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);

  }, [monsters, searchField])
  
  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldValue);
  };  

  return (
    <div className="App">
      <h1 className="app--title"> Monsters 🤖 Rolodex</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder={"search monster"}
        />
        <CardList monsters={filteredMonsters} />
    </div>
  )
}
/*----------------------------------------------------------*/


/*-------------------------------------------------------------------*/
// CLASS COMPONENT 
/*-------------------------------------------------------------------*/
// import { Component } from "react";
// Class component of rendering with react
// class App extends Component {
//   // the way to generate and access the state is through the constructor method
//   // (1) React runs the constructor first, normally
//   constructor() {
//     super();
//     // always a JSON object
//     // this just initializes the state
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };

//     // console.log("constructor");
//   }

//   // (3) This runs after the render
//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         return res.json();
//       })
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       })
//       .catch((err) => {
//         console.error("An error occurred", err);
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   // (2) Render runs after the constructor
//   render() {
//     // console.log("Render from cardList 1");
//     // So we do not keep using this.state, we can destructure to pull out data we need
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((data) => {
//       return data.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app--title"> Monsters 🤖 Rolodex</h1>
//         {/* In the input box we need to detect changes made to the text area with the onChange event */}
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder={"search monster"}
//         />

//         {/* - all components must have the first letter capitalized and must be in camelcase 
//             - monsters = {filteredMonsters} is an example of a prop. 
//         */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
/*----------------------------------------------------------*/

export default App;
