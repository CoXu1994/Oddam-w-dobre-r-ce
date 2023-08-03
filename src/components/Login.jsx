import Navigation from "./Navigation";

function LogIn() {
    return (
        <div className="container">
            <Navigation />
            <section className="log">
                <h2 className="log__title">Zaloguj się</h2>
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
                    
                </form>
                <div className="log__options">
                <button className="main__btn" >Załóż konto</button>
                <button className="main__btn" >Zaloguj się</button>
                </div>
            </section>
        </div>
    )
}

export default LogIn;