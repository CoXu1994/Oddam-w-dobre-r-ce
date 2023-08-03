import { useState } from "react";

function HomeWhoWeHelp() {
    const [type, setType] = useState("fundations");
    function listItemTemplate(arr) {

        if (arr == "fundations") {
            return (
                
                <div className="whoWeHelp__box">
                    <p className="box__text">
                         W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <div className="box__list">
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Fundacja "Dbam o Zdrowie"</span>
                                <span classname="item__description">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">ubrania, jedzenie, sprzęt AGD, meble, zabawki</span> 
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Fundacja "Dla dzieci"</span>
                                <span classname="item__description">Cel i misja: Pomoc dzieciom z ubogich rodzin..</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">ubrania, meble, zabawki</span> 
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Fundacja “Bez domu”</span>
                                <span classname="item__description">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">ubrania, jedzenie, ciepłe koce</span> 
                            </div>
                        </div>    
                    </div>
                    <div className="pages">
                        <div className="pages__page">1</div>
                        <div className="pages__page">2</div>
                        <div className="pages__page">3</div>
                    </div>
                </div>
            )
        }

        if (arr == "organizations") {
            return (
                
                <div className="whoWeHelp__box">
                    <p className="box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div className="box__list">
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Organizacja “Lorem Ipsum 1”</span>
                                <span classname="item__description">Quis varius quam quisque id diam vel quam elementum pulvinar.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">Egestas, sed, tempus</span> 
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Organizacja “Lorem Ipsum 2”</span>
                                <span classname="item__description">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">Ut, aliquam, purus, sit, amet</span> 
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Organizacja “Lorem Ipsum 3”</span>
                                <span classname="item__description">Scelerisque in dictum non consectetur a erat nam.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">Mi, quis, hendrerit, dolor</span> 
                            </div>
                        </div>    
                    </div>
                    <div className="pages">
                        <div className="pages__page">1</div>
                        <div className="pages__page">2</div>
                        <div className="pages__page">3</div>
                    </div>
                </div>
            )
        }

        if (arr == "local") {
            return (
                
                <div className="whoWeHelp__box">
                    <p className="box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div className="box__list">
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Zbiórka “Lorem Ipsum 1”</span>
                                <span classname="item__description">Quis varius quam quisque id diam vel quam elementum pulvinar.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">Egestas, sed, tempus</span> 
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Zbiórka “Lorem Ipsum 2”</span>
                                <span classname="item__description">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">Ut, aliquam, purus, sit, amet</span> 
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__left">
                                <span className="item__title">Zbiórka “Lorem Ipsum 3”</span>
                                <span classname="item__description">Scelerisque in dictum non consectetur a erat nam.</span>
                            </div>
                            <div className="item__right">
                                <span className="item__list">Mi, quis, hendrerit, dolor</span> 
                            </div>
                        </div>    
                    </div>
                    <div className="pages">
                        <div className="pages__page">1</div>
                        <div className="pages__page">2</div>
                        <div className="pages__page">3</div>
                    </div>
                </div>
            )
        }
    }
    return (
        <section className="whoWeHelp">
            <h2 className="whoWeHelp__title">Komu pomagamy?</h2>
            <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
            <div className="whoWeHelp__buttons">
                <button className="main__btn" onClick={() => setType("fundations")}>Fundacjom</button>
                <button className="main__btn" onClick={() => setType("organizations")}>Organizacjom<br/> pozarządowym</button>
                <button className="main__btn" onClick={() => setType("local")}>Lokalnym<br/>zbiórkom</button>
            </div>
            {listItemTemplate(type)}
           
        </section>
    )
}

export default HomeWhoWeHelp;