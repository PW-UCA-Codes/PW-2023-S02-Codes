import { useState } from "react";

import POKEPARTY from './assets/json/pokeparty.example.json';
import POKELIST from './assets/json/pokelist.example.json';

import PokeParty from "./components/PokeParty/PokeParty";
import PokeResults from "./components/PokeResults/PokeResults";

function App() {
  const [party, setParty] = useState(POKEPARTY);
  const [currentResults, setCurrentResults] = useState(POKELIST);

  return (
    <>
      {/* PokeParty */}
      <PokeParty 
        list={ party }/>

      {/* Resultados */}
      <PokeResults 
        results={ currentResults }/>
    </>
  )
}

export default App
