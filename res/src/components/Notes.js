import React from "react";
import { useState } from "react";

export default function Notes({ list , handleChange, handleClick ,show }) {

  return (
    <div>
      { show &&
      <table border="1px">
        <tr>
          <td>Matiere</td>
          <td>Note</td>
          <td>Coefficient</td>
        </tr>
        {list.map((mat, index) => (
          <tr>
            <td>{mat.matiere}</td>
            <td>
              <input
                type="number"
                // value={mat.note}
                onChange={(e) => handleChange(e, index, "note")}
              />
            </td>
            <td>
              <input
                type="number"
                // value={mat.cofe}
                onChange={(e) => handleChange(e, index, "cofe")}
              />
            </td>
          </tr>
        ))}
        <button onClick={handleClick}>Bulletin</button>
      </table>
      }
    </div>
  );
}