import { useState } from "react";

function Part3({setLocalization, setHelpGroups}) {
    
    function handleHelpGroup(e) {
        setHelpGroups(prevList => {
            if (!prevList.includes(e.target.value)) {
                return [...prevList, e.target.value];
            } else {
                return prevList.filter(item => item !== e.target.value);
            }
        });
    }

    return (
        <>
            
            <div className="giveAway__form__content">
                <span className="giveAway__form__steps">Krok 3/4</span>
                <h2 className="giveAway__form__title">Lokalizacja: </h2>

                <form className="giveAway__form__box">
                    <div>
                        <select name="localization" id="localization" onChange={(e) => setLocalization(e.target.value)}>
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
                            <input type="checkbox" id="children" name="helpGroups" value="dzieciom" onClick={(e) => handleHelpGroup(e)}/>
                            <label htmlFor="children">dzieciom</label>
                        </div> 
                        <div>
                            <input type="checkbox" id="singleMother" name="helpGroups" value="samotnym matkom" onClick={(e) => handleHelpGroup(e)}/>
                            <label htmlFor="singleMother">Samotnym matkom</label>
                        </div>    
                        <div>
                            <input type="checkbox" id="homeless" name="helpGroups" value="bezdomnym" onClick={(e) => handleHelpGroup(e)}/>
                            <label htmlFor="homeless">Bezdomnym</label>
                        </div>    
                        <div>
                            <input type="checkbox" id="disabled" name="helpGroups"value="niepełnosprawnym" onClick={(e) => handleHelpGroup(e)}/>
                            <label htmlFor="disabled">Niepełnosprawnym</label>
                        </div>    
                        <div>
                            <input type="checkbox" id="elder" name="helpGroups" value="osobom starszym" onClick={(e) => handleHelpGroup(e)}/>
                            <label htmlFor="elder">Osobom starszym</label>
                        </div>        
                    </div>

                    <div>
                        <div className="specific">
                            <label htmlFor="LokalizationSpecific">{`Wpisz nazwę konkretnej organizacji(opcjonalne)`}</label>
                            <input type="text" name="localizationSpecific" id="lokalizationSpecific"  onChange={(e) => setLocalization(e.target.value)}/>
                        </div>
                    </div>
                            
                </form>
            </div>
        </>
    )
}

export default Part3;