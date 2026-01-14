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

      {gender.status !== "idle" && <p>{genderStatus.message}</p>}
    </div>
  );
};

export default FormGender;
