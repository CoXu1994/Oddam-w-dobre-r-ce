import Navigation from "./Navigation";
import HomeContact from "./HomeContact";
import decoration from "../assets/Decoration.svg";
import { useState } from "react";
import Part1 from "./GiveAwayForm/GiveAwayPart1";
import Part2 from "./GiveAwayForm/GiveAwayPart2";
import Part3 from "./GiveAwayForm/GiveAwayPart3";
import Part4 from "./GiveAwayForm/GiveAwayPart4";
import Part5_Summary from "./GiveAwayForm/GiveAwayPart5_Summary";
import Part6 from "./GiveAwayForm/GiveAwayPart6";

function GiveAwayThings() {
    const [currentPage, setCurrentPage] = useState(1);
    const [type, setType] = useState("");
    const [bags, setBags] = useState("");
    const [localization, setLocalization] = useState("");
    const [helpGroups, setHelpGroups] = useState([]);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [note, setNote] = useState("");

    function changePage(direction) {
        if(direction == "prev") {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
        }
        if (direction == "next") {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
        }
    }
    
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
                                    <span className="giveAway__number"> 1 </span>
                                    <span className="giveAway__text"> Wybierz rzeczy </span>
                                </div>
                            </div>
                            <div className="giveAway__step">
                                <div className="giveAway__box">
                                    <span className="giveAway__number"> 2 </span>
                                    <span className="giveAway__text"> Spakuj je w worki </span>
                                </div>
                            </div>
                            <div className="giveAway__step">
                                <div className="giveAway__box">
                                    <span className="giveAway__number"> 3 </span>
                                    <span className="giveAway__text"> Wybierz fundacje </span>
                                </div>
                            </div>
                            <div className="giveAway__step">
                                <div className="giveAway__box">
                                    <span className="giveAway__number"> 4 </span>
                                    <span className="giveAway__text"> Zamów kuriera </span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
                {currentPage < 4 && (
                    <section className="orangeBar">
                        <div className="orangeBar__content">
                            <span className="orangeBar__title"> Ważne </span>
                            <p className="orangeBar__text">
                                {currentPage == 1 && 
                                "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}
                                {currentPage == 2 && 
                                "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}
                                {currentPage == 3 && 
                                "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}
                                {currentPage == 4 && 
                                "Podaj adres oraz termin odbioru rzeczy."}
                            </p>
                        </div>
                    </section>
                )}

                <section className="giveAway__form">
                    { currentPage == 1 && <Part1 setType={setType} type={type}/> }
                    { currentPage == 2 && <Part2 setBags={setBags} bags={bags}/> }
                    { currentPage == 3 && 
                        <Part3 
                            setLocalization={setLocalization} 
                            setHelpGroups={setHelpGroups}
                            localization={localization}
                            helpGroups={helpGroups}
                        /> }
                    { currentPage == 4 && 
                        <Part4 
                            setStreet={setStreet}
                            setCity={setCity} 
                            setPostCode={setPostCode} 
                            setPhone={setPhone}
                            setDate={setDate}
                            setTime={setTime}
                            setNote={setNote}
                            street={street}
                            city={city}
                            postCode={postCode}
                            phone={phone}
                            date={date}
                            time={time}
                            note={note}
                        /> }
                    { currentPage == 5 && 
                        <Part5_Summary 
                            type = { type }
                            bags = { bags }
                            localization = { localization }
                            helpGroups = { helpGroups }
                            street = { street }
                            city = { city }
                            postCode = { postCode }
                            phone = { phone }
                            date = { date }
                            time = { time }
                            note = { note }
                        />}
                    { currentPage == 6 && <Part6 />}
                    

                    <div className="giveAway__form__btns">
                        {currentPage > 1 && currentPage < 6 && 
                            <button className="giveAway__form__btn" onClick ={() => changePage("prev")}> Wstecz </button>}
                        {currentPage < 5 && 
                            <button className="giveAway__form__btn" onClick ={() => changePage("next")}> Dalej </button>}
                        {currentPage == 5 && 
                            <button className="giveAway__form__btn"onClick ={() => changePage("next")}> Potwierdzam </button>}
                    </div>

                </section>

                <HomeContact />
            </div>
    ) 

    
    
    
}

export default GiveAwayThings;