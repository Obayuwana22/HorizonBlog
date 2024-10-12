import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiUser } from "react-icons/fi";
import fallbackimg from "../assets/blogpostimg.jpg";

const url = `http://api.mediastack.com/v1/news?access_key=${
  import.meta.env.VITE_NEWS_API_KEY
}`;

const Posts = () => {
  const [postCards, setPostCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setPostCards(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading mx-auto mt-[200px]"></div>;
  }

  return (
    <section>
      <div className="mt-[150px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3">
          {postCards.map((card, index) => {
            const { image, title, author, description } = card;

            const imgSrc = image && image !== "" ? image : fallbackimg;
            return (
              <div
                key={index}
                className="flex flex-col gap-10 border rounded-lg p-5 "
              >
                <div>
                  <img
                    src={imgSrc}
                    alt="blog image"
                    className="rounded-tr-lg rounded-tl-lg w-full max-h-[200px] object-cover"
                  />
                </div>
                <div className="text-xl font-semibold">{title}</div>
                <p className="text-gray-500">{description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-gray-500 ">
                    <div>
                      <FiUser />
                    </div>
                    <span>{author ? author : "unknown author"}</span>
                  </div>
                  <button className="border text-black font-semibold px-4 py-2 rounded-lg">
                    <Link to="/home/single-post"> Read More</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Posts;
