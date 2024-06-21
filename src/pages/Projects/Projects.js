import "./Projects.css";
import projects from "../../projects";

const Projects = () => {

    window.document.title = "Projects";

    // let regexp = /android|iphone|kindle|ipad/i;
    // let isMob = regexp.test(navigator.userAgent);

    return (
        <section className="projects">
            <div className="thumbnail"></div>
            <h1>Projects</h1>
            <div className="projects-wrapper">
                {
                    Object.values(projects).map(project => {
                        return (
                            <div key={project.url} className="project" onClick={() => window.open(`/project/${project.url}`, "_self")}>
                                <img src={project.thumbnail} alt="" />
                                <p className="name">{project.name}</p>
                                <p className="details">{project.detail}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;

// window.open(`/project/${project.url}`, "_self")