import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg"

function HomeMainSection() {
    return (
        <section className="main" id="main">
            <div className="main__image"></div>
            <div className="main__box">
                <h2 className="box__title">Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img className="decoration" src={decoration} alt="decoration" />
                <div className="box__buttons">

                    <Link className="link" to="/logowanie">
                        <button className="main__btn">
                            <span className="btn__text">
                                ODDAJ RZECZY
                            </span>
                        </button>
                    </Link>

                    <Link className="link" to="/logowanie" >
                        <button className="main__btn">
                            <span className="btn__text">
                                ZORGANIZUJ ZBIÓRKĘ
                            </span>
                        </button>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}

export default HomeMainSection;