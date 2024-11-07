import React from 'react'

export default function Liste({list,sup}) {
  return (
    <div>
        {list.map((item , index)=>(
            <div key={index}>
                <li id={item.id} > {item.nom} </li>
                <button onClick={()=>sup(item.id)}>supremer</button>
            </div>
        ))

        }
    </div>
  )
}
