const FormInput = ({ label, heading, value, onChange, type, status }: any) => {
  return (
    <>
      <div>
        <label htmlFor={label}>
          {heading}
          <input
            className={`${status.status === "error" ? "border-red-500" : status.status === "success" ? "border-green-600" : ""} input`}
            value={value}
            onChange={onChange}
            type={type}
            name={label}
            id={label}
            autoComplete="on"
          />
        </label>

        {status.status !== "idle" && (
          <p
            className={`${status.status === "error" ? "text-red-500" : status.status === "success" ? "text-green-600" : ""}`}
          >
            {status.message}
          </p>
        )}
      </div>
    </>
  );
};

export default FormInput;
