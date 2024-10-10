import { Form, Link, useNavigate, useNavigation } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { auth, provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import img from "../assets/undrawwelcome.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

window.document.body.style.backgroundColor = "#f3f4f6";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const handleClick = async (e) => {
    e.preventDefault();

    if (name === "") {
      toast.error("Please enter your name");
      return;
    }

    if (email === "") {
      toast.error("Please enter your email address");
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address with @");
      return;
    }

    if (password === "" && confirmPassword === "") {
      toast.error("Please enter a secure password");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Account created successfully");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <ToastContainer />
      <div className="grid grid-cols-1 justify-center min-h-screen lg:grid-cols-2 lg:items-center">
        <div className="hidden lg:block">
          <img src={img} alt="welcome illustration" />
        </div>
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
              required={true}
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
              required={true}
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
              required={true}
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
              required={true}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="">
                I agree to the Terms of
                <Link className="text-blue-700"> Service</Link> and
                <Link className="text-blue-700"> Privacy Policy</Link>
              </label>
            </div>
          </div>
          <div className="mt-10 mb-5">
            <SubmitBtn
              text="Sign up"
              onClick={handleClick}
              isLoading={isSubmitting}
            />
          </div>
          <div className="text-center">Or</div>
          <div className="mt-5 mb-5">
            <button
              onClick={handleSignUpWithGoogle}
              className="text-blue-700 w-full py-2 border  rounded-lg outline-none"
            >
              Sign up with Google
            </button>
          </div>
          <p className="text-center">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </Form>
      </div>
    </section>
  );
};
export default Signup;
