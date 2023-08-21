function Part2({setBags, bags}) {
    
    return (
        <div className="giveAway__form__content">
            <span className="giveAway__form__steps"> Krok 2/4 </span>
            <h2 className="giveAway__form__title"> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h2>

            <form className="giveAway__form__box">
                <div className="select__box">
                    <label  className="giveAway__form__label__select" htmlFor="bags"> Liczba 60l worków: </label>
                    <select 
                        name="bags" 
                        id="bags" 
                        onChange={(e) => setBags(e.target.value)} 
                        defaultValue={bags != "" ? bags : "0"} 
                    >
                        <option className="default" value="0"> — wybierz — </option>
                        <option value="1" > 1 </option>
                        <option value="2" > 2 </option>
                        <option value="3" > 3 </option>
                        <option value="4" > 4 </option>
                        <option value="5" > 5 </option>
                    </select>   
                </div>
            </form>
        </div>
    )
}

export default Part2;