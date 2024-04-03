import CodeSnippet from "../CodeSnippet";
import PageUnderDevelopment from "../PageUnderDevelopment";

import "../Styles/personal_projects_style.css";
import "../Styles/main_style.css";

import Y2F_main_application_interface from "../Y2F_Code_Snippets/Y2F_main_application_interface.txt";
import Y2F_YouTube_video_download from "../Y2F_Code_Snippets/Y2F_YouTube_video_download.txt";
import Y2F_video_conversion from "../Y2F_Code_Snippets/Y2F_video_conversion.txt";
import Y2F_main_entry_point from "../Y2F_Code_Snippets/Y2F_main_entry_point.txt";
import Y2F_YouTube_operations from "../Y2F_Code_Snippets/Y2F_YouTube_operations.txt";
import Y2F_setup from "../Y2F_Code_Snippets/Y2F_setup.txt";

import { ProjectBody, ProjectTitle, ProjectSubTitle } from "../Components";
import Terminal from "../Terminal";

export default function Render_Y2F() {
  return (
    <ProjectBody>
      <Terminal size={"large"} animation={false}>
        <PageUnderDevelopment />
      </Terminal>
    </ProjectBody>
  );
}

