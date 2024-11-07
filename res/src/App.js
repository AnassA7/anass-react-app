import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'
import List from './assets/Data'
import Resulte from './components/Resulte';

function App() {
  const [notes, setNotes] = useState(List);
  const [show,setShow] = useState(true)
  const handleChange = (e, index, num) => {
    const updatedNotes = [...notes];
    updatedNotes[index][num] = e.target.value;
    setNotes(updatedNotes);
    console.log(updatedNotes)
  };
  const handleClick = () => {
    setShow(!show)
  };


  return (
    <>
      <Notes list={List} handleChange={handleChange} handleClick={handleClick} show={show} />
      <Resulte notes={notes} show={show} hadleClick={handleClick} />
    </>
  )
}

export default App