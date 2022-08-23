import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div>
        {monsters.map((element) => {
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

export default CardList;
