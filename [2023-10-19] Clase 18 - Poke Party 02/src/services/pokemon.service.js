import axios from "axios";
const PARTYKEY = "pokeparty";

export const savePartyInLS = (party = []) => localStorage.setItem(PARTYKEY, JSON.stringify(party));
export const getPartyFromLS = () => JSON.parse(localStorage.getItem(PARTYKEY)) || [];

export const fetchPokemons = async ({ limit=20, offset=0 } = {}) => {
    try {
        const params = new URLSearchParams({ limit, offset });
        const { data } = await axios.get(`/pokemon?${params.toString()}`);

        const _results = data.results;
        const pokePromises = _results.map(async ({ name })=> {
            return await fetchPokemon(name);
        } );

        return await Promise.all(pokePromises);
        
    } catch (error) {
        return [];
    }
}

export const fetchPokemon = async (search = "") => {
  try {
    const { data } = await axios.get(`/pokemon/${search}`);
    return castResponseToPokemon(data);
  } catch (error) {
    return null;
  }
};

const castResponseToPokemon = (_r) => {
  return {
    name: _r.name,
    index: _r.id,
    height: _r.height,
    weight: _r.weight,
    sprite: _r.sprites.front_default,
    types: _r.types.map((_t) => _t.type.name),
    stats: _r.stats.map((_s) => {
      return {
        stat: _s.base_stat,
        name: getStatNameFromText(_s.stat.name),
      };
    }),
  };
};

const getStatNameFromText = (text) => {
  let stats = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "s-atk",
    "special-defense": "s-def",
    speed: "spd",
  };

  return stats[text] || "ns";
};

export const getColorFromType = (type) => {
  let _colors = {
    normal: "#212121",
    fighting: "#c62828",
    flying: "#0277bd",
    poison: "#6a1b9a",
    ground: "#3e2723",
    rock: "#616161",
    bug: "#827717",
    ghost: "#12005e",
    steel: "#37474f",
    fire: "#bf360c",
    water: "#1a237e",
    grass: "#1b5e20",
    electric: "#fbc02d",
    psychic: "#c2185b",
    ice: "#4fc3f7",
    dragon: "#0d47a1",
    dark: "#000000",
    fairy: "#9e00c5",
  };

  return _colors[type] || "#263859";
};
