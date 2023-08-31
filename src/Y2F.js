import CodeSnippet from "./CodeSnippet";
import { Terminal_Startup } from "./GUI_Animations";
import PageUnderDevelopment from "./PageUnderDevelopment";

import "./personal_projects_style.css";
import "./main_style.css";

import main_application_interface from "./main_application_interface.txt"

export default function Render_Y2F() {
  return (
    <div className="main_page_div_style">
      <div className="project_div_style">
        <div id="personal_details_div" className="personal_details_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <div className="project_name_container_style">
                  {/* <PageUnderDevelopment /> */}
                  <h1 className="project_name_style">
                    {" "}
                    Y2F cross platform command line utility{" "}
                  </h1>
                </div>

                <article className="project_article_style">
                  Y2F is a command line utility that has the purpose of
                  downloading YouTube videos as MP4 videos, or converting them
                  to a MP3 audio file and downloading them.
                </article>

                <h2 className="project_sub_title_style">Introduction</h2>

                <article className="project_article_style">
                  The Y2F command line utility allows users to download videos
                  in MP4 or MP3 format directly from their terminals. The
                  application is built in Python, using the{" "}
                  <font className="bold_project_article_section_style">
                    Pytube
                  </font>{" "}
                  library. The Y2F command line utility can be downloaded as a{" "}
                  <font className="bold_project_article_section_style">
                    PIP
                  </font>{" "}
                  package via the command line, through the use of the{" "}
                  <font className="bold_project_article_section_style">
                    pip install git+https://github.com/CSharpTeoMan911/Y2F
                  </font>{" "}
                  on Windows, and{" "}
                  <font className="bold_project_article_section_style">
                    sudo pip install git+https://github.com/CSharpTeoMan911/Y2F
                  </font>{" "}
                  on Linux.
                </article>

                {/* <h2 className="project_sub_title_style">
                  Application structure
                </h2>
                <article className="project_article_style"></article> */}

                <CodeSnippet file={main_application_interface} language={"python"}/>

                {/* <h2 className="project_sub_title_style">Functionalities</h2>
                <article className="project_article_style"></article> */}
                 

                
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
  );
}

Terminal_Startup();
