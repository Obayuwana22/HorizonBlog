import { Calendar, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import ProfilePosts from "../components/ProfilePosts";
import ProfileComments from "../components/ProfileComments";
import ProfileAbout from "../components/ProfileAbout";
import Logout from "../components/Logout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const [currentUser, setCurrentUser] = useState("");

  const tabs = ["Posts", "Comments", "About"];

  const TabContent = ({ activeTab }) => {
    if (activeTab === "Posts") {
      return (
        <div>
          <ProfilePosts />
        </div>
      );
    }
    if (activeTab === "Comments") {
      return (
        <div>
          <ProfileComments />
        </div>
      );
    }
    if (activeTab === "About") {
      return (
        <div>
          <ProfileAbout />
        </div>
      );
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      console.log(userCred);
      setCurrentUser(userCred);
    });
  }, []);

  return (
    <section className="flex flex-col justify-center min-h-screen">
      <div className=" border rounded-lg p-5 my-20 md:max-w-md md:mx-auto bg-white">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="rounded-full w-32 h-32 object-cover bg-gray-300">
            <img src="" alt="Profile picture/avatar" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-md font-bold">{currentUser.displayName}</div>
            <p className="text-gray-500 text-sm">Web Developer</p>
          </div>
          <div className="ml-auto">
            <button
              type="button"
              className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-lg outline-none"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-4 mb-6 mt-10 text-gray-600">
          <div className="flex items-center gap-2 ">
            <Mail color="gray" />
            <span>{currentUser.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar color="gray" />
            <span>Joined June 2023</span>
          </div>
          <Logout />
        </div>
        <div className="flex justify-between bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => {
            return (
              <button
                key={tab}
                className={`w-full text-center py-1 font-semibold outline-none  ${
                  activeTab === tab
                    ? "bg-white text-black rounded-lg shadow"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};
export default Profile;
