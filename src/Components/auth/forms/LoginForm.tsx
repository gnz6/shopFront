import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import { loginWithEmail } from "../../../Redux/Reducers/auth/thunks";
import { useAppDispatch } from '../../../Redux/Store/store';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const LoginForm = () => {
  const dispatch  = useAppDispatch()
  const navigate = useNavigate()
  const [modal1, setModal1] = useState(false)

  


  return (
    <Formik 
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        dispatch(loginWithEmail( values.email, values.password ))
        navigate("/")
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
        <div className="sm: border h-screen w-screen items-center pl-[35%] pt-[15%] ">

        <Form className="flex flex-col relative w-[400px] h-[300px]  border-2 bg-white rounded-sm shadow-lg shadow-gray-800 justify-center items-center">
        <div className="w-full flex justify-end pr-8 pt-4">
        <button className="font-bold hover:bg-red-600 hover:text-gray-200 duration-150 w-8 rounded-sm cursor-poiner">X</button>
        </div>

          <h1 className="font-bold text-2xl "> Login </h1>
          <hr></hr>
          <TextInput name="email" type="email" placeholder="l10@gmail.com" />
          <TextInput name="password" type="password" placeholder="******" />
          <button className="bg-[#444] text-white p-2 mt-4 w-[150px] text-lg rounded-sm hover:bg-[#000] duration-150" type="submit"> Login</button>
        </Form>
        </div>
      )}
    </Formik>
  );
};
