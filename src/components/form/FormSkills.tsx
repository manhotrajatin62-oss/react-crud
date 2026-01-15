import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const FormSkills = () => {
  const { setSkillStatus, skills, skillStatus, handleSkillChange }: any =
    useContext(FormContext);

  const skillsArr = [
    {
      value: "HTML",
    },
    {
      value: "CSS",
    },
    {
      value: "React JS",
    },
    {
      value: "Tailwind CSS",
    },
  ];

  return (
    <div>
      <p>* Skills</p>

      {/* skills checkbox */}
      {skillsArr?.map((item) => {
        return (
          <label key={item?.value}>
            <input
              type="checkbox"
              value={item?.value}
              id={item?.value}
              name={item?.value}
              checked={skills.includes(item?.value)}
              onChange={(e) => {
                handleSkillChange(e);
                setSkillStatus({
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
      {skillStatus.status !== "idle" && (
        <p
          className={`${skillStatus.status === "error" ? "text-red-500" : skillStatus.status === "success" ? "text-green-600" : ""}`}
        >
          {skillStatus.message}
        </p>
      )}
    </div>
  );
};

export default FormSkills;
