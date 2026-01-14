const FormInput = ({ label, heading, value, onChange, type, status }: any) => {
  return (
    <>
      <div>
        <label htmlFor={label}>
          {heading}
          <input
            className="input"
            value={value}
            onChange={onChange}
            type={type}
            name={label}
            id={label}
            autoComplete="on"
          />
        </label>

        {status.status !== "idle" && <p>{status.message}</p>}
      </div>
    </>
  );
};

export default FormInput;
