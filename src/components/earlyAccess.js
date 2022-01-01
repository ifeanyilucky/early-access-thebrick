import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required!"),
});

const EarlyAccess = () => {
  const handleSubmit = async (values) => {
    console.log(values);
    const { email } = values;
    try {
      const payload = {
        email_address: email,
      };
      await axios.post("/.netlify/functions/newsLetterSubscribe", payload);
      alert("Contact details were successfully added");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}
      >
        {(formik) => (
          <Form>
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
    </div>
  );
};

export default EarlyAccess;
