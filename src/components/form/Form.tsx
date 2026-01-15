import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import FormInput from "./FormInput";
import FormGender from "./FormGender";
import FormSkills from "./FormSkills";
import FormDepartment from "./FormDepartment";

const Form = () => {
  const {
    submitForm,
    validateName,
    name,
    email,
    emailStatus,
    validateEmail,
    nameStatus,
    age,
    ageStatus,
    validateAge,
    isAgree,
    setIsAgree,
  }: any = useContext(FormContext);

  return (
    <form onSubmit={submitForm} className="flex bg-light-white/70 shadow shadow-gray-400 w-150 mx-auto mt-20 rounded-2xl py-10 px-15 flex-col gap-4">
      <h1 className="font-semibold mb-5 text-center text-2xl">FORM</h1>
      {/* name field */}

      <FormInput
        label={"name"}
        heading={"Employee Name"}
        placeholder={"Name"}
        value={name}
        onChange={validateName}
        type={"text"}
        status={nameStatus}
      />

      {/* email field */}

      <FormInput
        label={"email"}
        heading={"Email Address"}
        placeholder={"Email"}
        value={email}
        onChange={validateEmail}
        type={"email"}
        status={emailStatus}
      />

      {/* age field */}

      <FormInput
        label={"age"}
        heading={"Age"}
        placeholder={"Age"}
        value={age}
        onChange={validateAge}
        type={"text"}
        status={ageStatus}
      />

      {/* gender radio */}
      <FormGender />

      {/* skills checkbox */}
      <FormSkills />

      {/* department dropdown */}
      <FormDepartment />

      {/* terms & conditions */}
      <label className="flex items-center w-fit gap-2 cursor-pointer" htmlFor="terms">
        <input
        className="checkbox"
          onChange={() => setIsAgree(!isAgree)}
          type="checkbox"
          checked={isAgree}
          value="agree"
          name="terms"
          id="terms"
        />
        By clicking this, you agree to our <span className="font-semibold">Terms & Conditions</span>
      </label>

      {/* submit button */}
      <button
        disabled={!isAgree}
        className="w-full h-10 cursor-pointer bg-black rounded mt-5 text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400"
        type="submit"
        value="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
