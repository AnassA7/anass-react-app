import React from 'react'

export default function Todo({handleInput,handleClick}) {
  return (
    <div>
        <input type='text' required onChange={handleInput}  />
        <button onClick={handleClick}>Ajouter</button>
    </div>
  )
}
