import Navigation from './Navigation';

function LogOut() {
    return (
        <div className="container">
            <Navigation />
            <section className="log">
                <h2 className="log__title">Wylogowanie nastąpiło pomyślnie!</h2>
                <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
                <div className="log__options">
                    <button className="main__btn" >Strona główna</button>
                </div>
            </section>
        </div>
    )
}

export default LogOut;