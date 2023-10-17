const PokeStat = ({ label="", actual=0, max=255 }) => {
    return (
        <div className="relative w-full h-6 bg-[#ffffff99]">
            
            <div style={{ width: `${(actual/max)*100}%` }} 
                className="left-0 top-0 h-6 absolute bg-white"/>

            <h4 className="absolute w-full px-4"> 
                {label.toUpperCase()}: {actual}/{max} 
            </h4>
        </div>
    );
}

export default PokeStat;