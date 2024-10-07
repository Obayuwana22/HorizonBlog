import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen">
      <div className=" border rounded-lg p-5 my-20 md:max-w-md md:mx-auto bg-white">
        <div className="flex flex-col items-center">
          <div className="rounded-full w-32 h-32 object-cover bg-gray-300">
            <img src="" alt="Profile picture/avatar" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl font-bold">John Doe</div>
            <p className="text-gray-500">Web Developer</p>
          </div>
          <div>
            <button>Edit Profile</button>
          </div>
        </div>
        <Link to="/sign up">Sign up</Link>
      </div>
    </section>
  );
};
export default Profile;
