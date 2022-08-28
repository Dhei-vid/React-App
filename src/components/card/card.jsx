import "./card-style.css";


/*-------------------------------------------------------------------*/
// FUNCTIONAL COMPONENT 
// props argument is always the first parameter passed into the function
/*-------------------------------------------------------------------*/
const Card = (props) => {
  const monsters = props.monsterData;
  return monsters.map((monster) => {
    const { id, name, email } = monster;
    return (
      <div className="card--container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2> {name} </h2>
        <em> {email} </em>
      </div>
    );
  });
      
}



/*-------------------------------------------------------------------*/
// CLASS COMPONENT 
/*-------------------------------------------------------------------*/
// import { Component } from "react";
// class Card extends Component {
//   render() {
//     const monsters = this.props.monsterData;

//     return monsters.map((monster) => {
//       const { id, name, email } = monster;
//       return (
//         <div className="card--container" key={id}>
//           <img
//             src={`https://robohash.org/${id}?set=set1&size=180x180`}
//             alt={`monster ${name}`}
//           />
//           <h2> {name} </h2>
//           <em> {email} </em>
//         </div>
//       );
//     });
//   }
// }

export default Card;
