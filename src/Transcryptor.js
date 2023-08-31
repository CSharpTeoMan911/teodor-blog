import CodeSnippet from "./CodeSnippet";
import {Terminal_Startup} from "./GUI_Animations";
import PageUnderDevelopment from "./PageUnderDevelopment";

import "./personal_projects_style.css";
import "./main_style.css";

export default function Render_Transcryptor() {
  return (
    <div className="main_page_div_style">
      <div className="project_div_style">
        <div id="personal_details_div" className="personal_details_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <div className="project_name_container_style">
                  <PageUnderDevelopment />
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

Terminal_Startup();
