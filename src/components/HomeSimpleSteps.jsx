import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import icon_1 from "../assets/Icon-1.svg";
import icon_2 from "../assets/Icon-2.svg";
import icon_3 from "../assets/Icon-3.svg";
import icon_4 from "../assets/Icon-4.svg";

function HomeSimpleSteps() {
    return (
        <section className="simpleSteps" id="steps">
            <h2 className="simpleSteps__title"> Wystarczą 4 proste kroki </h2>
            <img className="decoration" src={decoration} alt="decoration" />
            <div className="simpleSteps__box">
                <div className="step__box">
                    <img className="step__image" src={icon_1} alt="icon"/>
                    <span className="step__title"> Wybierz rzeczy </span>
                    <span className="step__text"> ubrania, zabawki, sprzęt i inne </span>
                </div> 
                <div className="step__box">
                    <img className="step__image" src={icon_2} alt="icon"/>
                    <span className="step__title"> Spakuj się </span>
                    <span className="step__text"> 
                        skorzystaj z 
                        <br></br> 
                        worków na śmieci 
                    </span>
                </div> 
                <div className="step__box">
                    <img className="step__image" src={icon_3} alt="icon"/>
                    <span className="step__title"> Zdecyduj komu chcesz pomóc </span>
                    <span className="step__text"> wybierz zaufane miejsce </span>
                </div> 
                <div className="step__box">
                    <img className="step__image" src={icon_4} alt="icon"/>
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