import CodeSnippet from "./CodeSnippet";

import PageUnderDevelopment from "./PageUnderDevelopment";

import "./personal_projects_style.css";
import "./main_style.css";


var terminal_startup = undefined;
var width = 0;

function Terminal_Startup() {
  var main_bio_div = document.getElementById("personal_projects_div");

  try {
    if (main_bio_div !== null || main_bio_div !== undefined) {
      if (width < 100) {
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

export default function Render_C_Sharp_Secure_Student_Records_System() {
  return (
    <div className="main_page_div_style">
      <div className="project_div_style">
        <div id="personal_projects_div" className="personal_project_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <div className="project_name_container_style">
                    <PageUnderDevelopment/>
                  {/* <h1 className="project_name_style"> * PROJECT TITLE * </h1> */}
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
