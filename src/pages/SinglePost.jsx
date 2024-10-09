import { User, Calendar, Share2 } from "lucide-react";
import { blogCards } from "../../data";
import img from "../assets/blogpostimg.jpg";

const SinglePost = () => {
  const recentPosts = blogCards.slice(0, 2);

  return (
    <section>
      <div className="max-w-3xl mx-auto mt-[150px]">
        <img
          src={img}
          alt="Post header"
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">
          The Future of Web Development
        </h1>
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">John Doe</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">June 1, 2023</span>
          </div>
        </div>
        <div className="prose max-w-none mb-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4">
            The Rise of AI in Web Development
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <blockquote className="flex my-5 w-auto">
            <div className="min-w-1 h-auto bg-gray-300 "></div>
            <p className="font-semibold italic ml-5">
              "The future of web development is not just about coding, it's
              about creating experiences that resonate with users on a deeper
              level."
            </p>
          </blockquote>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="flex items-center border text-black font-semibold px-4 py-2 rounded-lg">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </button>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Comments</h3>
          <div className="flex flex-col gap-5 border text-black px-4 py-3 rounded-lg">
            <div>
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6 text-gray-400" />
                <div className="text-xl font-semibold">Alice Johnson</div>
              </div>
            </div>
            <div>
              <p>
                Great article! I especially liked the part about AI in web
                development. It's fascinating to see how quickly the field is
                evolving.
              </p>
            </div>
            <div className="text-sm text-gray-500">Posted on June 2, 2023</div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((recentPost) => {
              const { id, img, title, text, avatar, name } = recentPost;
              return (
                <div
                  key={id}
                  className="flex flex-col gap-10 border rounded-lg p-5 "
                >
                  <img
                    src={img}
                    alt="blog image"
                    className="rounded-tr-lg rounded-tl-lg"
                  />
                  <div className="text-xl font-semibold">{title}</div>
                  <p className="text-gray-500">{text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <div>{avatar}</div>
                      <span>{name}</span>
                    </div>
                    <button className=" border text-black font-semibold px-4 py-2 rounded-lg">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SinglePost;

// {[1, 2].map((post) => (
//     <div key={post}>
//       <div>
//         <img src={`/placeholder.svg?height=200&width=400`} alt="Related post thumbnail" className="rounded-t-lg" />
//         <div className="mt-4">Related Blog Post {post}</div>
//       </div>
//       <div>
//         <p className="text-muted-foreground">A brief excerpt from the related blog post...</p>
//       </div>
//       <div>
//         <button>Read More</button>
//       </div>
//     </div>
//   ))}
