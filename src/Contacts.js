import "./contacts_page_style.css";
import "./main_style.css";
import youtube from "./youtube.png";
import linkedin from "./linkedin.png";
import facebook from "./facebook.png";
import gmail from "./gmail.png";


var terminal_startup = undefined;
var width = 0;

function Terminal_Startup() {
  var main_bio_div = document.getElementById("personal_contacts_div");

  try {
    if (main_bio_div !== null || main_bio_div !== undefined) {
      if (width < 80) {
        width++;
        var set_width = width + "%";
        main_bio_div.style.width = set_width;
      } else {
        clearInterval(terminal_startup);
      }
    }
  } catch {
    clearInterval(terminal_startup);
  }
}

export default function Render_Contacts_Page() {
  return (
    <div className="main_page_div_style">
      <div className="contacts_div_style">
        <h1 className="page_title_style">Contacts</h1>

        <div id="personal_contacts_div" className="personal_contacts_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <article className="article_style">
                  <font className="font_init">
                    teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;
                  </font>
                  init -contacts
                  <br/>
                  <br/>
                </article>

                <div className="contact_unit_style">
                  <div className="contact_classifier_div_style_container">
                    <div className="contact_classifier_div_style">
                        <img className="contacts_img_style" alt="youtube logo" src={youtube}/>
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
                        <img className="contacts_img_style" alt="linkedin logo" src={linkedin}/>
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
                        <img className="contacts_img_style" alt="facebook logo" src={facebook}/>
                    </div>
                  </div>
                  <p className="contact_classifier_value_style">
                    {" "}
                    <a
                      className="contact_link_style"
                      href="https://m.facebook.com/profile.php?id=100094809404474"
                    >
                      https://m.facebook.com/profile.php?id=100094809404474
                    </a>
                  </p>
                </div>

                <div className="contact_unit_style">
                  <div className="contact_classifier_div_style_container">
                    <div className="contact_classifier_div_style">
                        <img className="contacts_img_style" alt="gmail logo" src={gmail}/>
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

terminal_startup = setInterval(() => {
  Terminal_Startup();
}, 10);

window.addEventListener("beforeunload", (event) => {
  try {
    clearInterval(terminal_startup);
  } catch {}
});

window.addEventListener("beforeload", (event) => {
  try {
    clearInterval(terminal_startup);
  } catch {}
});
