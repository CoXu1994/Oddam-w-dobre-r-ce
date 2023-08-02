function HomeMainSection() {
    return (
        <section className="main">
            <div className="main__image"></div>
            <div className="main__box">
                <h2 className="box__title">Zacznij Pomagać.<br></br>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
                <div className="box__buttons">
                    <button className="main__btn"><span className="btn__text">ODDAJ RZECZY</span></button>
                    <button className="main__btn"><span className="btn__text">ZORGANIZUJ ZBIÓRKĘ</span></button>
                </div>
            </div>
        </section>
    )
}

export default HomeMainSection;