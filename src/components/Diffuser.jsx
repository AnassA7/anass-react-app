import React, { useContext, useState } from 'react';
import { dataContext } from '../App.jsx';

export default function Diffuser() {
  const { annonces, categories, regions, users, annAdded, setAnnAdded } = useContext(dataContext);
  
  const [formData, setFormData] = useState({
    texte: '',
    categorie: '',
    region: '',
    prix: '',
    telephone: '',
    email: '',
    codePostal: '',
    ville: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    

    const newAnn = {
      id: annonces.length + 1, 
      texte: formData.texte,
      tel: formData.telephone,
      email: formData.email,
      prix: formData.prix,
      ville: formData.ville,
      codepostal: formData.codePostal,
      regid: parseInt(formData.region),
      catid: formData.categorie,
    };


    setAnnAdded([...annonces, newAnn]);
    setFormData({ 
      texte: '',
      categorie: '',
      region: '',
      prix: '',
      telephone: '',
      email: '',
      codePostal: '',
      ville: '',
    });
    console.log(formData)
  };
  console.log("2",annAdded)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <table>
          <fieldset>
            <tr>
              <td>Texte de l'annonce (250 caractères max)</td>
              <td colSpan={3} width={300}>
                <textarea
                  name="texte"
                  value={formData.texte}
                  onChange={onChange}
                  maxLength="250"
                />
              </td>
            </tr>
            <tr>
              <td>Catégorie</td>
              <td>
                <select
                  name="categorie"
                  value={formData.categorie}
                  onChange={onChange}
                >
                  {categories.map((cat) => (
                    <option key={cat.catid} value={cat.catid}>
                      {cat.catnom}
                    </option>
                  ))}
                </select>
              </td>
              <td>Région</td>
              <td>
                <select
                  name="region"
                  value={formData.region}
                  onChange={onChange}
                >
                  {regions.map((reg) => (
                    <option key={reg.regid} value={reg.regid}>
                      {reg.regnom}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Prix proposé</td>
              <td>
                <input
                  type="number"
                  name="prix"
                  value={formData.prix}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Téléphone</td>
              <td>
                <input
                  type="text"
                  name="telephone"
                  value={formData.telephone}
                  onChange={onChange}
                />
              </td>
              <td>@</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Code postal</td>
              <td>
                <input
                  type="text"
                  name="codePostal"
                  value={formData.codePostal}
                  onChange={onChange}
                />
              </td>
              <td>Ville</td>
              <td>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <input type="submit" value="Ajouter l'annonce" />
                <input
                  type="reset"
                  value="Réinitialiser"
                  onClick={() => setFormData({
                    texte: '',
                    categorie: '',
                    region: '',
                    prix: '',
                    telephone: '',
                    email: '',
                    codePostal: '',
                    ville: '',
                  })}
                />
              </td>
            </tr>
          </fieldset>
        </table>
      </form>
    </div>
  );
}