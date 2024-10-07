import { nanoid } from "nanoid";

const ProfileComments = () => {
  const createdPostsComments = [
    {
      id: nanoid(),
      name: "John Doe",
      comment: "This is a comment on a blog post...",
    },
    {
      id: nanoid(),
      name: "John Doe",
      comment: "This is a comment on a blog post...",
    },
    {
      id: nanoid(),
      name: "John Doe",
      comment: "This is a comment on a blog post...",
    },
  ];
  return (
    <div>
      {createdPostsComments.map((comment) => {
        return (
          <div key={comment.id} className="border rounded-lg p-5 mt-5">
            <div className="mb-2 text-xl font-semibold">{comment.name}</div>
            <p className="text-gray-500">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ProfileComments;