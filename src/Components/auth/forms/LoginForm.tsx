import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Must be a valid email")
          .required("Requiered"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters long")
          .required("Required"),
      })}
    >
      {(formik) => (
        <Form>
          <TextInput name="email" type="email" placeholder="l10@gmail.com" />
          <TextInput name="password" type="password" placeholder="******" />
          <button type="submit"> Login</button>
        </Form>
      )}
    </Formik>
  );
};
