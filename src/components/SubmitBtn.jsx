const SubmitBtn = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-black text-white w-full py-2 rounded-lg"
    >
      {text}
    </button>
  );
};
export default SubmitBtn;
