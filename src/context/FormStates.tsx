import { useState } from "react";

const FormStates = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [department, setDepartment] = useState("");

  const [isAgree, setIsAgree] = useState(false)

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

  return {
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
    isAgree,
    setIsAgree
  };
};

export default FormStates;
