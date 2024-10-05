import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";


window.document.body.style.backgroundColor = "#f3f4f6"

const Login = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen ">
      <Form
        method="post"
        className="border rounded-lg p-5 my-20 md:max-w-md md:mx-auto  bg-white"
      >
        <div className="mb-10">
          <div className="text-2xl font-bold text-center mb-2">Login</div>
          <p className="text-center text-gray-500">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <FormInput
            htmlFor="email"
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="John@example.com"
          />
          <FormInput
            htmlFor="password"
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder=""
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="">Remember me</label>
            </div>
            <Link to="/forgotpassword" className="hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="mt-10 mb-5">
          <SubmitBtn text="Log in" />
        </div>
        <p className="text-center">
          Don't have an account? <Link to="/sign up">Sign up</Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
