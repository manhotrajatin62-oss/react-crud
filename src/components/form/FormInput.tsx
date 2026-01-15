const FormInput = ({
  label,
  heading,
  value,
  onChange,
  type,
  status,
  placeholder,
}: any) => {
  return (
    <>
      <div className="h-20">

        {/* input field */}
        <div className="flex flex-col gap-2">

          <label htmlFor={label} className="w-fit cursor-pointer">
            <p className="text-sm">
              <span className="text-red-500">* </span>
              {heading}
            </p>
          </label>
          
          <input
            className={`${status.status === "error" ? "border-red-500" : status.status === "success" ? "border-green-600" : ""} input`}
            value={value}
            onChange={onChange}
            type={type}
            name={label}
            id={label}
            placeholder={placeholder}
            autoComplete="on"
          />

        </div>

        {/* error message */}
        {status.status !== "idle" && (
          <p
            className={`${status.status === "error" ? "text-red-500" : status.status === "success" ? "text-green-600" : ""} error-msg`}
          >
            {status.message}
          </p>
        )}
      </div>
    </>
  );
};

export default FormInput;
