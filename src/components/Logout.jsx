import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("logged out");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <button
        type="button"
        onClick={handleLogout}
        className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-lg outline-none"
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
