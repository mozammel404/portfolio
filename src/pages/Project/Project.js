import projects from "../../projects";
import { useParams } from "react-router-dom";
import "./project.css";

const Project = () => {

    const { name } = useParams();

    if (!Object.keys(projects).includes(name)) {
        return (
            <div className="e404">
                <div>
                    <h1>Error 404</h1>
                    <p>Sorry, "{name}" doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="project-page">
            <div className="wrapper">
                <p className="name">{projects[name].name}</p>
                <p className="details">{projects[name].detail}</p>
                <p>Installation guide and resources are available <a href={projects[name].external_url}>here</a></p>
            </div>
        </div>
    );
}

export default Project;