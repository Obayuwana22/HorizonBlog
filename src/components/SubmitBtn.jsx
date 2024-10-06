
const SubmitBtn = ({ text, onClick, isLoading }) => {
 
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-black text-white w-full py-2 rounded-lg outline-none"
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="loading text-white">Hi</div>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};
export default SubmitBtn;
