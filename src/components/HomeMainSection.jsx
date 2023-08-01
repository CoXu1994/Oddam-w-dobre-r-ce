function HomeMainSection() {
    return (
        <section className="main">
            <img className="main__image" src="/src/assets/Home-Hero-Image.jpg" />
            <div className="main__box">
                <h2 className="box__title">Zacznij Pomagać. Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
                <div className="box__buttons">
                    <button className="main__btn">ODDAJ RZECZY</button>
                    <button className="main__btn">ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </section>
    )
}

export default HomeMainSection;