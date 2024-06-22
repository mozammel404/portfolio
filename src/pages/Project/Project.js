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
            <p>{projects[name].name}</p>
        </div>
    );
}

export default Project;