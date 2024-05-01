import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactBoxSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(20, "Too long")
    .required("The name is required"),
  number: Yup.string()
    .matches(/^[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/, {
      message: "Enter valid phone number",
      excludeEmptyString: false,
    })
    .required("The number is required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
    
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactBoxSchema}
    >
      <Form>
        <div className={css.form}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="number">Number</label>
          <Field type="tel" id="number" name="number" placeholder="XXX XX XX" />
          <ErrorMessage name="number" component="div" />

          <button className={css.addButton} type="submit">
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;



  