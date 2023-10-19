import PokeStat from "./PokeStat/PokeStat";

import { getColorFromType } from '../../../services/pokemon.service';

const PokeCard = ({ pokemon={} }) => {

    return (
        <article style={{ backgroundColor: getColorFromType(pokemon.types[0]) }} className="p-2 flex gap-1 rounded-xl">
            <figure className="w-24 flex flex-col justify-center rounded-full bg-[#ffffff88]">
                {/* <img src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png" alt="Sprite"/> */}
                <img src={pokemon.sprite} alt={`${pokemon.name} Sprite`}/>
            </figure>

            <div className="flex-1 p-1 flex flex-col gap-1">
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

export default PokeCard;