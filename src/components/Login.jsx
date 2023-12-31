import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import decoration from '../assets/Decoration.svg';
import { useFormik } from "formik";
import { useAuth } from '../context/AuthContext';

function LogIn() {

  const { signIn } = useAuth();
  let navigate = useNavigate();

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
      signIn(values.email, values.password)
        .then(() => {
          navigate("/")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });   
    },
  });

  return (
    <div className="container">
      <Navigation />
      <section className="log">

        <h2 className="log__title"> Zaloguj się </h2>
        <img className="decoration" src= {decoration} alt="decoration" />

        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="log__form">
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
              <label className="form__label" htmlFor="pass"> Hasło </label>
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
              <button className="btn__main" > Załóż konto </button>
            </Link>
              <button className="btn__main" type="submit"> Zaloguj się </button>
          </div>        
        </form>
      </section>
    </div>
  )
}

export default LogIn;