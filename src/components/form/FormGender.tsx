import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const FormGender = () => {
  const { setGender, genderStatus, gender, setGenderStatus }: any =
    useContext(FormContext);

  const genderArr = [
    {
      value: "Male",
    },
    {
      value: "Female",
    },
    {
      value: "Other",
    },
  ];

  return (
    <div className="mb-2">
      <p className="text-xs lg:text-sm">
        <span className="text-red-500">* </span>Gender
      </p>

      {/* gender radio buttons */}
      <div className="mt-2 flex text-xs lg:text-sm items-center gap-4">
        {genderArr?.map((item) => {
          return (
            <label className="flex cursor-pointer items-center gap-2" key={item?.value}>
              <input
                type="radio"
                name="gender"
                className="radio"
                value={item?.value}
                checked={gender === item?.value}
                onChange={(e) => {
                  setGender(e.target.value);
                  setGenderStatus({
                    status: "idle",
                    message: "",
                  });
                }}
              />
              {item?.value}
            </label>
          );
        })}
      </div>

      {/* error message */}
      {genderStatus.status !== "idle" && (
        <p
          className={`${genderStatus.status === "error" ? "text-red-500" : genderStatus.status === "success" ? "text-green-600" : ""} error-msg`}
        >
          {genderStatus.message}
        </p>
      )}
    </div>
  );
};

export default FormGender;
