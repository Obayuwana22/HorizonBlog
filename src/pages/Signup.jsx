import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

const Signup = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen ">
      <Form method="" className="border rounded-lg p-5 my-20 md:max-w-md md:mx-auto">
        <div className="mb-10">
          <div className="text-2xl font-bold text-center">Sign Up</div>
          <p className="text-center text-gray-500">
            Create your account to start blogging
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <FormInput
            htmlFor="full name"
            label="Full Name"
            type="text"
            name="full name"
            id="full name"
            placeholder="John Doe"
          />
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
          <FormInput
            htmlFor="confirm password"
            label="Confirm Password"
            type="confirm password"
            name="confirm password"
            id="confirm password"
            placeholder=""
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="">
              I agree to the Terms of <Link>Service</Link> and
              <Link> Privacy Policy</Link>
            </label>
          </div>
        </div>
        <div className="mt-10 mb-5">
          <SubmitBtn text="Sign Up" />
        </div>
        <p className="text-center">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </Form>
    </section>
  );
};
export default Signup;
