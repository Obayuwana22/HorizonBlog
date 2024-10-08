const FormInput = ({
  htmlFor,
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
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
        value={value}
        onChange={onChange}
        required={required}
        className="border px-3 py-2 rounded-md outline-offset-4 outline-gray-400"
      />
    </div>
  );
};
export default FormInput;
