import { ErrorMessage, Field, useField } from "formik";

interface Props {
  label?: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const TextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label}
        <input type="text" className="text-input border p-2 m-2 hover:bg-[#eee] duration-150" {...field} {...props} />
      </label>
      <ErrorMessage name={props.name} component={"span"} />
    </>
  );
};
