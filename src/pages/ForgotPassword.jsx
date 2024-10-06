import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

window.document.body.style.backgroundColor = "#f3f4f6";

const ForgotPassword = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen ">
      <Form
        method="post"
        className="border rounded-lg p-5 my-20 md:max-w-md md:mx-auto  bg-white"
      >
        <div className="mb-10">
          <div className="text-2xl font-bold text-center mb-2">
            Forgot Password
          </div>
          <p className="text-center text-gray-500">
            Enter your email to reset your password
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
        </div>
        <div className="mt-10 mb-5">
          <SubmitBtn text="Reset Password" />
        </div>
        <p className="text-center">
          Back to <Link to="/login">Login</Link>
        </p>
      </Form>
    </section>
  );
};
export default ForgotPassword;
