import "./Styles/home_page_style.css";
import "./Styles/main_style.css";
import teodor from "./Images/teodor.png";
import { Terminal_Startup, Name_Animation } from "./GUI_Animations";


export default function Render_Main_Page() {
  return (
    <div className="main_page_div_style">
      <img className="matrix_img_style" alt="matrix animation background"/>

      <div className="profile_div_style">
        <div className="profile_picture_frame_style">
          <div className="profile_picture_div_style">
            <img className="profile_image_style" alt="Teodor Mihail" src={teodor} />
          </div>
        </div>

        <div className="name_div_style">
          <p id="name" className="name_style"></p>
        </div>

        <div id="personal_details_div" className="personal_details_div_style">
          <div id="crt_div_screen" className="crt_div_screen_style">
            <div id="crt_div" className="crt_div_style">
              <div className="crt_content_div_style">
                <article className="article_style">
                  <font className="font_init">
                    teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;
                  </font>
                  My name is Teodor Mihail. I'm a software engineer that has
                  experice with multiple languages, frameworks, and development
                  environments. I am originally from Romania, Bucharest,
                  currently living in United Kingdom, London, and studying
                  software engineering at the University of Bolton. I've done
                  multiple personal projects in which I used different
                  technologies and techniques through which I achieved my goals.
                  The level of proficiency in multiple languages, technologies
                  and frameworks from 0% to 100% is displayed below. The source
                  code of this website is available {" "}
                  <a
                    className="link_style"
                    href="https://github.com/CSharpTeoMan911/teodor-blog"
                  >
                    here
                  </a>
                  .
                </article>

                <div className="technologies_div_style">
                  <p className="technology_subtitle_style">Languages</p>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">C#</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">Java</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "60%" }}
                      >
                        60%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">JS</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "70%" }}
                      >
                        70%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">MySql</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "70%" }}
                      >
                        70%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">Python</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "85%" }}
                      >
                        85%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">HTML</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "75%" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">CSS</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "75%" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="technologies_div_style">
                  <p className="technology_subtitle_style">Frameworks</p>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">
                      .NET Framework
                    </p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">
                      .NET Core
                    </p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">WPF</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">UWP</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "70%" }}
                      >
                        70%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">
                      WinForms
                    </p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">
                      Avalonia
                    </p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">React</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "75%" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">NodeJS</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "75%" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>

                  <div className="value_unit_style">
                    <p className="technology_classifier_value_style">JForms</p>
                    <div className="technology_classifier_div_value_style_container">
                      <div
                        className="technology_classifier_div_value_style"
                        style={{ width: "60%" }}
                      >
                        60%
                      </div>
                    </div>
                  </div>

                  <div className="technologies_div_style">
                    <p className="technology_subtitle_style">
                      Development environments and technologies
                    </p>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">
                        Visual Studio
                      </p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                    </div>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">
                        Visual Studio
                        <br />
                        Code
                      </p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "80%" }}
                        >
                          80%
                        </div>
                      </div>
                    </div>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">Vim</p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "30%" }}
                        >
                          30%
                        </div>
                      </div>
                    </div>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">Nano</p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "40%" }}
                        >
                          40%
                        </div>
                      </div>
                    </div>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">
                        Pycharm
                      </p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "80%" }}
                        >
                          80%
                        </div>
                      </div>
                    </div>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">
                        InteliJ
                      </p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "70%" }}
                        >
                          70%
                        </div>
                      </div>
                    </div>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">
                        Eclipse
                      </p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "50%" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>

                    <div className="value_unit_style">
                      <p className="technology_classifier_value_style">
                        Cisco Networking
                      </p>
                      <div className="technology_classifier_div_value_style_container">
                        <div
                          className="technology_classifier_div_value_style"
                          style={{ width: "70%" }}
                        >
                          70%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Terminal_Startup("main window");
Name_Animation();
