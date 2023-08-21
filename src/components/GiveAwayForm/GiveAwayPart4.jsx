function Part4(props) {
    const {
        setStreet, 
        setCity, 
        setPostCode, 
        setPhone, 
        setDate, 
        setTime, 
        setNote,
        street,
        city,
        postCode,
        phone,
        date,
        time,
        note
    } = props;

    return (
        <div className="giveAway__form__content">
            <span className="giveAway__form__steps"> Krok 4/4 </span>
            <h2 className="giveAway__form__title"> Podaj adres oraz termin odbioru rzecz przez kuriera </h2>

            <form className="giveAway__form__box">
                <div className="formContainer">
                    <div>
                        <span className="address__title"> Adres odbioru: </span>
                        <div className="address">
                            <div className="address__row">
                                <label htmlFor="street"> Ulica </label>
                                <input 
                                    type="text" 
                                    id="street" 
                                    name="street" 
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    
                                />               
                            </div>
                            <div className="address__row">
                                <label htmlFor="city"> Miasto </label>
                                <input 
                                    type="city" 
                                    id="city" 
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}/>
                            </div>
                            <div className="address__row">
                                <label htmlFor="postCode"> Kod pocztowy </label>
                                <input 
                                    type="text" 
                                    id="postCode" 
                                    name="postCode" 
                                    value={postCode}
                                    onChange={(e) => setPostCode(e.target.value)}/>       
                            </div>
                            <div className="address__row">
                                <label htmlFor="phone"> Numer telefonu </label>
                                <input 
                                    type="text" 
                                    id="phone" 
                                    name="phone" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="date__title"> Termin odbioru: </span>
                        <div className="date">  
                            <div className="date__row">
                                <label htmlFor="date">Data</label>
                                <input 
                                    type="date" 
                                    id="date" 
                                    name="date" 
                                    min="2023-08-11"
                                    max="2032-01-01" 
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}/>    
                            </div>
                            <div className="date__row">
                                <label htmlFor="time">Godzina</label>
                                <input 
                                    type="time" 
                                    id="time" 
                                    name="time"
                                    min="00:00" 
                                    max="24:00" 
                                    value={time} 
                                    onChange={(e) => setTime(e.target.value)}/>
                            </div>
                            <div className="date__row">
                                <label  htmlFor="note">
                                    <span> Uwagi </span>
                                    <span> dla kuriera </span>
                                </label>
                                <textarea 
                                    className="note" 
                                    id="note" 
                                    name="note" 
                                    rows="4" 
                                    cols="50" 
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                ></textarea>     
                            </div>
                        </div>
                    </div>
                </div>  
            </form>
        </div>
    )
}

export default Part4;