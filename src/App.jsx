import {annonces, categories, regions, users} from './assets/Data'
import { createContext , useState} from 'react'
import './App.css'
import Diffuser from './components/Diffuser.jsx'
import Annonce from './components/Annonce.jsx'
import Sidebar from './components/Sidebar.jsx'
import AnnonceTable from './components/AnnonceTable.jsx'



export const dataContext =createContext(annonces, categories, regions, users)

function App() {
  const [annAdded,setAnnAdded]=useState(annonces)


  return (

    <dataContext.Provider value={{annonces, categories, regions, users,annAdded,setAnnAdded}}>
      <Sidebar />
      <Diffuser />
      <AnnonceTable />
      <Annonce />
    </dataContext.Provider>
  )
}

export default App