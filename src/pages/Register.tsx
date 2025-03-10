import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, ActionFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import axios from "axios";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/register", data);
    console.log("response", response);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error);

    let errorMessage = "please double check your credentials";

    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data?.error?.message || errorMessage;

      if (error.response.status === 401 || error.response.status === 403) {
        return redirect("/login");
      }
    }

    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
