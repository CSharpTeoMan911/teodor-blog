import "./Styles/home_page_style.css";
import "./Styles/main_style.css";
import { MobileView, BrowserView } from "react-device-detect";

export default function TechElement(prop) {
    return (
        <div>
            <BrowserView>
                <div className="value_unit_style">
                    <div className="technology_classifier_value_style_tech_div" style={{ width: "40%" }}>
                        <p className="technology_classifier_value_style">{prop.tech}</p>
                    </div>
                    <div className="technology_classifier_div_value_style_container" style={{ width: "60%" }}>
                        <div
                            className="technology_classifier_div_value_style"
                            style={{ width: prop.percent }}
                        >
                            {prop.percent}
                        </div>
                    </div>

                </div>
            </BrowserView>
            <MobileView>
                <div className="value_unit_style">
                    <div className="technology_classifier_value_style_tech_div" style={{ width: "60%" }}>
                        <p className="technology_classifier_value_style">{prop.tech}{": "}</p>
                    </div>
                    <div className="technology_classifier_div_value_style_container" style={{ width: "40%", flexDirection:"row" }}>
                        <p className="technology_classifier_p_value_style">
                            {prop.percent}
                        </p>
                    </div>

                </div>
            </MobileView>
        </div>

    );
}