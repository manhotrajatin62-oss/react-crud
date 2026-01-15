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
    <div>
      <p>* Gender</p>

      {/* gender radio buttons */}
      {genderArr?.map((item) => {
        return (
          <label key={item?.value}>
            <input
              type="radio"
              name="gender"
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

      {/* error message */}
      {genderStatus.status !== "idle" && (
        <p
          className={`${genderStatus.status === "error" ? "text-red-500" : genderStatus.status === "success" ? "text-green-600" : ""}`}
        >
          {genderStatus.message}
        </p>
      )}
    </div>
  );
};

export default FormGender;
