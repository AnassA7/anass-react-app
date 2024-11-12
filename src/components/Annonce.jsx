import React, { useContext, useState } from 'react';
import { dataContext } from '../App.jsx';

export default function Annonce() {
  const { annonces, categories, regions, users,annAdded } = useContext(dataContext);
  const [annonce, setAnnonce] = useState(0);

  
  const handleChange = (e) => {
    setAnnonce(e.target.value);
  };


  const filteredAnnonces = annAdded.filter((an) => an.regid === parseInt(annonce));
  console.log(annAdded)
  console.log(filteredAnnonces)
  return (
    <div>
      <select onChange={handleChange} value={annonce}>
        <option value="">Select a Region</option>
        {regions.map((reg) => (
          <option key={reg.regid} value={reg.regid}>
            {reg.regnom}
          </option>
        ))}
      </select>

      {filteredAnnonces.length > 0 ? (
        filteredAnnonces.map((ann) => {
          const category = categories.find((cat) => cat.catid === ann.catid)?.catnom;
          const region = regions.find((reg) => reg.regid === ann.regid)?.regnom;

          return (
            <div key={ann.id} className="annonce-card">
              <p>{ann.ville}, {ann.codepostal} ({region})</p>
              <p> {ann.email}</p>
              <h3>{ann.texte}</h3>
            </div>
          );
        })
      ) : (
        <p>No annonces available for this region.</p>
      )}
    </div>
  );
}