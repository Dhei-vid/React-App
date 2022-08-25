import { Component } from "react";
import "./searchBox-styles.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        {/* - In the input box we need to detect changes made to the text area with the onChange event 
            - With string interpolation we can assign a className (search--box) to a certain property
        */}
        <input
          className={`search--box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
