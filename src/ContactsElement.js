import "./Styles/contacts_page_style.css";
import "./Styles/main_style.css";

export default function ContactsElement(prop) {
    let link = undefined;
    if (prop.link_enabled === true) {
        link = <a
            className="contact_link_style"
            href={prop.link}
        >
            {prop.link}
        </a>
    }
    else
    {
        link = prop.link;
    }

    return (
        <div className="contact_unit_style">


            <div className="contact_classifier_div_style_container">
                <div className="contact_classifier_div_style">
                    <img
                        className="contacts_img_style"
                        alt={prop.alt}
                        src={prop.img}
                    />
                </div>
            </div>
            <div className="contact_classifier_value_div_style">
                <p className="contact_classifier_value_style">
                    {" "}
                    {link}
                </p>
            </div>

        </div>
    );
}