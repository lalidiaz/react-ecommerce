import { FormInput, SubmitBtn } from "../components";
import {
  Form,
  Link,
  ActionFunction,
  redirect,
  useNavigate,
} from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../hooks";
import { store } from "../store";
import axios from "axios";

interface LoginFormData {
  email: string;
  password: string;
}

interface User {
  name: string;
  userId: string;
  role: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const action: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as LoginFormData;
  try {
    const response = await customFetch.post<LoginResponse>("/auth/login", data);

    store.dispatch(loginUser(response.data));
    toast.success("logged in successfully");
    return redirect("/");
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

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/login", {
        email: "test@user.com",
        password: "test_password",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later.");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="email"
          defaultValue="store_admin@gmail.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="my_secret_password"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
