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
    <div className="mb-2">
      <p className="text-sm">
        <span className="text-red-500">* </span>Skills
      </p>

      {/* skills checkbox */}
      <div className="mt-2 flex items-center gap-4">
        {skillsArr?.map((item) => {
          return (
            <label className="flex items-center gap-2 cursor-pointer" key={item?.value}>
              <input
                type="checkbox"
                className="checkbox"
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
      </div>

      {/* error message */}
      {skillStatus.status !== "idle" && (
        <p
          className={`${skillStatus.status === "error" ? "text-red-500" : skillStatus.status === "success" ? "text-green-600" : ""} error-msg`}
        >
          {skillStatus.message}
        </p>
      )}
    </div>
  );
};

export default FormSkills;
