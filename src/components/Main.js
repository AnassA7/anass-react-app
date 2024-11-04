import React from "react";


export default function Main({ object, ajouter }) {
  return (
    <div className="main">
      {object.map((plante, index) => (
        <div className="card" key={index}>
          <img src={plante.image} alt={plante.nom} height="200px" width="250px" />
          <h3>{plante.nom}</h3>
          <h3>{plante.prix}$</h3>
          <button onClick={() => ajouter(plante.id)}>ajouter</button>
        </div>
      ))}
    </div>
  );
}
