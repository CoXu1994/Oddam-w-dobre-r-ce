function Part1({setType}) {
    return (
        <div className="giveAway__form__content">
            <span className="giveAway__form__steps">Krok 1/4</span>
            <h2 className="giveAway__form__title">Zaznacz co chcesz oddać :</h2>

            <form className="giveAway__form__box">
                <div>
                    <input type="radio" id="clothes__usable" name="things" value="Ubrania w dobrym stanie" onClick={(e) => setType(e.target.value)}/>
                    <label  className="giveAway__form__label" htmlFor="clothes__usable">Ubrania, które nadają się do ponownego użycia</label>
                </div>
                <div>
                    <input type="radio" id="clothes__throwAway" name="things" value="Ubrania w złym stanie" onClick={(e) => setType(e.target.value)}/>
                    <label className="giveAway__form__label" htmlFor="clothes__throwAway">Ubrania, do wyrzucenia</label>
                </div>
                <div>
                    <input type="radio" id="toys" name="things" value="zabawki" onClick={(e) => setType(e.target.value)}/>
                    <label className="giveAway__form__label" htmlFor="toys">Zabawki</label>
                </div>
                <div>
                    <input type="radio" id="books" name="things" value="książki" onClick={(e) => setType(e.target.value)}/>
                    <label className="giveAway__form__label" htmlFor="books">Książki</label>
                </div>
                <div>
                    <input type="radio" id="other" name="things" value="inne" onClick={(e) => setType(e.target.value)}/>
                    <label className="giveAway__form__label" htmlFor="other">Inne</label>
                </div>   
            </form>
        </div>
    )
}

export default Part1;