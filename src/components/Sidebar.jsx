import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Espace membre</h3>
      <p>Bienvenue ! Pour passer une annonce vous devez vous identifier.</p>
      <ul>
        <li>Connexion</li>
        <li>Ma sélection d’annonces</li>
      </ul>
      <h3>Nos Annonces</h3>
      <ul>
        <li>Consulter nos annonces</li>
        <li>Diffuser une annonce</li>
        <li>Administrer les annonces</li>
        <li>Qui sommes-nous ?</li>
      </ul>
    </div>
  );
}

export default Sidebar;
