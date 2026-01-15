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
    <div className="flex flex-col mb-2 items-start gap-2">
      <label htmlFor="department" className="cursor-pointer">
        <p className="text-sm">
          <span className="text-red-500">* </span>Department
        </p>
      </label>

      {/* department dropdown */}
      <div className="relative h-10 w-full">
        <select
          className="h-full text-sm w-full cursor-pointer appearance-none rounded border-2 border-gray-300 bg-white px-4 outline-0 focus:border-black"
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
            --select--
          </option>
          {optionsArr?.map((item) => {
            return (
              <option key={item?.value} value={item?.value}>
                {item?.value}
              </option>
            );
          })}
        </select>

        <svg
          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 7l5 5 5-5H5z" />
        </svg>
      </div>

      {/* error message */}

      {departmentStatus.status !== "idle" && (
        <p
          className={`${departmentStatus.status === "error" ? "text-red-500" : departmentStatus.status === "success" ? "text-green-600" : ""} error-msg`}
        >
          {departmentStatus.message}
        </p>
      )}
    </div>
  );
};

export default FormDepartment;
