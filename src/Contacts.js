import "./Styles/contacts_page_style.css";
import "./Styles/main_style.css";
import { Terminal_Startup } from "./GUI_Animations";

import youtube from "./Images/youtube.png";
import linkedin from "./Images/linkedin.png";
import facebook from "./Images/facebook.png";
import gmail from "./Images/gmail.png";

export default function Render_Contacts_Page() {
  return (
    <div className="main_page_div_style">
      <div className="contacts_div_style">
        <div id="personal_details_div" className="personal_details_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <article className="article_style">
                  <font className="font_init">
                    teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;
                  </font>
                  init -contacts
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </article>

                <div className="contact_unit_style">
                  <div className="contact_classifier_div_style_container">
                    <div className="contact_classifier_div_style">
                      <img
                        className="contacts_img_style"
                        alt="youtube logo"
                        src={youtube}
                      />
                    </div>
                  </div>
                  <p className="contact_classifier_value_style">
                    {" "}
                    <a
                      className="contact_link_style"
                      href="https://www.youtube.com/@TyTy-gm8yb/about"
                    >
                      https://www.youtube.com/@TyTy-gm8yb/about
                    </a>
                  </p>
                </div>

                <div className="contact_unit_style">
                  <div className="contact_classifier_div_style_container">
                    <div className="contact_classifier_div_style">
                      <img
                        className="contacts_img_style"
                        alt="linkedin logo"
                        src={linkedin}
                      />
                    </div>
                  </div>
                  <p className="contact_classifier_value_style">
                    {" "}
                    <a
                      className="contact_link_style"
                      href="https://www.linkedin.com/in/teodor-mihail-moldoveanu-59014a235"
                    >
                      https://www.linkedin.com/in/teodor-mihail-moldoveanu-59014a235
                    </a>
                  </p>
                </div>

                <div className="contact_unit_style">
                  <div className="contact_classifier_div_style_container">
                    <div className="contact_classifier_div_style">
                      <img
                        className="contacts_img_style"
                        alt="facebook logo"
                        src={facebook}
                      />
                    </div>
                  </div>
                  <p className="contact_classifier_value_style">
                    {" "}
                    <a
                      className="contact_link_style"
                        href="https://www.facebook.com/profile.php?id=61550971446851"
                    >
                        https://www.facebook.com/profile.php?id=61550971446851
                    </a>
                  </p>
                </div>

                <div className="contact_unit_style">
                  <div className="contact_classifier_div_style_container">
                    <div className="contact_classifier_div_style">
                      <img
                        className="contacts_img_style"
                        alt="gmail logo"
                        src={gmail}
                      />
                    </div>
                  </div>
                  <p className="contact_classifier_value_style">
                    teodormihail07@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Terminal_Startup("contacts window");