import { useFormik } from "formik";
import fb from "../assets/Facebook.svg";
import insta from "../assets/Instagram.svg";

function HomeContact() {
    const validate = values => {
        const errors = {};
        if (!values.email) {
          errors.email = '*pole musi być wypełnione';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Niepoprawny adress email';
        }
      
        if (!values.name) {
          errors.name = '*pole musi być wypełnione';
        } else if (values.name.includes(" ")) {
          errors.name = 'Wykryto spacje';
        }

        if (!values.message) {
            errors.message = '*pole musi być wypełnione';
          } else if (values.message.length < 120) {
            errors.message = 'Wiadomość musi mieć minimum 120 znaków';
          }

        return errors;
      };

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          message: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            sendForm(values);
        },
      });

      async function sendForm(values) {
        return await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          
        })
      }

    return (
        <section className="contact" id="contact">
            <div className="contact__box">
                <h2 className="contact__title">Skontaktuj się z nami</h2>
                <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
                <form 
                    className="form"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="form__group">
                        <div className="form__box">
                            <label className="form__label" htmlFor="name">Wpisz swoje imię</label>
                            <input 
                                className="form__input" 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Krzysztof"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name} 
                                autoComplete="on"
                                
                            />
                             { formik.touched.name && formik.errors.name ? 
                        (<div className="error">{formik.errors.name}</div>) : null }
                        </div>
                       
                        <div className="form__box">
                            <label className="form__label" htmlFor="email">Wpisz swoje email</label>
                            <input 
                                className="form__input" 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="abc@xyz.pl"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} 
                                autoComplete="on"
                            />
                            { formik.touched.email && formik.errors.email ? 
                        (<div className="error">{formik.errors.email}</div>) : null }
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
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message} 
                            autoComplete="on"
                        >       
                        </textarea>
                        { formik.touched.message && formik.errors.message ? 
                        (<div className="error">{formik.errors.message}</div>) : null }
                    </div>
                    
                    <button className="main__btn form__btn" type="submit">Wyślij</button>
                </form>
            </div>
            <div className="footer">
                <span className="footer__copyrights">Copyright by Coders Lab</span>
                <div className="footer__social">
                    <img className="fb" src={fb} alt="facebook" />
                    <img className="insta" src={insta} alt="instagram" />
                </div>
            </div>
        </section>
    
    )
}

export default HomeContact;