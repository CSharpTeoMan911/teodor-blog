import "./Styles/projects_page_style.css";
import "./Styles/main_style.css";

export default function ProjectElement(prop) {
    return (
        <button
            className="projects_unit_style"
            onClick={() => {
                window.location.pathname = prop.path;
            }}
        >
            <h1 className="project_classifier_title_value_style">
                {prop.title}
            </h1>
            <br />
            <p className="project_classifier_value_style">
                {prop.description}
            </p>
        </button>
    );
}