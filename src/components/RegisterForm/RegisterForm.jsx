import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { register } from '../../redux/auth/operations';
import * as Yup from "yup";
import css from './RegisterForm.module.css';

const FORM_INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
};


const RegisterBoxSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short")
      .max(20, "Too long")
      .required(<span style={{ fontSize: '20px', color: 'red' }}>The name is required</span>),
      email: Yup.string()
      .email("You must enter valid email address!")
      .required(<span style={{ fontSize: '20px', color: 'red' }}>The number is required</span>),
      password: Yup.string()
      .min(7, "Too short")
      .required(<span style={{ fontSize: '20px', color: 'red' }}>The password is required</span>),
    
  });
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterBoxSchema}
    >
      <Form>
        <div className={css.form}>
            <h2>Register user</h2>
          <label htmlFor="name">Name</label>
          <Field className={css.input} type="text" id="name" name="name" placeholder="your name (enter min 2 symbols)" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="email">Email</label>
          <Field className={css.input} type="email" id="email" name="email" placeholder="email@.com" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field className={css.input} type="password" id="password" name="password" placeholder="your password (enter min 7 symbols)" />
          <ErrorMessage name="password" component="div" />

          <button className={css.registerBtn} type="submit">
           Registration
          </button>
        </div>
      </Form>
    </Formik>
  );
};





 