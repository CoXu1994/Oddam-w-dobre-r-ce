import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <section className= "nav">
            <div className= "nav__Log">
                <button className= "btn">Zaloguj</button>
                <button className= "btn">Załóż konto</button>
            </div>
            <ul className= "nav__menu">
                <li className="nav__menu__item"><Link className= "link" to="/">Start</Link></li>
                <li className="nav__menu__item"><Link className= "link" to="/">O co chodzi?</Link></li>
                <li className="nav__menu__item"><Link className= "link" to="/">O nas</Link></li>
                <li className="nav__menu__item"><Link className= "link" to="/">Fundacja i organizacje</Link></li>
                <li className="nav__menu__item"><Link className= "link" to="/">Kontakt</Link></li>
            </ul>
        </section>
    )
}

export default Navigation;