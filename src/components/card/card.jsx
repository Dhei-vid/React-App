import { Component } from "react";
import "./card-style.css";

class Card extends Component {
  render() {
    const monsters = this.props.monsterData;

    return monsters.map((monster) => {
      const { id, name, email } = monster;
      return (
        <div className="card--container" key={id}>
          <img
            src={`https://robohash.org/${id}?set=set1&size=180x180`}
            alt={`monster ${name}`}
          />
          <h2> {name} </h2>
          <p> {email} </p>
        </div>
      );
    });
  }
}

export default Card;
