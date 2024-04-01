import "./Styles/home_page_style.css";
import "./Styles/main_style.css";
import teodor from "./Images/teodor.webp";
import { Terminal_Startup, Name_Animation } from "./GUI_Animations";
import Terminal from "./Terminal";


export default function Render_Main_Page() {
  const element = <div style={{ color: "white" }}>Hello</div>
  return (
    <div className="main_page_div_style">


      <div className="profile_div_style">
        {/*  */}

        <Terminal>
          <article className="article_style">
            <font className="font_init">
              teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;&nbsp;&nbsp;
            </font>
            ./init-profile

            <div className="profile">
              <div className="profile_picture_frame_style">
                <div className="profile_picture_div_style">
                  <img className="profile_image_style" alt="Teodor Mihail" src={teodor} />
                </div>
              </div>

              <div className="name_div_style">
                <p id="name" className="name_style"></p>
              </div>
            </div>
            <font className="font_init">
              teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;&nbsp;&nbsp;
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
            code of this web-application is available {" "}
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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">C#</p>
              </div>
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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">Java</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">JS</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">MySQL</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">Python</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">HTML</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">CSS</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">.NET Framework</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">.NET Core</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">WPF</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">UWP</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">WinForms</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">Avalonia</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">React</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">NodeJS</p>
              </div>

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
              <div className="technology_classifier_value_style_tech_div">
                <p className="technology_classifier_value_style">JForms</p>
              </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">Visual Studio</p>
                </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">                  Visual Studio
                    <br />
                    Code</p>
                </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">Vim</p>
                </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">Nano</p>
                </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">Pycharm</p>
                </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">InteliJ</p>
                </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">Eclipse</p>
                </div>

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
                <div className="technology_classifier_value_style_tech_div">
                  <p className="technology_classifier_value_style">Cisco Networking</p>
                </div>

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
            <br />
            <br />
          </div>
        </Terminal>

      </div>
    </div>
  );
}

