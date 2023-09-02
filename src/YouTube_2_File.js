import CodeSnippet from "./CodeSnippet";
import { Terminal_Startup } from "./GUI_Animations";
import PageUnderDevelopment from "./PageUnderDevelopment";

import "./personal_projects_style.css";
import "./main_style.css";

export default function Render_YouTube_2_File() {
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

                <div className="project_article_div_style">
                  {/* 
                <div className="small_non_adjustable_image_container_style">
                  <img className="description_image" src={eva_logo} />
                </div> */}

                  {/* 
                <article className="project_article_style">

                </article> 


                <div className="small_non_adjustable_image_container_style">
                  
                </div>

                <font className="bold_project_article_section_style">

                </font>{" "}
                

                <h2 className="project_sub_title_style">

                </h2>
                */}
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
