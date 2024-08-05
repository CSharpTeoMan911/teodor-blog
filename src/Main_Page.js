import "./Styles/home_page_style.css";
import "./Styles/main_style.css";
import teodor from "./Images/_teodor.webp";
import Terminal from "./Terminal";
import TechElement from "./TechElement";
import TerminalInitialLine from "./TerminalInitialLine";
import { useEffect } from "react";
import { Name_Animation } from "./GUI_Animations";

export default function Render_Main_Page() {
  const element = <div style={{ color: "white" }}>Hello</div>
  useEffect(()=>{
    Name_Animation();
  }, []);
  return (
    <div className="main_page_div_style">
      <div className="profile_div_style">
        <Terminal size={"normal"} animation={true}>
          <article className="article_style">
            <TerminalInitialLine/>
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
            <TerminalInitialLine/>

            My name is Teodor Mihail. I'm a software engineer that has
            experice with multiple languages, frameworks, and development
            environments and I am currently living in London, United Kingdom. 
            I've done multiple personal projects in which I used different
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
            <h2 className="technology_subtitle_style">Languages</h2>

            <TechElement tech="C#" percent="90%" />
            <TechElement tech="CSS" percent="90%" />
            <TechElement tech="Python" percent="85%" />
            <TechElement tech="JavaScript" percent="75%" />
            <TechElement tech="HTML" percent="75%" />
            <TechElement tech="XAML" percent="75%" />
            <TechElement tech="SQL" percent="70%" />
            <TechElement tech="Java" percent="60%" />

          </div>



          <div className="technologies_div_style">
            <h2 className="technology_subtitle_style">Frameworks</h2>

            <TechElement tech="NET Framework" percent="90%" />
            <TechElement tech=".NET Core" percent="90%" />
            <TechElement tech="WPF" percent="80%" />
            <TechElement tech="WinForms" percent="80%" />
            <TechElement tech="Avalonia" percent="80%" />
            <TechElement tech="Blazor" percent="75%" />
            <TechElement tech="NodeJS" percent="75%" />
            <TechElement tech="React" percent="75%" />
            <TechElement tech="MySQL" percent="70%" />
            <TechElement tech="Bootstrap" percent="70%" />
            <TechElement tech="Radzen" percent="70%" />
            <TechElement tech="UWP" percent="60%" />
            <TechElement tech="JForms" percent="30%" />
          </div>



          <div className="technologies_div_style">
            <h2 className="technology_subtitle_style">
              Technologies
            </h2>

            <TechElement tech="Visual Studio" percent="90%" />
            <TechElement tech="VS Code" percent="80%" />
            <TechElement tech="Pycharm" percent="80%" />
            <TechElement tech="InteliJ" percent="70%" />
            <TechElement tech="Cisco" percent="70%" />
            <TechElement tech="Eclipse" percent="50%" />
            <TechElement tech="Nano" percent="40%" />          
            <TechElement tech="Vim" percent="30%" />  

          </div>
          <br />
          <br />

        </Terminal>

      </div>
    </div>
  );
}

