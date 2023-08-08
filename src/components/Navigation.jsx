import { Link } from 'react-router-dom';
import * as Scroll from "react-scroll";
import { signOut } from "firebase/auth";
import auth from "../firebase";
function Navigation({currentUser, setCurrentUser}) {  
    console.log(currentUser)
    return (
        <section className= "nav">
            <div className= "nav__log">
                {!currentUser ? (
                    <>
                        <Link to= "/logowanie" >
                            <button className= "btn__login" > Zaloguj </button>
                        </Link>
                        <Link to= "/rejestracja" >
                            <button className= "btn__login" > Załóż konto </button>
                        </Link>
                    </>
                ): (
                    <>
                        <div className="nav__user">Witaj! :</div>
                        <button className= "btn__login"> Oddaj rzeczy </button>
                        <Link to= "/wylogowano" >
                            <button className= "btn__login" onClick = {signOut(auth)
}> Wyloguj </button>
                        </Link>
                    </>
                )}
                
                
            </div>
            <ul className= "nav__menu">
                <Scroll.Link 
                        className= "link" 
                        to="main" 
                        activeClass="active" 
                        spy={true} 
                        smooth={true} 
                        offset={200} 
                        duration={500} 
                >
                    <li className="nav__menu__item"> Start </li>
                </Scroll.Link>
                
                <Scroll.Link 
                    className= "link" 
                    to="steps" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                >
                    <li className="nav__menu__item"> O co chodzi? </li>
                </Scroll.Link>
                
                <Scroll.Link 
                    className= "link" 
                    to="about" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                >
                    <li className="nav__menu__item"> O nas </li>
                </Scroll.Link>
               
                <Scroll.Link 
                    className= "link" 
                    to="help" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                >
                    <li className="nav__menu__item"> Fundacje i Organizacje </li>
                </Scroll.Link>
            
                <Scroll.Link 
                    className= "link" 
                    to="contact" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={10} 
                    duration={500} 
                >
                    <li className="nav__menu__item"> Kontakt </li>
                </Scroll.Link>
                
            </ul>
        </section>
    )
}

export default Navigation;