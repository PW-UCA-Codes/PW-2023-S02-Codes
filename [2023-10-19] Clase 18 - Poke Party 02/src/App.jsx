import { useState, useEffect } from "react";
import { fetchPokemons, getPartyFromLS, savePartyInLS } from "./services/pokemon.service";

import PokeParty from "./components/PokeParty/PokeParty";
import PokeResults from "./components/PokeResults/PokeResults";

const LIMIT = 151;

function App() {
  const [party, setParty] = useState(getPartyFromLS());
  const [currentResults, setCurrentResults] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(()=> {
    const _fetch = async () => {
      const _results = await fetchPokemons({ limit: LIMIT, offset: offset });
      setCurrentResults(_results);
    }

    _fetch();
  }, [offset]);

  useEffect(() => {
    savePartyInLS(party);
  }, [party]);

  const onChangePageHandler = (_size=0) => {
    let _offset = offset + _size;

    if(_offset < 0) {
      _offset = 0;
    }

    setOffset(_offset);
  }

  const onAddPokemonHandler = (_p) => {
    let _party = [...party, _p];

    if(_party.length > 6){
      _party = _party.slice(1);
    }

    setParty(_party);
  }

  return (
    <>
      {/* PokeParty */}
      <PokeParty 
        list={ party }/>

      {/* Resultados */}
      <PokeResults
        onNext={()=> { onChangePageHandler(LIMIT) }} 
        onPrev={()=> { onChangePageHandler(-LIMIT) }}
        onAddToParty={(_p) => { onAddPokemonHandler(_p) }} 
        results={ currentResults }/>
    </>
  )
}

export default App
