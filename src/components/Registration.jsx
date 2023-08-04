import Navigation from './Navigation';
import { Link } from 'react-router-dom';


function Registration() {
    return(
        <div className="container">
            <Navigation />
            <section className="log">
                <h2 className="log__title">Załóż konto</h2>
                <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
                <form className="form log__form">
                    <div className="form__box">
                        <label className="form__label" htmlFor="email">Email</label>
                        <input className="form__input" type="email" id="email" name="email" />
                    </div>
                    <div className="form__box">
                        <label className="form__label" htmlFor="pass">Hasło</label>
                        <input className="form__input" type="password" id="pass" name="pass" />
                    </div>
                    <div className="form__box">
                        <label className="form__label" htmlFor="pass">Powtórz Hasło</label>
                        <input className="form__input" type="password" id="pass" name="pass" />
                    </div>
                    
                </form>
                <div className="log__options">
                <Link className="link" to="/logowanie" >
                    <button className="main__btn" >Zaloguj się</button>
                </Link>
                    <button className="main__btn" >Załóż konto</button>
                </div>
            </section>
        </div>
    )
}

export default Registration;