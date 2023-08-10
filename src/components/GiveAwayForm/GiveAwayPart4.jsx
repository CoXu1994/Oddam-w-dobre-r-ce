function Part4() {
    return (
        <div className="giveAway__form__content">
            <span className="giveAway__form__steps">Krok 4/4</span>
            <h2 className="giveAway__form__title">Podaj adres oraz termin odbioru rzecz przez kuriera</h2>

            <form className="giveAway__form__box">
                <div className="formContainer">
                    <div>
                        <span className="address__title">Adres odbioru: </span>
                        <div className="address">
                            <div className="address__row">
                                <label HtmlFor="street">Ulica</label>
                                <input type="text" id="street" name="street"/>               
                            </div>
                            <div className="address__row">
                                <label HtmlFor="city">Miasto</label>
                                <input type="city" id="city" name="city"/>
                            </div>
                            <div className="address__row">
                                <label  htmlFor="postCode">Kod pocztowy</label>
                                <input type="text" id="postCode" name="postCode" />       
                            </div>
                            <div className="address__row">
                                <label htmlFor="phone">Numer telefonu</label>
                                <input type="text" id="phone" name="phone" />
                            </div>
                        </div>
    
                        <div className="date">
                            <span className="date__title">Termin odbioru: </span>
                            <div className="date__row">
                                <label HtmlFor="date">Data</label>
                                <input type="date" id="date" name="date" min="2018-01-01" max="2018-12-31" />    
                            </div>
                            <div className="date__row">
                                <label HtmlFor="time">Godzina</label>
                                <input type="time" id="time" name="time" min="09:00" max="18:00" required />
                            </div>
                            <div className="date__row">
                                <label  htmlFor="note">Uwagi dla kuriera</label>
                                <textarea className="note" id="note" name="note" rows="4" cols="50"></textarea>     
                            </div>
                        </div>
                    </div>
                </div>  
            </form>
        </div>
    )
}

export default Part4;