import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const FormDepartment = () => {
  const {
    department,
    setDepartment,
    setDepartmentStatus,
    departmentStatus,
  }: any = useContext(FormContext);

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

      {/* department dropdown */}
      <select
        id="department"
        name="department"
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
          setDepartmentStatus({
            status: "idle",
            message: "",
          });
        }}
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

      {/* error message */}

      {departmentStatus.status !== "idle" && (
        <p
          className={`${departmentStatus.status === "error" ? "text-red-500" : departmentStatus.status === "success" ? "text-green-600" : ""}`}
        >
          {departmentStatus.message}
        </p>
      )}
    </div>
  );
};

export default FormDepartment;
