import "./projects_page_style.css";
import "./main_style.css";

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

function Project_Path_Selection(path) {
  window.location.pathname = "/" + path;
}

export default function Render_Projects_Page() {
  return (
    <div className="main_page_div_style">
      <div className="contacts_div_style">
        <div id="personal_projects_div" className="personal_projects_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <article className="article_style">
                  <font className="font_init">
                    teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;
                  </font>
                  init -projects
                  <br />
                  <br />
                </article>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    Eva AI
                  </h1>
                  <p className="project_classifier_value_style">
                    Eva AI: An AI assitant made with C#, .NET Frameowrk and WPF,
                    that has the purpose of herling users multi-task.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    Python server and client student records system
                  </h1>
                  <p className="project_classifier_value_style">
                    A set of Python console client and server application that
                    allows users to log in and access a student records
                    systemconnected to a MySQL database.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    C# server and client student records system
                  </h1>
                  <p className="project_classifier_value_style">
                    A C# WPF client application and a C# console server
                    application that allows users to log in and access a student
                    records systemconnected to a MySQL database.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    C# secure server and secure client student records system
                  </h1>
                  <p className="project_classifier_value_style">
                    A C# Avalonia framework client application and a C# console
                    server application that allows users to log in and access a
                    student records systemconnected to a MySQL database through
                    the use of advanced security measures.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    YouTube-2-File
                  </h1>
                  <p className="project_classifier_value_style">
                    An application made with C# WPF framework and Python, that
                    has the purpose of downloading YouTube videos or converting
                    videos in an MP3 format
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    Smart Event Organiser
                  </h1>
                  <p className="project_classifier_value_style">
                    An application made with C# WPF framework that allows allows
                    users to schedule events at a certain date, time, and
                    location, and when the event occurs, the user is notified
                    and the route to the event's set location is displayed in
                    Google maps.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">Y2F</h1>
                  <p className="project_classifier_value_style">
                    A cross-platform console application made with Python that
                    allows users to download or convert videos to MP3 format
                    from YouTube.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    TransCryptor
                  </h1>
                  <p className="project_classifier_value_style">
                    A cross-platform Python console application that, through
                    the use of Whysper speech to text engine, allows users to
                    transcribe audio files into text.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    Cisco Network with DHCP and VOIP
                  </h1>
                  <p className="project_classifier_value_style">
                    A simple network built with Cisco devices that uses DHCP and
                    VOIP, made with Cisco Packet Tracer.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    Two large Cisco Networks with DHCP, VOIP, Telnet, and Port
                    and Device level security
                  </h1>
                  <p className="project_classifier_value_style">
                    A simple network built with Cisco devices that uses DHCP and
                    VOIP, made with Cisco Packet Tracer.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    E-ChatGPT
                  </h1>
                  <p className="project_classifier_value_style">
                    A C# and Python application that has embedded ChatGPT,
                    within an embedded web-browser. The application serves the
                    purpose of helping users verify ChatGPT generated code in
                    four languages.
                  </p>
                </button>

                <button
                  className="projects_unit_style"
                  onClick={() => {
                    Project_Path_Selection("Eva_AI");
                  }}
                >
                  <h1 className="project_classifier_title_value_style">
                    Teodor Mihail Blog
                  </h1>
                  <p className="project_classifier_value_style">
                    A dynamic blog site blog written in JavaScript, HTML, CSS,
                    and React Native.
                  </p>
                </button>
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
