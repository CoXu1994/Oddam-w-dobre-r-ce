
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
                    <div className="select__">
                        <select name="localization" id="localization" onChange={(e) => setLocalization(e.target.value)}>
                            <option value="" className="default"> — wybierz — </option>
                            <option value="poznan">Poznań</option>
                            <option value="warsaw">Warszawa</option>
                            <option value="cracow">Kraków</option>
                            <option value="wroclaw">Wrocław</option>
                            <option value="katowice">Katowice</option>
                        </select>   
                    </div>
                    <h3 className="reciver__title"> Komu chcesz pomagać ? </h3>
                    <div className="reciver">    
                            <input
                                className="checkbox" 
                                type="checkbox" 
                                id="children" 
                                name="helpGroups" 
                                value="dzieciom" 
                                onClick={(e) => handleHelpGroup(e)}
                            />
                            <label className="label__button" htmlFor="children"> dzieciom </label>
                        
                            <input
                                className="checkbox" 
                                type="checkbox" 
                                id="singleMother" 
                                name="helpGroups" 
                                value="samotnym matkom" 
                                onClick={(e) => handleHelpGroup(e)}
                            />
                            <label className="label__button" htmlFor="singleMother"> samotnym matkom </label>
                        
                            <input 
                                className="checkbox"
                                type="checkbox" 
                                id="homeless" 
                                name="helpGroups" 
                                value="bezdomnym" 
                                onClick={(e) => handleHelpGroup(e)}
                            />
                            <label className="label__button" htmlFor="homeless"> bezdomnym </label>
                                 
                            <input 
                                className="checkbox"
                                type="checkbox" 
                                id="disabled" 
                                name="helpGroups"
                                value="niepełnosprawnym" 
                                onClick={(e) => handleHelpGroup(e)}
                            /> 
                            <label className="label__button" htmlFor="disabled"> niepełnosprawnym </label>
                        
                            <input 
                                className="checkbox"
                                type="checkbox" 
                                id="elder" 
                                name="helpGroups" 
                                value="osobom starszym"
                                onClick={(e) => handleHelpGroup(e)}
                            />
                            <label className="label__button" htmlFor="elder"> osobom starszym </label>         
                    </div>

                    <div className="specific">
                        <label 
                            className="specific__label" 
                            htmlFor="LokalizationSpecific"
                        >
                            {`Wpisz nazwę konkretnej organizacji(opcjonalne)`}
                        </label>
                        <input
                            className="specific__input" 
                            type="text" 
                            name="localizationSpecific" 
                            id="lokalizationSpecific"  
                            onChange={(e) => setLocalization(e.target.value)}
                        />
                    </div>
                    
                            
                </form>
            </div>
        </>
    )
}

export default Part3;