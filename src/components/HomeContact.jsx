function HomeContact() {
    return (
        <section className="contact" id="contact">
            <div className="contact__box">
                <h2 className="contact__title">Skontaktuj się z nami</h2>
                <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
                <form className="form">
                    <div className="form__group">
                        <div className="form__box">
                            <label className="form__label" htmlFor="name">Wpisz swoje imię</label>
                            <input className="form__input" type="text" id="name" name="name" placeholder="Krzysztof"/>
                        </div>
                        <div className="form__box">
                            <label className="form__label" htmlFor="email">Wpisz swoje email</label>
                            <input className="form__input" type="email" id="email" name="email" placeholder="abc@xyz.pl"/>
                        </div>
                    </div>
                    <div className="form__box">
                        <label className="form__label" htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea 
                            className="form__message"
                            id="message" 
                            name="message" 
                            rows="4" 
                            cols="50" 
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                        </textarea>
                    </div>
                    <button className="main__btn form__btn" type="submit">Wyślij</button>
                </form>
            </div>
            <div className="footer">
                <span className="footer__copyrights">Copyright by Coders Lab</span>
                <div className="footer__social">
                    <img className="fb" src="/src/assets/Facebook.svg" alt="facebook" />
                    <img className="insta" src="/src/assets/Instagram.svg" alt="instagram" />
                </div>
            </div>
        </section>
    
    )
}

export default HomeContact;