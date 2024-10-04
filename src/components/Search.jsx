import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className="relative text-gray-400">
      <BiSearchAlt className="absolute top-3 left-3" />
      <input
        type="text"
        placeholder="Search..."
        className="px-10 py-1 w-full border-2 text-black outline-gray-400 rounded-md"
      />
    </div>
  );
};
export default Search;
