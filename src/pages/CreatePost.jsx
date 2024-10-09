import FormInput from "../components/FormInput";

const CreatePost = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen">
      <div className="border rounded-lg p-5 my-20 md:max-w-md md:mx-auto bg-white">
        <form>
          <div className="text-2xl font-bold">Create New Post</div>
          <div className="flex flex-col gap-8">
            <FormInput
              htmlFor="title"
              label="Title"
              type="text"
              name="title"
              id="title"
              placeholder="Enter your post title"
              required={true}
              // value={}
              // onChange={}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="content">Content</label>
              <textarea
                htmlFor="content"
                label="Content"
                type="text"
                name="content"
                id="content"
                placeholder="Write your post content here"
                required={true}
                // value={}
                // onChange={}
                rows="10"
                className="border px-3 py-2 rounded-md outline-offset-4 outline-gray-400"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                className="w-full border px-3 py-2 rounded-md outline-offset-4 outline-gray-400"
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
              </select>
            </div>

            <FormInput
              htmlFor="tags"
              label="Tags"
              type="text"
              name="tags"
              id="tags"
              placeholder="Enter tags separated by commas"
              required={true}
              // value={}
              // onChange={}
            />

            <FormInput
              htmlFor="featured image"
              label="Featured Image"
              type="file"
              name="featured image"
              id="featured image"
              required={true}
              // value={}
              // onChange={}
            />
          </div>
          <div className="flex justify-between mt-10">
            <button className=" border text-black font-semibold px-4 py-2 rounded-lg">
              Save Draft
            </button>
            <button className=" border bg-black text-white font-semibold px-4 py-2 rounded-lg">
              Publish
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
