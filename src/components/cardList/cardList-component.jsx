import { Component } from "react";
import "./cardList-styles.css";
import Card from "../card/card";

class CardList extends Component {
  // Whenever props change, Component will re-render
  render() {
    // this.props is a special keyword
    const { monsters } = this.props;

    return (
      <div className="card--list">
        <Card monsterData={monsters} />;
      </div>
    );
  }
}

export default CardList;
