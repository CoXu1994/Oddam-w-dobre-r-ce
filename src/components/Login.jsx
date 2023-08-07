import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useFormik } from "formik";
function LogIn() {
    const validate = values => {
        const errors = {};
        if (!values.email) {
          errors.email = '*pole musi być wypełnione';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Niepoprawny adress email';
        }
      
        if (!values.password) {
          errors.password = '*pole musi być wypełnione';
        } else if (values.password.length < 6) {
          errors.password = 'Hasło musi posiadać minimum 6 znaków';
        }

        return errors;
      };

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <div className="container">
            <Navigation />
            <section className="log">
                <h2 className="log__title">Zaloguj się</h2>
                <img className="decoration" src="/src/assets/Decoration.svg" alt="decoration" />
                <form 
                    className="form" 
                    onSubmit={formik.handleSubmit}
                >
                    <div className="log__form">
                        <div className="form__box">
                            <label className="form__label" htmlFor="email">Email</label>
                            <input 
                                className="form__input" 
                                type="email" 
                                id="email" 
                                name="email" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} 
                                autoComplete="on"
                            />
                            
                        </div>
                        { formik.touched.email && formik.errors.email ? 
                            (<div className="error">{formik.errors.email}</div>) : null }
                        <div className="form__box">
                            <label className="form__label" htmlFor="pass">Hasło</label>
                            <input 
                                className="form__input" 
                                type="password" 
                                id="password" 
                                name="password" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} 
                                autoComplete="on"
                            />
                            { formik.touched.password && formik.errors.password ? 
                            (<div className="error">{formik.errors.password}</div>) : null }
                        </div>
                    </div>   
                    
                    <div className="log__options">
                    <Link className="link" to="/rejestracja" >
                        <button className="main__btn" >Załóż konto</button>
                    </Link>
                    <button className="main__btn" type="submit">Zaloguj się</button>
                    </div>
                    
            </form>
            </section>
        </div>
    )
}

export default LogIn;