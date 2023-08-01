function HomeSimpleSteps() {
    return (
        <section className="simpleSteps">
            <h2 className="simpleSteps__title">Wystarczą 4 proste kroki</h2>
            <div className="simpleSteps__box">
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-1.svg" alt="icon"/>
                    <span className="step__title">Wybierz rzeczy</span>
                    <span className="step__text">ubrania, zabawki, sprzęt i inne</span>
                </div> 
            </div>
            <div className="simpleSteps__box">
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-2.svg" alt="icon"/>
                    <span className="step__title">Spakuj się</span>
                    <span className="step__text">skprzystaj z worków na śmieci</span>
                </div> 
            </div>
            <div className="simpleSteps__box">
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-3.svg" alt="icon"/>
                    <span className="step__title">Zdecyduj komu chcesz pomóc</span>
                    <span className="step__text">wybierz zaufane miejsce</span>
                </div> 
            </div>
            <div className="simpleSteps__box">
                <div className="step__box">
                    <img className="step__image" src="/src/assets/Icon-4.svg" alt="icon"/>
                    <span className="step__title">Zamów kuriera</span>
                    <span className="step__text">kurier przyjedzie w dowolnym terminie</span>
                </div> 
            </div>
            <button className="btn">ODDAJ RZECZY</button>
        </section>
    )
}

export default HomeSimpleSteps;