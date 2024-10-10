import { Form, Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import img from "../assets/undrawlogin.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

window.document.body.style.backgroundColor = "#f3f4f6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User login success");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("User login success");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="grid grid-cols-1 justify-center min-h-screen lg:grid-cols-2 lg:items-center">
      <ToastContainer />
      <div>
        <div className="hidden lg:block">
          <img src={img} alt="welcome illustration" />
        </div>
        <Form
          onSubmit={handleLoginSubmit}
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
              placeholder="Password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="">Remember me</label>
              </div>
              <Link to="/forgot password" className="hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-10 mb-5">
            <SubmitBtn text="Log in" onClick={handleLogin} />
          </div>
          <div className="text-center">Or</div>
          <div className="mt-5 mb-5">
            <button
              onClick={handleSignInWithGoogle}
              className="text-blue-700 w-full py-2 border  rounded-lg outline-none"
            >
              Sign in with Google
            </button>
          </div>
          <p className="text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Form>
      </div>
    </section>
  );
};
export default Login;
