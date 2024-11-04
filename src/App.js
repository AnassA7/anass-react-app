import plante from "./components/Data.js";
import Main from "./components/Main.js";
import Side from "./components/Side.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const ajouter = (id) => {
    // console.log(id);

    const foundItem = plante.find((plant) => plant.id === id);
    if (foundItem) {
      const existingItem = items.find((item) => item.id === id);
      console.log('ex',existingItem)
      if (existingItem) {
        setItems(items.map((item) =>
            item.id === id ? { ...item, quantite: item.quantite + 1 } : item
          )
        );
      } else {
        setItems((prevItems) => [...prevItems, { ...foundItem, quantite: 1 }]);
      }
    }
  };
  console.log(items);
  return (
    <div className="App">
      <Side items={items} />
      <Main object={plante} ajouter={ajouter} />
    </div>
  );
}

export default App;
