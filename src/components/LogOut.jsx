import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import decoration from "../assets/Decoration.svg";
function LogOut() {
    return (
        <div className="container">
            <Navigation />
            <section className="log">
                <h2 className="log__title"> Wylogowanie nastąpiło pomyślnie! </h2>
                <img className="decoration" src={decoration} alt="decoration" />
                <div className="log__options">
                <Link className="link" to="/" >
                    <button className="btn__main" > Strona główna </button>
                </Link>
                </div>
            </section>
        </div>
    )
}

export default LogOut;