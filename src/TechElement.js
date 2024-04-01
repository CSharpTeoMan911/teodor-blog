import "./Styles/home_page_style.css";
import "./Styles/main_style.css";

export default function TechElement(prop) {
    return (
        <div className="value_unit_style">
            <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">{prop.tech}</p>
            </div>
            <div className="technology_classifier_div_value_style_container">
                <div
                    className="technology_classifier_div_value_style"
                    style={{ width: prop.percent }}
                >
                    {prop.percent}
                </div>
            </div>
        </div>
    );
}