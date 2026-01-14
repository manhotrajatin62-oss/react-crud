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
    <form onSubmit={submitForm} className="flex flex-col gap-4">
      <h1>FORM</h1>
      {/* name field */}

      <FormInput
        label={"name"}
        heading={"* Employee Name"}
        value={name}
        onChange={validateName}
        type={"text"}
        status={nameStatus}
      />

      {/* email field */}

      <FormInput
        label={"email"}
        heading={"* Email"}
        value={email}
        onChange={validateEmail}
        type={"email"}
        status={emailStatus}
      />

      {/* age field */}

      <FormInput
        label={"age"}
        heading={"* Age"}
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
      <FormDepartment/>

      {/* terms & conditions */}
      <label htmlFor="terms">
        <input onChange={()=>setIsAgree(!isAgree)} type="checkbox" value="agree" name="terms" id="terms" />
        By clicking this, you agree to our terms & conditions
      </label>

      {/* submit button */}
      <button disabled={!isAgree} className="disabled:bg-black w-fit" type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
