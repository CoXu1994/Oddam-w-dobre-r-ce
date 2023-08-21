import Navigation from './Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { useAuth } from '../context/AuthContext';
import decoration from "../assets/Decoration.svg";

function Registration() {

    let navigate = useNavigate();
    const { createUser, logIn } = useAuth();

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
      
        if (!values.passwordConfirm) {
            errors.passwordConfirm = 'pole musi być wypełnione';
        } else if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = "Hasła nie są takie same"
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            createUser( values.email, values.password)
            .then(() => {
                logIn( values.email, values.password)
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        },
    });
    
    return(
        <div className="container">
            <Navigation />
            <section className="log">
                <h2 className="log__title"> Załóż konto </h2>
                <img className="decoration" src={decoration} alt="decoration" />
                <form 
                    className="form"
                    onSubmit={formik.handleSubmit}       
                >
                    <div className='log__form'>
                        <div className="form__box">
                            <label className="form__label" htmlFor="email"> Email </label>
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
                            <label className="form__label" htmlFor="password"> Hasło </label>
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
                        </div>

                        { formik.touched.password && formik.errors.password ? 
                            (<div className="error" >{formik.errors.password}</div>) : null }

                        <div className="form__box">
                            <label className="form__label" htmlFor="passwordConfirm"> Powtórz Hasło </label>
                            <input 
                                className="form__input" 
                                type="password" 
                                id="passwordConfirm" 
                                name="passwordConfirm" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordConfirm}
                                autoComplete="on"
                            />
                        </div>

                        { formik.touched.passwordConfirm && formik.errors.passwordConfirm ? 
                            (<div className="error" >{formik.errors.passwordConfirm}</div>) : null }`
                    </div>
                    <div className="log__options">
                        <Link className="link" to="/logowanie" >
                            <button className="btn__main" > Zaloguj się </button>
                        </Link>
                        <button className="btn__main" type="submit" > Załóż konto </button>
                    </div>
                </form>
                
            </section>
        </div>
    )
}

export default Registration;