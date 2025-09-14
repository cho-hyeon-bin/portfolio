import { useState } from "react";
import "@/sass/view/projects.sass";
import SkillTag from "@/components/SkillTag";
import projects from "@/json/project.json";
const ProjectsComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const showProjects = showAll ? projects : projects.slice(0, 4);
  return (
    <section className="projects-container">
      <div className="projects-wrap">
        <div className="title">
          <span>projects</span>
        </div>
        <div className="project-flex-box">
          <div className="project-list">
            {showProjects.map((p) => (
              <div className="test" key={p.title}>
                <div className="project-box">
                  <div className="flex-box">
                    <div className="img-box">
                      <img src={p.imageSrc} alt={p.imageAlt} />
                    </div>
                    <div className="discription-box">
                      {p.url ? (
                        <a href={p.url} target="_blank">
                          <span className={p.url && "has-url"}>{p.title}</span>
                        </a>
                      ) : (
                        <span>{p.title}</span>
                      )}
                      <SkillTag skills={p.skills} />
                      <button>
                        <span>see detail</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="detail-box"
                    dangerouslySetInnerHTML={{ __html: p.discripton }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="more-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
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
