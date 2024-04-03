import CodeSnippet from "../CodeSnippet";
import PageUnderDevelopment from "../PageUnderDevelopment";

import "../Styles/personal_projects_style.css";
import "../Styles/main_style.css";
import { ProjectBody, ProjectTitle } from "../Components";
import Terminal from "../Terminal";

export default function Render_C_Sharp_Secure_Student_Records_System() {
  return (
    <ProjectBody>
      <Terminal size={"large"} animation={false}>
        <PageUnderDevelopment />
      </Terminal>
    </ProjectBody>
  );
}
