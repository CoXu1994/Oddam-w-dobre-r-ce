import Navigation from "./Navigation";
import HomeContact from "./HomeContact";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

function GiveAwayThings() {
    return (
            <div className="container">
                <Navigation />

                <section className="main" id="main">
                    <div className="main__image giveAway"></div>
                    <div className="main__box">
                        <h2 className="box__title giveAway"> Oddaj rzeczy, których nie chcesz <br></br>POTRZEBUJĄCYM</h2>
                        <img className="decoration" src={decoration} alt="decoration" />
                        <span className="giveAway__title"> Wystarczą 4 proste kroki: </span>
                        <div className="giveAway__steps">
                            <div className="giveAway__step">
                                <div className="giveAway__box">
                                    <span className="giveAway__number">1</span>
                                    <span className="giveAway__text">Wybierz rzeczy</span>
                                </div>
                            </div>
                            <div className="giveAway__step">
                                <div className="giveAway__box">
                                    <span className="giveAway__number">2</span>
                                    <span className="giveAway__text">Spakuj je w worki</span>
                                </div>
                            </div>
                            <div className="giveAway__step">
                                <div className="giveAway__box">
                                    <span className="giveAway__number">3</span>
                                    <span className="giveAway__text">Wybierz fundacje</span>
                                </div>
                            </div>
                            <div className="giveAway__step">
                                <div className="giveAway__box">
                                    <span className="giveAway__number">4</span>
                                    <span className="giveAway__text">Zamów kuriera</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>

                <section className="orangeBar">
                    <div className="orangeBar__content">
                        <span className="orangeBar__title">Ważne</span>
                        <p className="orangeBar__text">
                            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. 
                            Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
                        </p>

                    </div>
                </section>

                <section className="giveAway__form">
                    <div className="giveAway__form__content dnone">
                        <span className="giveAway__form__steps">Krok 1/4</span>
                        <h2 className="giveAway__form__title">Zaznacz co chcesz oddać :</h2>
                        <form className="giveAway__form__box">
                            <div>
                                <input type="radio" id="clothes__usable" name="clothes__usable" value="usableClothes" />
                                <label  className="giveAway__form__label" for="clothes__usable">Ubrania, które nadają się do ponownego użycia</label>
                            </div>
                            <div>
                                <input type="radio" id="clothes__throwAway" name="clothes__throwAway" value="throwAwayClothes" />
                                <label className="giveAway__form__label" for="clothes__throwAway">Ubrania, do wyrzucenia</label>
                            </div>
                            <div>
                                <input type="radio" id="toys" name="toys" value="toys" />
                                <label className="giveAway__form__label" for="toys">Zabawki</label>
                            </div>
                            <div>
                                <input type="radio" id="books" name="books" value="books" />
                                <label className="giveAway__form__label" for="books">Książki</label>
                            </div>
                            <div>
                                <input type="radio" id="other" name="other" value="other" />
                                <label className="giveAway__form__label" for="other">Inne</label>
                            </div>
                            <div className="giveAway__form__btns">
                                <button className="giveAway__form__btn">Dalej</button>
                            </div>
                        </form>
                    </div>
                    <div className="giveAway__form__content dnone">
                        <span className="giveAway__form__steps">Krok 2/4</span>
                        <h2 className="giveAway__form__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                        <form className="giveAway__form__box">
                            <div>
                                <label  className="giveAway__form__label__select" for="bags">Liczba 60l worków: </label>
                                <select name="bags" id="bags">
                                    <option value=""> - Wybierz - </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>   
                            </div>
                            <div className="giveAway__form__btns">
                                <button className="giveAway__form__btn">Wstecz</button>
                                <button className="giveAway__form__btn">Dalej</button>
                            </div>
                        </form>
                    </div>
                    <div className="giveAway__form__content dnone">
                        <span className="giveAway__form__steps">Krok 3/4</span>
                        <h2 className="giveAway__form__title">Lokalizacja: </h2>
                        <form className="giveAway__form__box">
                            <div>
                                <select name="localization" id="localization">
                                    <option value=""> - Wybierz - </option>
                                    <option value="poznan">Poznań</option>
                                    <option value="warsaw">Warszawa</option>
                                    <option value="cracow">Kraków</option>
                                    <option value="wroclaw">Wrocław</option>
                                    <option value="katowice">Katowice</option>
                                </select>   
                            </div>

                            <div className="reciver">
                                <div>
                                    <input type="checkbox" id="children" name="helpGroups"/>
                                    <label for="children">dzieciom</label>
                                </div> 
                                <div>
                                    <input type="checkbox" id="singleMother" name="helpGroups"/>
                                    <label for="singleMother">Samotnym matkom</label>
                                </div>    
                                <div>
                                    <input type="checkbox" id="homeless" name="helpGroups"/>
                                    <label for="homeless">Bezdomnym</label>
                                </div>    
                                <div>
                                    <input type="checkbox" id="disabled" name="helpGroups"/>
                                    <label for="disabled">Niepełnosprawnym</label>
                                </div>    
                                <div>
                                    <input type="checkbox" id="elder" name="helpGroups"/>
                                    <label for="elder">Osobom starszym</label>
                                </div>        
                            </div>

                            <div>
                                <div className="specific">
                                    <label htmlFor="LokalizationSpecific">{`Wpisz nazwę konkretnej organizacji(opcjonalne)`}</label>
                                    <input type="text" name="localizationSpecific" id="lokalizationSpecific" />
                                </div>
                            </div>
                            <div className="giveAway__form__btns">
                                <button className="giveAway__form__btn">Wstecz</button>
                                <button className="giveAway__form__btn">Dalej</button>
                            </div>
                        </form>
                    </div>
                    <div className="giveAway__form__content ">
                        <span className="giveAway__form__steps">Krok 4/4</span>
                        <h2 className="giveAway__form__title">Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                        <form className="giveAway__form__box">
                            <div className="formContainer">
                                <div>
                                    <span className="address__title">Adres odbioru: </span>
                                    <div className="address">
                                        <div className="address__row">
                                            <label HtmlFor="street">Ulica</label>
                                            <input type="text" id="street" name="street"/>
                                            
                                        </div>
                                        <div className="address__row">
                                            <label HtmlFor="city">Miasto</label>
                                            <input type="city" id="city" name="city"/>
                                        </div>
                                        <div className="address__row">
                                            <label  htmlFor="postCode">Kod pocztowy</label>
                                            <input type="text" id="postCode" name="postCode" />
                                            
                                        </div>
                                        <div className="address__row">
                                            <label htmlFor="phone">Numer telefonu</label>
                                            <input type="text" id="phone" name="phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="date">
                                    <span className="date__title">Termin odbioru: </span>
                                    <div className="date__row">
                                        <label HtmlFor="date">Data</label>
                                        <input type="date" id="date" name="date" min="2018-01-01" max="2018-12-31" />
                                        
                                    </div>
                                    <div className="date__row">
                                        <label HtmlFor="time">Godzina</label>
                                        <input type="time" id="time" name="time" min="09:00" max="18:00" required />
                                    </div>
                                    <div className="date__row">
                                        <label  htmlFor="note">Uwagi dla kuriera</label>
                                        <textarea className="note" id="note" name="note" rows="4" cols="50"></textarea>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="giveAway__form__btns">
                                <button className="giveAway__form__btn">Wstecz</button>
                            </div>
                        </form>
                    </div>
                </section>

                <HomeContact />
            </div>
    ) 

    
    
    
}

export default GiveAwayThings;