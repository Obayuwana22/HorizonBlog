import { Form, Link, useNavigate, useNavigation } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

window.document.body.style.backgroundColor = "#f3f4f6";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const handleClick = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user created successfully:", user);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col justify-center min-h-screen ">
      <ToastContainer />
      <Form
        method="post"
        onSubmit={handleFormSubmit}
        className="border rounded-lg p-5 my-20 md:max-w-md md:mx-auto bg-white"
      >
        <div className="mb-10">
          <div className="text-2xl font-bold text-center mb-2">Sign Up</div>
          <p className="text-center text-gray-500">
            Create your account to start blogging
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <FormInput
            htmlFor="full name"
            label="Full Name"
            type="text"
            name="fullName"
            id="full name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            htmlFor="email"
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="John@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            htmlFor="password"
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="must be atleast 6 digits"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            htmlFor="confirm password"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirm password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* <div>{message}</div> */}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="">
              I agree to the Terms of
              <Link className="text-blue-700"> Service</Link> and
              <Link className="text-blue-700"> Privacy Policy</Link>
            </label>
          </div>
        </div>
        <p className="text-red-700 text-center text-sm mt-5">{message}</p>
        <div className="mt-10 mb-5">
          <SubmitBtn
            text="Sign up"
            onClick={handleClick}
            isLoading={isSubmitting}
          />
        </div>
        <p className="text-center">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </Form>
    </section>
  );
};
export default Signup;
