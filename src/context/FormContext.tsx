import { createContext, useState } from "react";

export const FormContext: any = createContext({});

const FormContextProvider = ({ children }: any) => {
  // form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [department, setDepartment] = useState("");

  // form input error message states
  const [nameStatus, setNameStatus] = useState({
    status: "idle",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState({
    status: "idle",
    message: "",
  });
  const [ageStatus, setAgeStatus] = useState({
    status: "idle",
    message: "",
  });
  const [genderStatus, setGenderStatus] = useState({
    status: "idle",
    message: "",
  });
  const [skillStatus, setSkillStatus] = useState({
    status: "idle",
    message: "",
  });
  const [departmentStatus, setDepartmentStatus] = useState({
    status: "idle",
    message: "",
  });

  const [isAgree, setIsAgree] = useState(false); // terms & conditions checkbox
  const [tableData, setTableData] = useState([]); // table data
  const [editingId, setEditingId] = useState(null); // which row ID is being edited in the table data

  const [modalType, setModalType] = useState(""); // modal type : deleteModal , viewModal
  const [selectedRow, setSelectedRow] = useState<any>(); // keep a single row for viewModal
  const [showModal, setShowModal] = useState(false); // show/hide modal
  const [deleteId, setDeleteId] = useState(null); // which row ID to delete from the table

  // validate name and email
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

  // validate age
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

  // update skills in the skills state
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

  // validate gender, skills, department sections
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

  // submit form
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

    // if all input fields are empty; show error message
    if (
      (!validateName(null, name) &&
        !validateEmail(null, email) &&
        !validateAge(null, age)) ||
      !genderValid ||
      !skillsValid ||
      !departmentValid
    )
      return;

    const existingData = JSON.parse(localStorage.getItem("form-data") || "[]");
    let updatedData;

    if (editingId) {
      updatedData = existingData.map((item: any) =>
        item.id === editingId
          ? { ...item, name, email, age, gender, department, skills }
          : item,
      );
    } else {
      updatedData = [
        ...existingData,
        {
          id: Date.now(),
          name,
          email,
          age,
          gender,
          department,
          skills,
        },
      ];
    }

    localStorage.setItem("form-data", JSON.stringify(updatedData));

    setTableData(updatedData);

    setEditingId(null);

    // clear all error states
    setName("");
    setNameStatus({
      status: "idle",
      message: "",
    });

    setEmail("");
    setEmailStatus({
      status: "idle",
      message: "",
    });

    setAge("");
    setAgeStatus({
      status: "idle",
      message: "",
    });

    setGender("");
    setGenderStatus({
      status: "idle",
      message: "",
    });

    setSkills([]);
    setSkillStatus({
      status: "idle",
      message: "",
    });

    setDepartment("");
    setDepartmentStatus({
      status: "idle",
      message: "",
    });

    setIsAgree(false);
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
        setAge,
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
        setDepartmentStatus,
        isAgree,
        setIsAgree,
        tableData,
        setTableData,
        setEditingId,
        modalType,
        setModalType,
        selectedRow,
        setSelectedRow,
        deleteId,
        setDeleteId,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
