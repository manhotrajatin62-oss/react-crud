import { createContext } from "react";
import FormStates from "./FormStates";

export const FormContext: any = createContext({});

const FormContextProvider = ({ children }: any) => {
  const {
    name,
    email,
    age,
    gender,
    skills,
    department,
    nameStatus,
    emailStatus,
    ageStatus,
    genderStatus,
    skillStatus,
    departmentStatus,
    isAgree,
    setIsAgree,
    setName,
    setEmail,
    setAge,
    setGender,
    setSkills,
    setDepartment,
    setNameStatus,
    setEmailStatus,
    setAgeStatus,
    setGenderStatus,
    setSkillStatus,
    setDepartmentStatus,
  } = FormStates();

  function validateTextField({ value, regex, setStatus, label }: any) {
    if (!value.trim()) {
      setStatus({ status: "error", message: `${label} is required` });
      return false;
    }

    if (!regex.test(value)) {
      setStatus({ status: "error", message: `${label} is invalid` });
      return false;
    }

    setStatus({ status: "success", message: `${label} is correct` });
    return true;
  }

  function validateName(e: any, value: any) {
    let name;
    if (e) {
      name = e.target.value;
      setName(name);
    } else {
      name = value;
    }
    return validateTextField({
      value: name,
      regex: /^[A-Za-z]{2,}(?:\s[A-Za-z]+)?$/,
      setStatus: setNameStatus,
      label: "Name",
    });
  }

  function validateEmail(e: any, value: any) {
    let email;
    if (e) {
      email = e.target.value;
      setEmail(email);
    } else {
      email = value;
    }

    return validateTextField({
      value: email,
      regex: /^[A-Za-z0-9.]+@[A-Za-z0-9-]+\.(com|gov\.in|in|net)$/,
      setStatus: setEmailStatus,
      label: "Email",
    });
  }

  function validateAge(e: any, value: any) {
    let age;
    if (e) {
      age = e.target.value;
      setAge(age);
    } else {
      age = value;
    }

    const onlyNumbers = /^\d+$/;

    if (!age.trim()) {
      setAgeStatus({
        status: "error",
        message: "Age is required",
      });
      return false;
    }
    if (!onlyNumbers.test(age)) {
      setAgeStatus({
        status: "error",
        message: "Age must contain only numbers",
      });
      return false;
    }

    if (age == 0) {
      setAgeStatus({
        status: "error",
        message: "Age cannot be 0",
      });
      return false;
    }

    if (age > 130) {
      setAgeStatus({
        status: "error",
        message: "Age cannot be more than 130",
      });
      return false;
    }

    setAgeStatus({
      status: "success",
      message: "Age is correct",
    });
    return true;
  }

  function handleSkillChange(e: any) {
    const { value, checked } = e.target;

    setSkills((prevSkills): any => {
      if (checked) {
        return [...prevSkills, value];
      } else {
        return prevSkills.filter((skill) => skill !== value);
      }
    });
  }

  function validateGenderSkillsDepartment(
    isInvalid: any,
    setStatus: any,
    errorMessage: any,
  ) {
    if (isInvalid) {
      setStatus({
        status: "error",
        message: errorMessage,
      });
      return false;
    }

    setStatus({
      status: "idle",
      message: "",
    });
    return true;
  }

  function submitForm(e: any) {
    e.preventDefault();

    const genderValid = validateGenderSkillsDepartment(
      !gender,
      setGenderStatus,
      "Please select a gender",
    );

    const skillsValid = validateGenderSkillsDepartment(
      skills.length === 0,
      setSkillStatus,
      "Please select at least 1 skill",
    );

    const departmentValid = validateGenderSkillsDepartment(
      !department,
      setDepartmentStatus,
      "Please select a department",
    );

    console.log(
      validateName(null, name),
      validateEmail(null, email),
      validateAge(null, age),
      genderValid,
      skillsValid,
      departmentValid,
    );
  }

  return (
    <FormContext.Provider
      value={{
        submitForm,
        validateName,
        name,
        setName,
        email,
        setEmail,
        nameStatus,
        emailStatus,
        validateEmail,
        setSkillStatus,
        age,
        ageStatus,
        validateAge,
        gender,
        setGender,
        genderStatus,
        skills,
        setSkills,
        handleSkillChange,
        setGenderStatus,
        skillStatus,
        department,
        setDepartment,
        departmentStatus,
        isAgree,
        setIsAgree,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
