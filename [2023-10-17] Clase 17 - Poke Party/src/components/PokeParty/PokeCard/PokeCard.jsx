import PokeStat from "./PokeStat/PokeStat";

const PokeCard = ({ pokemon={} }) => {

    return (
        <article style={{ backgroundColor: getColorFromType(pokemon.types[0]) }} className="p-2 flex gap-2 rounded-md">
            <figure className="w-24 flex flex-col justify-center">
                {/* <img src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png" alt="Sprite"/> */}
                <img src={pokemon.sprite} alt={`${pokemon.name} Sprite`}/>
            </figure>

            <div className="flex-1 p-2 flex flex-col gap-2">
                <h3 className="text-white font-bold capitalize"> 
                    {pokemon.index.toString().padStart(4, "0")} - {pokemon.name}
                </h3>

                {
                    pokemon.stats.map((_s) => {
                        return (
                            <PokeStat key={`${pokemon.index}-${_s.name}`} label={_s.name} actual={_s.stat} />
                        );
                    })
                }
            </div>
        </article>
    );
}

const getColorFromType = (type) => {
    let _colors = {
        "normal": "#212121",
        "fighting": "#c62828",
        "flying": "#0277bd",
        "poison": "#6a1b9a",
        "ground": "#3e2723",
        "rock": "#616161",
        "bug": "#827717",
        "ghost": "#12005e",
        "steel": "#37474f",
        "fire": "#bf360c",
        "water": "#1a237e",
        "grass": "#1b5e20",
        "electric": "#fbc02d",
        "psychic": "#c2185b",
        "ice": "#4fc3f7",
        "dragon": "#0d47a1",
        "dark": "#000000",
        "fairy": "#9e00c5",
    }

    return _colors[type] || "#263859";
}

export default PokeCard;