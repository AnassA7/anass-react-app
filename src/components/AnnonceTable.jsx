import React, { useContext } from 'react';
import { dataContext } from '../App';

function AnnonceTable() {
  const { annAdded } = useContext(dataContext);

  return (
    <div className="annonce-table">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Ville</th>
            <th>CodePostal</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {annAdded.map((ann) => (
            <tr key={ann.id}>
              <td>{ann.email}</td>
              <td>{ann.ville}</td>
              <td>{ann.codepostal}</td>
              <td><a href="#">Détails</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Page générée à : {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default AnnonceTable;
