import "./personal_projects_style.css";
import "./main_style.css";
import eva_logo from "./Eva_Logo.jpg";

var terminal_startup = undefined;
var width = 0;

function Terminal_Startup() {
  var main_bio_div = document.getElementById("personal_projects_div");

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

export default function Render_EVA_AI_Page() {
  return (
    <div className="main_page_div_style">
      <div className="project_div_style">
        <div id="personal_projects_div" className="personal_project_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <div className="project_name_container_style">
                  <h1 className="project_name_style">Eva the A.I assistant</h1>
                </div>

                <div className="project_article_div_style">
                  {/* <div className="small_non_adjustable_image_container_style">
                    <img className="description_image" src={eva_logo} />
                  </div> */}

                  <h2 className="project_sub_title_style">Introduction</h2>

                  <article className="project_article_style">
                    Eva is an AI assistant built with the purpose of helping
                    users multi-task. Eva is built using a set of different
                    technologies and techniques that are explained in detail in
                    this article.
                  </article>

                  <h2 className="project_sub_title_style">Tech stack</h2>

                  <article className="project_article_style">
                    Eva is built using a concatenation of .NET Framework, WPF,
                    and Python. This assemble of technologies is very powerfull
                    due to the fact that .NET Framework offers low level
                    functionalities on the Windows echosystem, C# offers a lot
                    of processing power and functionalities, and Python has a
                    rich assemble of librabries with different purposes and
                    functionalities.
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
         */}
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
