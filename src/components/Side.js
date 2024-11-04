import React from "react";
export default function Side({ items }) {
  let totale = items.map(
    (items, index) => (items.prix * items.quantite)
  );
  let sum = totale.reduce((n1, n2) => n1 + n2, 0);
  // console.log(totale);
  // console.log(sum);
  return (
    <div className="side">
      <h1>Panier</h1>
      {items.map((items, index) => (
        <>
          <h2>
            {items.nom} {items.prix}$ X {items.quantite}
          </h2>
        </>
      ))}
      <h3>Totale {sum}$</h3>
    </div>
  );
}
