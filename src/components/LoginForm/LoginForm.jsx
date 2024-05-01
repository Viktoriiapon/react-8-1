
    import { useDispatch } from 'react-redux';
    import { ErrorMessage, Field, Form, Formik } from "formik";
import { logIn } from '../../redux/auth/operations';
import * as Yup from "yup";
import css from './LoginForm.module.css';

const FORM_INITIAL_VALUES = {
  
  email: "",
  password: "",
};
const  LoginSchema = Yup.object().shape({

  email: Yup.string()
  .email((<span style={{ fontSize: '20px', color: 'orange' }}>You must enter valid email address!</span>))
  .required(<span style={{ fontSize: '20px', color: 'red' }}>The email is required</span>),
  password: Yup.string()
  .min(7, "Too short")
  .required(  <span style={{ fontSize: '20px', color: 'red' }}>The password is required</span>),

});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };


  
    return (
      <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form>
        <div className={css.form}>
            <h2>Login user</h2>
        

          <label htmlFor="email">Email</label>
          <Field className={css.input} type="email" id="email" name="email" placeholder="email@.com" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field className={css.input} type="password" id="password" name="password" placeholder="your password" />
          <ErrorMessage name="password" component="div" />

          <button className={css.logBtn} type="submit">
           Log In
          </button>
        </div>
      </Form>
    </Formik>
    );
  };
   
 

