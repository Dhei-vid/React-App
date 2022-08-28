import "./cardList-styles.css";
import Card from "../card/card";


/*-------------------------------------------------------------------*/
// FUNCTIONAL COMPONENT 
// props argument is always the first parameter passed into the function
/*-------------------------------------------------------------------*/
const CardList = ({monsters}) => {
  return (
    <div className="card--list">
      <Card monsterData={monsters} />;
    </div>
  );
}

/*-------------------------------------------------------------------*/
// CLASS COMPONENT 
/*-------------------------------------------------------------------*/
// import { Component } from "react";
// class CardList extends Component {
//   // Whenever props change, Component will re-render
//   render() {
//     // this.props is a special keyword
//     const { monsters } = this.props;

//     return (
//       <div className="card--list">
//         <Card monsterData={monsters} />;
//       </div>
//     );
//   }
// }

export default CardList;
