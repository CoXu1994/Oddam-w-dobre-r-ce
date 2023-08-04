import { Link } from "react-router-dom";

function HomeSimpleSteps() {
    return (
        <section className="simpleSteps" id="steps">
            <h2 className="simpleSteps__title"> Wystarczą 4 proste kroki </h2>
            <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
            <div className="simpleSteps__box">
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-1.svg" alt="icon"/>
                    <span className="step__title"> Wybierz rzeczy </span>
                    <span className="step__text"> ubrania, zabawki, sprzęt i inne </span>
                </div> 
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-2.svg" alt="icon"/>
                    <span className="step__title"> Spakuj się </span>
                    <span className="step__text"> 
                        skorzystaj z 
                        <br></br> 
                        worków na śmieci 
                    </span>
                </div> 
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-3.svg" alt="icon"/>
                    <span className="step__title"> Zdecyduj komu chcesz pomóc </span>
                    <span className="step__text"> wybierz zaufane miejsce </span>
                </div> 
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-4.svg" alt="icon"/>
                    <span className="step__title"> Zamów kuriera </span>
                    <span className="step__text"> 
                        kurier przyjedzie 
                        <br></br>
                         w dowolnym terminie 
                    </span>
                </div> 
            </div>
            <Link className="link" to="/logowanie">
                <button className="main__btn">
                    <span className="btn__text"> ODDAJ RZECZY </span>
                </button>
            </Link>
        </section>
    )
}

export default HomeSimpleSteps;