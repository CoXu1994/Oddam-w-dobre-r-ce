import decoration from "../../assets/Decoration.svg";


function Part6() {
    return (
        <div className="giveAway__finish">
            <span className="finish__text">Dziękujemy za przesłanie formularza</span>
            <span className="finish__text second__line">
                Na maila prześlemy wszelkie informacje o odbiorze.
            </span>
            <img src={decoration} alt="decoration"/>
        </div>
    )
}

export default Part6;