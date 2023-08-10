function Part3() {
    return (
        <div className="giveAway__form__content">
            <span className="giveAway__form__steps">Krok 3/4</span>
            <h2 className="giveAway__form__title">Lokalizacja: </h2>

            <form className="giveAway__form__box">
                <div>
                    <select name="localization" id="localization">
                        <option value=""> - Wybierz - </option>
                        <option value="poznan">Poznań</option>
                        <option value="warsaw">Warszawa</option>
                        <option value="cracow">Kraków</option>
                        <option value="wroclaw">Wrocław</option>
                        <option value="katowice">Katowice</option>
                    </select>   
                </div>

                <div className="reciver">
                    <div>
                        <input type="checkbox" id="children" name="helpGroups"/>
                        <label for="children">dzieciom</label>
                    </div> 
                    <div>
                        <input type="checkbox" id="singleMother" name="helpGroups"/>
                        <label for="singleMother">Samotnym matkom</label>
                    </div>    
                    <div>
                        <input type="checkbox" id="homeless" name="helpGroups"/>
                        <label for="homeless">Bezdomnym</label>
                    </div>    
                    <div>
                        <input type="checkbox" id="disabled" name="helpGroups"/>
                        <label for="disabled">Niepełnosprawnym</label>
                    </div>    
                    <div>
                        <input type="checkbox" id="elder" name="helpGroups"/>
                        <label for="elder">Osobom starszym</label>
                    </div>        
                </div>

                <div>
                    <div className="specific">
                        <label htmlFor="LokalizationSpecific">{`Wpisz nazwę konkretnej organizacji(opcjonalne)`}</label>
                        <input type="text" name="localizationSpecific" id="lokalizationSpecific" />
                    </div>
                </div>
                        
            </form>
        </div>
    )
}

export default Part3;