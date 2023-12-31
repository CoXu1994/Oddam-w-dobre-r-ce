function Part5_Summary( props ) {
    const {
        type, 
        bags, 
        localization, 
        helpGroups, 
        street, 
        city, 
        postCode,
        phone,
        date,
        time,
        note
    } = props;

    let displayPostCode = postCode;
    let displayPhone = phone;
    
    if (postCode.includes("-")){
        displayPostCode = postCode.replace("-", "")
    }
    if (phone.includes("-")){
        displayPhone = phone.replaceAll("-", "")
    }
    return (
        <div className="giveAway__summary">
            <h2 className="summary__title"> Podsumowanie twojej darowizny </h2>
            <div className="summary__group">
                <h3 className="summary__header"> Oddajesz: </h3>
                
                <span className="summary__text">{bags} {bags > 1 ? "worki" : "worek"}, {type}, {helpGroups.join(", ")}</span>
                <span className="summary__text"> dla lokalizacji: {localization}</span>
            </div>
            <div className="summary__bigGroup">
                <div className="summary__group">
                    <h3 className="summary__header"> Adress odbioru: </h3>
                    <div className="summary__box">
                        <div>
                            <span className="summary__text key"> Ulica </span>
                            <span className="summary__text key"> Miasto </span>
                            <span className="summary__text key"> Kod pocztowy </span> 
                            <span className="summary__text key"> Numer telefonu </span> 
                        </div>
                        <div>
                            <span className="summary__text">{street}</span>
                            <span className="summary__text">{city}</span>
                            <span className="summary__text post">
                                {`${displayPostCode.substring(0,2)}-${displayPostCode.substring(2,5)}`}
                            </span>
                            <span className="summary__text phone">
                                {`${displayPhone.substring(0,3)}-${displayPhone.substring(3,6)}-${displayPhone.substring(6,9)}`}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="summary__group">
                    <h3 className="summary__header"> Termin odbioru: </h3>
                    <div className="summary__box">
                        <div>
                            <span className="summary__text key"> Data </span>
                            <span className="summary__text key"> Godzina </span>
                            <span className="summary__text key"> Uwagi dla kuriera </span>
                        </div>
                        <div>
                            <span className="summary__text">{date}</span>
                            <span className="summary__text">{time}</span>
                            <span className="summary__text">{note}</span>
                        </div>
                        
                    </div>
                </div>
            </div>      
        </div>
    )
}


export default Part5_Summary;