import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required!"),
});

const EarlyAccess = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // const { email } = values;
    axios
      .post("https://sheetdb.io/api/v1/mp0ufj6hw8ywg", { data: values })
      .then((res) => {
        alert(`${values.email} was added successfully`);
        resetForm();
      })
      .catch((error) => alert(error));

    // try {
    //   const payload = {
    //     email_address: email,
    //   };
    //   await axios.post("/.netlify/functions/newsLetterSubscribe", payload);
    //   alert("Contact details were successfully added");
    //   resetForm();
    // } catch (error) {
    //   alert(error.message);
    // }
  };
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
      validationSchema={signUpSchema}
    >
      {(formik) => (
        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="subscribe">
            <h2 className="fs-1">Join The Waitlist</h2>
            <p className="subscribe__copy">
              Be the first set of people to use Thebrick
            </p>

            <ErrorMessage
              name="email"
              component="div"
              className="mb-2 text-danger"
            />

            <div className="form">
              <Field
                name="email"
                type="email"
                className="form__email"
                placeholder="Enter your email address"
              />

              <button
                className="form__button"
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
              >
                Request Access
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EarlyAccess;
