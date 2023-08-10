function Part1() {
    return (
        <div className="giveAway__form__content">
            <span className="giveAway__form__steps">Krok 1/4</span>
            <h2 className="giveAway__form__title">Zaznacz co chcesz oddać :</h2>

            <form className="giveAway__form__box">
                <div>
                    <input type="radio" id="clothes__usable" name="clothes__usable" value="usableClothes" />
                    <label  className="giveAway__form__label" for="clothes__usable">Ubrania, które nadają się do ponownego użycia</label>
                </div>
                <div>
                    <input type="radio" id="clothes__throwAway" name="clothes__throwAway" value="throwAwayClothes" />
                    <label className="giveAway__form__label" for="clothes__throwAway">Ubrania, do wyrzucenia</label>
                </div>
                <div>
                    <input type="radio" id="toys" name="toys" value="toys" />
                    <label className="giveAway__form__label" for="toys">Zabawki</label>
                </div>
                <div>
                    <input type="radio" id="books" name="books" value="books" />
                    <label className="giveAway__form__label" for="books">Książki</label>
                </div>
                <div>
                    <input type="radio" id="other" name="other" value="other" />
                    <label className="giveAway__form__label" for="other">Inne</label>
                </div>   
            </form>
        </div>
    )
}

export default Part1;