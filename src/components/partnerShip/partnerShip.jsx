import classes from "./partnerShip.module.css";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
function PartnerShip() {
  const phoneRegex = RegExp(/^[+]{1}?[0-9]{12}?$/);
  const validate = yup.object({
    firstName: yup
      .string()
      .typeError("There should be letters here")
      .required("Firstname required !"),
    lastName: yup
      .string()
      .typeError("There should be letters here")
      .required("Lastname required !"),
    tel: yup
      .string()
      .matches(phoneRegex, "Enter the number correctly")
      .required("Number required !"),
    email: yup
      .string()
      .email("Email error entered !")
      .required("Email  required !"),
    message: yup.string().required("Message required !"),
  });

  return (
    <div className={classes.partnerShip}>
      <h1 className={classes.headTitle}>PARTNERSHIP</h1>
      <div className={classes.headTextBox}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitaa. Augue
          vivamus sit aliquam in velit volutpat scelerisque at id. Orci cursus
          egestas adipiscing quis id tempus donecc amet. Facilisi malesuada
          curabitur vulputate nulla tortor. vulputate adipiscing diam malesuada
          proin morbi mattiscc vel. Lorem ipsum dolor sit amet, consectetur
          adipiscing elitaa. Augue vivamus sit aliquam in velit volutpat
          scelerisque at id. Orci cursus egestas adipiscing quis id tempus
          donecc amet. vivamus sit aliquam in velit volutpat scelerisque at id.
          Orci cursus egestas adipiscing quis id tempus donecc amet.
        </p>
      </div>
      <div className={classes.formPanel}>
        <h3 className={classes.formTitle}>Leave a Request for Partnership</h3>
        <div className={classes.forms}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              tel: "",
              message: "",
            }}
            validateOnBlur
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validate}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <Form>
                <div className={classes.inputBox}>
                  <div className={classes.topInputs}>
                    <div className={classes.inputPanel}>
                      <input
                       style={touched.firstName&&errors.firstName?{border:'2px solid red'}:{}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder='First Name'
                        type='text'
                        name='firstName'
                        className={classes.input}
                      />
                      <p  className={`${touched.firstName&&errors.firstName?classes.error:''}`}>
                        <ErrorMessage name='firstName' />
                      </p>
                    </div>
                    <div className={classes.inputPanel}>
                      <input
                      style={touched.lastName&&errors.lastName?{border:'2px solid red'}:{}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder='Last Name'
                        type='text'
                        name='lastName'
                        className={classes.input}
                      />
                      <p className={`${touched.lastName&&errors.lastName?classes.error:''}`}>
                        <ErrorMessage name='lastName' />
                      </p>
                    </div>
                  </div>
                  <div className={classes.bottomInputs}>
                    <div className={classes.inputPanel}>
                      <input
                       style={touched.tel&&errors.tel?{border:'2px solid red'}:{}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tel}
                        placeholder='Phone'
                        type='text'
                        name='tel'
                        className={classes.input}
                      />
                      <p  className={`${touched.tel&&errors.tel?classes.error:''}`}>
                        <ErrorMessage name='tel' />
                      </p>
                    </div>
                    <div className={classes.inputPanel}>
                      <input
                       style={touched.email&&errors.email?{border:'2px solid red'}:{}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='Email'
                        type='text'
                        name='email'
                        className={classes.input}
                      />
                      <p  className={`${touched.email&&errors.email?classes.error:''}`}>
                        <ErrorMessage name='email' />
                      </p>
                    </div>
                  </div>
                  <div className={classes.inputPanelMessage}>
                    <textarea
                     style={touched.message&&errors.message?{border:'2px solid red'}:{}}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder='How can we help?'
                      name='message'
                      className={classes.inputMessage}
                    />
                    <p  className={`${touched.message&&errors.message?classes.error:''}`}>
                      <ErrorMessage name='message' />
                    </p>
                  </div>
                </div>
                <button className={classes.btnForm} type='submit'>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default PartnerShip;
