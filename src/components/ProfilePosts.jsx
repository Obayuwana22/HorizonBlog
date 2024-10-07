import { nanoid } from "nanoid";

const ProfilePosts = () => {
  const createdPosts = [
    {
      id: nanoid(),
      title: "Blog Post 1",
      content: "This is a brief excerpt from the blog post...",
    },
    {
      id: nanoid(),
      title: "Blog Post 2",
      content: "This is a brief excerpt from the blog post...",
    },
    {
      id: nanoid(),
      title: "Blog Post 3",
      content: "This is a brief excerpt from the blog post...",
    },
  ];
  return (
    <div>
      {createdPosts.map((post) => {
        return (
          <div key={post.id} className="border rounded-lg p-5 mt-5 ">
            <div className="mb-10 text-2xl font-semibold">{post.title}</div>
            <p className="text-gray-500">{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ProfilePosts;
