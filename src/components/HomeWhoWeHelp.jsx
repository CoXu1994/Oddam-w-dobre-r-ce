import { useState } from "react";
import decoration from "../assets/Decoration.svg";
function HomeWhoWeHelp() {
    const [type, setType] = useState("fundations");

    const [currentPage, setCurrentPage] = useState(1);
    const LastIndex = currentPage * 3;
    const FirstIndex = LastIndex - 3;

    const fundations = [
        {
            id: 1,
            title: "Dbam o zdrowie",
            description: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
            items: ["ubrania", "jedzenie", "sprzęt AGD", "meble", "zabawki"]
        },
        {
            id: 2,
            title: "Dla dzieci",
            description: "Pomoc dzieciom z ubogich rodzin.",
            items: ["ubrania","meble", "zabawki"]
        },
        {
            id: 3,
            title: "Bez domu",
            description: "Pomoc dla osób nie posiadających miejsca zamieszkania",
            items: ["ubrania", "jedzenie", "ciepłe koce"]
        },
        {
            id: 4,
            title: "Lorem nr 1",
            description: "Lorem ipsum trele morele heuehe asdiasxz",
            items: ["lorem", "ipsum", "dores", "leuten", "kuafens"]
        },
        {
            id: 5,
            title: "Lorem nr 2",
            description: "Impasum koten margon stifesa magensuf lureach.",
            items: ["bumsasw","kutraza", "lurfen"]
        },
        {
            id: 6,
            title: "Lorem nr 3",
            description: "Patala monetar lubear montes koutea lama",
            items: ["zaukfef", "zasdafsf", "lofyal"]
        },
        {
            id: 7,
            title: "Ipsum nr 1",
            description: "Patala monetar lubear montes koutea lama",
            items: ["kuafens", "lorem", "dores", "ubrania", "jedzenie", "ciepłe koce"]
        },
        {
            id: 8,
            title: "Ipsum nr 2",
            description: "Lorem ipsum trele morele heuehe asdiasxz",
            items: ["ubrania","meble", "zabawki"]
        },
        {
            id: 9,
            title: "Ipsum nr 3",
            description: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
            items: ["lorem", "ipsum", "dores", "leuten", "kuafens"]
        },
        
    ]
    const organizations = [
        {
            id: 1,
            title: "Lorem Ipsum 1",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: ["Egestas", "sed", "tempus"]
        },
        {
            id: 2,
            title: "Lorem Ipsum 2",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: ["Ut", "aliquam", "purus", "sit", "amet"]
        },
        {
            id: 3,
            title: "Lorem Ipsum 3",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: ["Mi", "quis", "hendrerit", "dolor"]
        },
        {
            id: 4,
            title: "Lorem Ipsum 4",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: ["Ut", "aliquam", "purus", "sit", "amet"]
        },
        {
            id: 5,
            title: "Lorem Ipsum 5",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: ["Mi", "quis", "hendrerit", "dolor"]
        },
        {
            id: 6,
            title: "Lorem Ipsum 6",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: ["Egestas", "sed", "tempus"]
        },

           
    ]
    const local = [
        {
            id: 1,
            title: "Lorem Ipsum 1",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: ["Egestas", "sed", "tempus"]
        },
        {
            id: 2,
            title: "Lorem Ipsum 2",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: ["Ut", "aliquam", "purus", "sit", "amet"]
        },
        {
            id: 3,
            title: "Lorem Ipsum 3",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: ["Mi", "quis", "hendrerit", "dolor"]
        },
    ]
    
    function listItemTemplate(type) {

        let text;
        let arr = [];
        if (type == "fundations") {
            text = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
            arr = fundations;
        }
        if (type == "organizations") {
            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            arr = organizations;
        }
        if (type == "local") {
            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            arr = local;
        }
        let pagesTotal = Math.ceil(arr.length / 3)
        let pages = [...Array(pagesTotal + 1).keys()].slice(1);
        let visibleItems = arr.slice(FirstIndex, LastIndex)
    
        return (
            <div className="whoWeHelp__box">
                <p className="box__text">
                    {text}
                </p>
                <div className="box__list">
                    {visibleItems?.map((obj) => {
                        const {id,title,description,items} = obj;   
                        return (
                            <div key={id} className="item">
                                <div className="item__left">
                                    <span className="item__title"> Zbiórka “{title}” </span>
                                    <span className="item__description"> {description} </span>
                                </div>
                                <div className="item__right">
                                    <span className="item__list"> {items.join(", ")} </span> 
                                </div>
                            </div>
                        )                           
                    })}        
                </div>

                {arr?.length > 3 && (
                    <div className="pages">
                        {pages.map((page) => 
                            <div 
                                className={currentPage == page ? "active" : "pages__page"} 
                                key={page} 
                                onClick={() => setCurrentPage(page)} 
                            > 
                                {page} 
                            </div> 
                        )}
                    </div>
                    )}        
            </div>
        )
    }
    
    function handleArrayChange(type) {
        setType(type);
        setCurrentPage(1);
    }

    return (
        <section className="whoWeHelp" id="help">
            <h2 className="whoWeHelp__title"> Komu pomagamy? </h2>
            <img className="decoration" src={decoration} alt="decoration" />
            <div className="whoWeHelp__buttons">
                <button 
                    className="btn__main small" 
                    onClick={() => handleArrayChange("fundations")}
                >
                    <span className="btn__text small"> Fundacjom </span>
                </button>
                <button 
                    className="btn__main small" 
                    onClick={() => handleArrayChange("organizations")}
                >
                    <div className="small__box">
                        <span className="btn__text small"> Organizacjom </span>
                        <span className="btn__text small"> pozarządowym </span>
                    </div>
                </button>
                <button 
                    className="btn__main small" 
                    onClick={() => handleArrayChange("local")}
                >   
                    <div>
                        <span className="btn__text small"> Lokalnym </span>
                        <span className="btn__text small"> zbiórkom </span>
                    </div>
                </button>
            </div>
            {listItemTemplate(type)}
           
        </section>
    )
}

export default HomeWhoWeHelp;