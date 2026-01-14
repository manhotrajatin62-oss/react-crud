import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const FormDepartment = () => {
  const { department, setDepartment, departmentStatus }: any =
    useContext(FormContext);

  const optionsArr = [
    {
      value: "Open Source",
    },
    {
      value: "IT",
    },
    {
      value: "HR",
    },
    {
      value: "MoogleLabs",
    },
    {
      value: "Bugraptors",
    },
  ];

  return (
    <div>
      <label htmlFor="department">* Department</label>

      <select
        id="department"
        name="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="" disabled>
          -select-
        </option>
        {optionsArr?.map((item) => {
          return (
            <option key={item?.value} value={item?.value}>
              {item?.value}
            </option>
          );
        })}
      </select>

      {departmentStatus.status !== "idle" && <p>{departmentStatus.message}</p>}
    </div>
  );
};

export default FormDepartment;
