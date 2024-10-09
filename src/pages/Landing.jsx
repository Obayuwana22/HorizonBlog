import { useRef } from "react";
import RecentPosts from "../components/RecentPosts";

const Landing = () => {
  const recentPostRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mt-[80px]">
      <div className="bg-blue-600 text-white p-12 rounded-lg mb-20">
        <h2 className="text-4xl font-bold mb-4">Welcome to HorizonBlog</h2>
        <p className="text-xl mb-6">
          Discover the latest insights and stories from our community.
        </p>
        <button
          type="button"
          className="bg-white text-black font-semibold px-4 py-2  rounded-lg"
          onClick={() => scrollToSection(recentPostRef)}
        >
          Start Reading
        </button>
      </div>
      <div ref={recentPostRef} className="scroll-mt-32">
        <RecentPosts />
      </div>
    </section>
  );
};
export default Landing;
