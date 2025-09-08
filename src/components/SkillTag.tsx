import React from "react";
import "@/sass/common/components/skillTag.sass"
type SkillTagsProps = {
  skills: string[];
};
const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => {
  return (
    <div className="skill-box">
        {skills.map((skill) => {
            const label = skill === "Vue" ? "Vue.js" : skill === "Tailwind" ? "Tailwind-CSS" : skill;
            return (
                <button
                type="button"
                key={skill}
                className={skill}
                >
                {label}
                </button>
            );
        })}
    </div>
  );
};

export default SkillTags;