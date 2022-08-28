import "./searchBox-styles.css";


/*-------------------------------------------------------------------*/
// FUNCTIONAL COMPONENT 
// for functions, the props is passed in as an argument. 
// React also gives us the forwardRef as an argument (dunno what this is yet)
/*-------------------------------------------------------------------*/
const SearchBox = (props)=> {
  const {className, placeholder, onChangeHandler} = props;
  return (
    <div>
      <input
        className={`search--box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}



/*-------------------------------------------------------------------*/
// CLASS COMPONENT 
/*-------------------------------------------------------------------*/
// import { Component } from "react";
// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         {/* - In the input box we need to detect changes made to the text area with the onChange event 
//             - With string interpolation we can assign a className (search--box) to a certain property
//         */}
//         <input
//           className={`search--box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//   }
// }
/*-------------------------------------------------------------------*/

export default SearchBox;
