import PokeCard from "./PokeCard/PokeCard";

const PokeParty = ({ list= [] }) => {
    const pokeList = list.map(_p => {
        return (
            <PokeCard key={`${_p.index}-card`} pokemon={_p}/>
        );
    });

    return (
        <section className="p-4 flex justify-center items-center">
            <div className="w-full grid grid-cols-3 gap-2">
            { pokeList }
            </div>
        </section>
    );
}

export default PokeParty;