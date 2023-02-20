import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";

export const RegisterForm = () => {
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
      name: Yup.string().max(30, "30 Characters max").required("required"),
      email: Yup.string().email("Must be a valid email").required("Requiered"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords are different"
      ),
    })}
  >
    {(formik) => (
      <Form>
        <TextInput name="name" placeholder="Lionel Messi" />
        <TextInput name="email" type="email" placeholder="l10@gmail.com" />
        <TextInput name="password" type="password" placeholder="******" />
        <TextInput
          name="confirmPassword"
          type="password"
          placeholder="******"
        />
      </Form>
    )}
  </Formik>;
};
