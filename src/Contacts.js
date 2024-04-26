import "./Styles/contacts_page_style.css";
import "./Styles/main_style.css";
import Terminal from "./Terminal"
import ContactsElement from "./ContactsElement";
import TerminalInitialLine from "./TerminalInitialLine";

import youtube from "./Images/youtube.png";
import linkedin from "./Images/linkedin.png";
import facebook from "./Images/facebook.png";
import gmail from "./Images/gmail.png";
import stackoverflow from "./Images/stackoverflow.png";
import github from "./Images/github.png"

export default function Render_Contacts_Page() {
  return (
    <div className="main_page_div_style">
      <div className="contacts_div_style">
        <Terminal size={"normal"} animation={true}>
          <article className="article_style" style={{ width: "100%" }}>
            <TerminalInitialLine />
            ./init -contacts
            <br />
            <br />
          </article>

          <ContactsElement img={stackoverflow} alt="StackOverflow Logo" link="https://stackoverflow.com/users/16587692/teodor-mihail" link_enabled={true} />
          <ContactsElement img={github} alt="Github Logo" link="https://github.com/CSharpTeoMan911" link_enabled={true} />
          <ContactsElement img={linkedin} alt="Linkedin Logo" link=" https://www.linkedin.com/in/teodor-mihail-moldoveanu-59014a235" link_enabled={true} />
          <ContactsElement img={youtube} alt="Youtube Logo" link="https://www.youtube.com/@TyTy-gm8yb/about" link_enabled={true} />
          <ContactsElement img={gmail} alt="Gmail Logo" link="teodormihail07@gmail.com" link_enabled={false} />

          <br/>
          <br/>
        </Terminal>
      </div>
    </div>
  );
}
