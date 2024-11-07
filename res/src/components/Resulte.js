import React from 'react'

export default function Resulte({notes,show,hadleClick}) {
    let tot =notes.map((note)=>note.note*note.cofe)
    console.log('tot',tot)
    let resTot = tot.reduce((n1,n2)=>n1+n2) 
    console.log('rsetot',resTot)
    let coef =notes.map((note)=>note.cofe*1) 
    console.log('coef',coef)
    let resCoef= coef.reduce((n,nn)=>n+nn)
    console.log('rescoef',resCoef)
    const resulte = resTot/resCoef 
  return (
    <div>
        {!show &&
            <div>
      <table border="1px">
        <tr>
          <td>Matiere</td>
          <td>Note</td>
          <td>Coefficient</td>
          <td>Note*Coef</td>
        </tr>
        {notes.map((note, index) => (
          <tr>
            <td>{note.matiere}</td>
            <td>{note.note}</td>
            <td>{note.cofe}</td>
            <td>{note.note*note.cofe}</td>
          </tr>

        ))}
        <tr>
            <td>Moyenne generale :</td>
            <td>{resulte}</td>
        </tr>
        <button onClick={hadleClick}>Fermer</button>
      </table>
    </div>
    }
    </div>
  )
}
