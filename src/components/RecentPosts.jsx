import { blogCards } from "../../data";

const RecentPosts = () => {
  return (
    <section>
      <div>
        <h3 className="text-2xl font-bold mb-6">RecentPosts</h3>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {blogCards.map((card) => {
            const { id, img, title, text, avatar, name } = card;
            return (
              <div key={id} className="flex flex-col gap-10 border rounded-lg p-5 ">
                  <img src={img} alt="blog image" className="rounded-tr-lg rounded-tl-lg" />
                <div className="text-xl font-semibold">{title}</div>
                <p className="text-gray-500">{text}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <div>{avatar}</div>
                    <span>{name}</span>
                  </div>
                  <button className="bg-white border text-black font-semibold px-4 py-2 rounded-lg">
                    Read More
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
export default RecentPosts;
