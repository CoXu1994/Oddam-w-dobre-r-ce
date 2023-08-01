function HomeWhoWeHelp() {
    return (
        <section className="whoWeHelp">
            <h2 className="whoWeHelp__title">Komu pomagamy?</h2>
            <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
            <div className="whoWeHelp__buttons">
                <button className="btn">Fundacjom</button>
                <button className="btn">Organizacjom pozarządowym</button>
                <button className="btn">Lokalnym zbiórkom</button>
            </div>
            <div className="whoWehelp__box">
                <p className="box__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagaja i czego potrzebują</p>
            </div>
            
        </section>
    )
}

export default HomeWhoWeHelp;