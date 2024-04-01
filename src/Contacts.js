import "./Styles/contacts_page_style.css";
import "./Styles/main_style.css";
import Terminal from "./Terminal"

import youtube from "./Images/youtube.png";
import linkedin from "./Images/linkedin.png";
import facebook from "./Images/facebook.png";
import gmail from "./Images/gmail.png";
import stackoverflow from "./Images/stackoverflow.png";

export default function Render_Contacts_Page() {
  return (
    <div className="main_page_div_style">
      <div className="contacts_div_style">
        <Terminal>
          <article className="article_style" style={{ width: "100%" }}>
            <font className="font_init">
              teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;&nbsp;&nbsp;&nbsp;
            </font>
            ./init -contacts
            <br />
            <br />
          </article>

          <div className="contact_unit_style">


            <div className="contact_classifier_div_style_container">
              <div className="contact_classifier_div_style">
                <img
                  className="contacts_img_style"
                  alt="gmail logo"
                  src={stackoverflow}
                />
              </div>
            </div>
            <div className="contact_classifier_value_div_style">
              <p className="contact_classifier_value_style">
                {" "}
                <a
                  className="contact_link_style"
                  href="https://stackoverflow.com/users/16587692/teodor-mihail"
                >
                  https://stackoverflow.com/users/16587692/teodor-mihail
                </a>
              </p>
            </div>

          </div>


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
            <div className="contact_classifier_value_div_style">
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
            <div className="contact_classifier_value_div_style">
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
            <div className="contact_classifier_value_div_style">
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
            <div className="contact_classifier_value_div_style">
              <p className="contact_classifier_value_style">
                teodormihail07@gmail.com
              </p>
            </div>

          </div>

        </Terminal>
      </div>
    </div>
  );
}
