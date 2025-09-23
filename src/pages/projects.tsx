import { useState } from "react";
import "@/sass/view/projects.sass";
import SkillTag from "@/components/SkillTag";
import projects from "@/json/project.json";
const ProjectsComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const showProjects = showAll ? projects : projects.slice(0, 4);
  const toggleShowAll = () => setShowAll((prev) => !prev);
  const toggleProjectExpand = (title: string) =>
    setExpandedTitle((prev) => (prev === title ? null : title));
  const isExpanded = (title: string) => expandedTitle === title;
  return (
    <section className="projects-container">
      <div className="projects-wrap">
        <div className="title">
          <span>projects</span>
        </div>
        <div className="project-flex-box">
          <div className="project-list">
            {showProjects.map((p) => (
              <div key={p.title}>
                <div
                  className={`project-box${
                    isExpanded(p.title) ? " expanded" : ""
                  }`}
                >
                  <div className="flex-box">
                    <div className="img-box">
                      <img src={p.imageSrc} alt={p.imageAlt} />
                    </div>
                    <div className="discription-box">
                      {p.url ? (
                        <a href={p.url} target="_blank">
                          <span className={p.url ? "has-url" : ""}>
                            {p.title}
                          </span>
                        </a>
                      ) : (
                        <span>{p.title}</span>
                      )}
                      <SkillTag skills={p.skills} />
                      <button
                        type="button"
                        onClick={() => toggleProjectExpand(p.title)}
                      >
                        <span>
                          {isExpanded(p.title)
                            ? "hide description"
                            : "see description"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="detail-box">
                    <span>{p.subtitle}</span>
                    <div
                      className="discription"
                      dangerouslySetInnerHTML={{ __html: p.description }}
                    ></div>
                    <div className="btn-box">
                      <button
                        type="button"
                        onClick={() => toggleProjectExpand(p.title)}
                      >
                        <span>close</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="more-btn" onClick={toggleShowAll}>
          <span>{showAll ? "show less projects" : "show more projects"}</span>
        </button>
      </div>
      <div className="modal-section">
        <div className="modal-container">
          <div>
            <button type="button"></button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsComponent;
