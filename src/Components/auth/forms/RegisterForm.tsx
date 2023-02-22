import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import { useAppDispatch } from '../../../Redux/Store/store';
import { registerWithEmail } from "../../../Redux/Reducers/auth/thunks";
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

    return(
  <Formik
    initialValues={{
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }}
    onSubmit={(values) => {
      // console.log(values);
        const {name, email, password} = values;
       dispatch( registerWithEmail(email, password, name ))
       navigate("/")

      
    }}
    validationSchema={Yup.object({
      name: Yup.string().max(30, "30 Characters max").required("Required"),
      email: Yup.string().email("Must be a valid email").required("Required"),
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
      <Form className="flex flex-col w-[400px] h-[500px] items-center justify-center pt-8 border-2 ">
        <div className="w-full flex justify-end pr-8 pt-4">
        <button className="font-bold hover:bg-red-600 hover:text-gray-200 duration-150 w-8 rounded-sm ">X</button>
        </div>
        <h1 className="font-bold text-2xl">Register </h1>
        <hr/>
        <TextInput name="name" placeholder="Lionel Messi" />
        <TextInput name="email" type="email" placeholder="l10@gmail.com" />
        <TextInput name="password" type="password" placeholder="******" />
        <TextInput
          name="confirmPassword"
          type="password"
          placeholder="******"
        />
        <button className="bg-[#444] text-white p-2 mt-4 w-[150px] text-lg rounded-sm hover:bg-[#000] duration-150" type="submit"> Register </button>
      </Form>
    )}
  </Formik>
)};
