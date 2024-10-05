const FormInput = ({ htmlFor, label, type, name, id, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="border px-3 py-2"
      />
    </div>
  );
};
export default FormInput;
