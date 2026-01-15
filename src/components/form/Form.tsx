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
    <form
      onSubmit={submitForm}
      className="bg-light-white/70 mx-auto mt-20 flex w-[90%] flex-col gap-4 rounded-2xl p-4 shadow shadow-gray-400 lg:w-150 lg:px-15 lg:py-10"
    >
      <h1 className="text-center text-xl font-semibold mt-5 lg:mt-0 lg:mb-5 lg:text-2xl">
        FORM
      </h1>
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
      <label
        className="flex w-fit text-xs lg:text-sm cursor-pointer items-center gap-2"
        htmlFor="terms"
      >
        <input
          className="checkbox"
          onChange={() => setIsAgree(!isAgree)}
          type="checkbox"
          checked={isAgree}
          value="agree"
          name="terms"
          id="terms"
        />
        <p>By clicking this, you agree to our{" "}
        <span className="font-semibold">Terms & Conditions</span></p>
      </label>

      {/* submit button */}
      <button
        disabled={!isAgree}
        className="mt-5 mb-5 lg:mb-0 h-8 lg:h-10 w-full text-xs lg:text-sm cursor-pointer rounded bg-black text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
        type="submit"
        value="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
