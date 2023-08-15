function Part1({setType}) {
    return (
        <div className="giveAway__form__content">
            <span className="giveAway__form__steps">Krok 1/4</span>
            <h2 className="giveAway__form__title">Zaznacz co chcesz oddać :</h2>

            <form className="giveAway__form__box">

                    <label  className="giveAway__form__label custom" htmlFor="clothes__usable"> 
                        <input
                            className="checkbox" 
                            type="radio" 
                            id="clothes__usable" 
                            name="things"
                            value="Ubrania w dobrym stanie" 
                            onClick={(e) => setType(e.target.value)}
                        />
                        <span className="checkbox__custom"/>
                        ubrania, które nadają się do ponownego użycia
                    </label>

                    <label className="giveAway__form__label custom" htmlFor="clothes__throwAway">
                        <input 
                            className="checkbox"
                            type="radio" 
                            id="clothes__throwAway" 
                            name="things" 
                            value="Ubrania w złym stanie" 
                            onClick={(e) => setType(e.target.value)}
                        />
                        <span className="checkbox__custom"/>
                        ubrania, do wyrzucenia
                    </label>

                    <label className="giveAway__form__label custom" htmlFor="toys">
                        <input
                            className="checkbox" 
                            type="radio" 
                            id="toys" 
                            name="things" 
                            value="zabawki" 
                            onClick={(e) => setType(e.target.value)}
                        />
                        <span className="checkbox__custom"/>
                        zabawki
                    </label>

                    <label className="giveAway__form__label custom" htmlFor="books">
                        <input 
                            className="checkbox"
                            type="radio" 
                            id="books" 
                            name="things" 
                            value="książki"
                            onClick={(e) => setType(e.target.value)}
                        />
                        <span className="checkbox__custom"/>
                        książki
                    </label>

                    <label className="giveAway__form__label custom" htmlFor="other">
                        <input
                            className="checkbox" 
                            type="radio" 
                            id="other" 
                            name="things"
                            value="inne" 
                            onClick={(e) => setType(e.target.value)}
                        />
                        <span className="checkbox__custom" />
                        inne
                    </label> 
            </form>
        </div>
    )
}

export default Part1;