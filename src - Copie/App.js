import Todo from "./components/Todo";
import { useState } from "react";
import "./App.css";
import Liste from "./components/Liste";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  console.log(list);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    const id = list.length + 1;
    setList((item) => [...item, { id: id, nom: input }]);
  };
  const sup = (id)=>{
    const test = list.filter((item)=>item.id !== id)
    setList(test)
    console.log(test)
  }
  // console.log(input)
  return (
    <div className="App">
      <Todo handleInput={handleInput} handleClick={handleClick} />
      <Liste list={list} sup={sup} />
    </div>
  );
}

export default App;
