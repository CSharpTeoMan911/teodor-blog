import "./Styles/projects_page_style.css";
import "./Styles/main_style.css";
import { Terminal_Startup } from "./GUI_Animations";
import Terminal from "./Terminal";
import ProjectElement from "./ProjectElement";

function Project_Path_Selection(path) {
  window.location.pathname = "/" + path;
}

export default function Render_Projects_Page() {
  return (
    <div className="main_page_div_style">
      <div className="contacts_div_style">
        <Terminal>
          <article className="article_style" style={{ width: "100%" }}>
            <font className="font_init">
              teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;&nbsp;&nbsp;&nbsp;
            </font>
            ./init -projects
            <br />
            <br />
          </article>



          <div className="projects_selection">

            <ProjectElement path={"/Eva_AI"} title={"Eva AI"} description={"Eva AI: An AI assitant made with C#, .NET Frameowrk and WPF, that has the purpose of helping users multi-task."} />
            <ProjectElement path={"/Y2F"} title={"Y2F"} description={"A cross-platform console application made with Python that allows users to download or convert videos to MP3 format from YouTube."} />
            <ProjectElement path={"/Large_Cisco_Network_VOIP_DHCP_TELNET"} title={"Two large Cisco Networks with DHCP, VOIP, Telnet, and Port and Device level security"} description={"A simple network built with Cisco devices that uses DHCP and VOIP, made with Cisco Packet Tracer."} />
            <ProjectElement path={"/Python_Student_Records_System"} title={"Python server and client student records system"} description={"A set of Python console client and server application that allows users to log in and access a student records systemconnected to a MySQL database."} />
            <ProjectElement path={"/CSharp_Secure_Student_Records_System"} title={"C# secure server and secure client student records system"} description={"A C# Avalonia framework client application and a C# console server application that allows users to log in and access a student records systemconnected to a MySQL database through the use of advanced security measures."} />
            <ProjectElement path={"/SmartEventOrganiser"} title={"Smart Event Organiser"} description={"An application made with C# WPF framework that allows allows users to schedule events at a certain date, time, and location, and when the event occurs, the user is notified and the route to the event's set location is displayed in Google maps."} />
            <ProjectElement path={"/TeodorMihailBlog"} title={"Teodor Mihail Blog"} description={"A dynamic blog site blog written in JavaScript, HTML, CSS, and React Native."} />
          </div>
          <br />
          <br />
        </Terminal>
      </div>
    </div>
  );
}