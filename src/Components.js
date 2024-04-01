import "./Styles/personal_projects_style.css";
import "./Styles/main_style.css";

export function Link(prop) {
    return (
        <a
            className="link_style"
            href={prop.link}
        >
            {prop.children}
        </a>
    );
}

export function Article(prop) {
    return (
        <article className="project_article_style">
            {prop.children}
        </article>
    );
}


export function ProjectTitle(prop) {
    return (
        <div className="project_name_container_style">
            <h1 className="project_name_style">{prop.children}</h1>
        </div>
    );
}

export function Font(prop) {
    return (
        <font className="bold_project_article_section_style">
            {prop.children}
        </font>
    );
}

export function ProjectSubTitle(prop) {
    return (
        <h2 className="project_sub_title_style">{prop.children}</h2>
    );
}

export function LargeAdjustableImage(prop) {
    return (
        <img
            className="large_adjustable_image"
            alt="speech recognition mechanism"
            src={prop.src}
        />
    );
}

export function SmallAdjustableImage(prop) {
    return (
        <img
            className="small_adjustable_image"
            alt={prop.alt}
            src={prop.src}
        />
    );
}


export function ProjectBody(prop) {
    return (
        <div className="main_page_div_style">
            <div className="project_div_style">
                {prop.children}
            </div>
        </div>
    );
}