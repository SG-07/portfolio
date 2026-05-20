import {
  techStackData,
} from "./techStackData";

import TechCard from "./TechCard";

const TechGrid = () => {
  return (
    <div className="skills-grid">

      {techStackData.map((group) => (
        <div
          key={group.category}
          className="skills-group"
        >

          <h3 className="skills-group-title">
            {group.category}
          </h3>

          <div className="skills-group-items">

            {group.items.map(
              (skill, index) => (
                <TechCard
                  key={skill}
                  skill={skill}
                  index={index}
                />
              )
            )}

          </div>

        </div>
      ))}

    </div>
  );
};

export default TechGrid;