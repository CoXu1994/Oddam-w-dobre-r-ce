import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";


function HomeAboutUs() {
    return (
        <section className="aboutUs" id="about">
            <div className="aboutUs__info">
                <h2 className="info__title"> O nas </h2>
                <img className="decoration" src={decoration} alt="decoration" />
                <p className="info__text" >
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img className="info__signature" src={signature} alt="signature" />
            </div>
            <div className="aboutUs__image"></div>
        </section>
    )
}

export default HomeAboutUs;