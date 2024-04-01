import "./Styles/contacts_page_style.css";
import "./Styles/main_style.css";
import Terminal from "./Terminal"
import ContactsElement from "./ContactsElement";

import youtube from "./Images/youtube.png";
import linkedin from "./Images/linkedin.png";
import facebook from "./Images/facebook.png";
import gmail from "./Images/gmail.png";
import stackoverflow from "./Images/stackoverflow.png";

export default function Render_Contacts_Page() {
  return (
    <div className="main_page_div_style">
      <div className="contacts_div_style">
        <Terminal>
          <article className="article_style" style={{ width: "100%" }}>
            <font className="font_init">
              teodor@teodor-IdeaPad-3-14ITL05:/bin$&nbsp;&nbsp;&nbsp;&nbsp;
            </font>
            ./init -contacts
            <br />
            <br />
          </article>

          <ContactsElement img={stackoverflow} alt="StackOverflow Logo" link="https://stackoverflow.com/users/16587692/teodor-mihail" link_enabled={true}/>
          <ContactsElement img={linkedin} alt="StackOverflow Logo" link=" https://www.linkedin.com/in/teodor-mihail-moldoveanu-59014a235" link_enabled={true}/>
          <ContactsElement img={facebook} alt="StackOverflow Logo" link=" https://www.facebook.com/profile.php?id=61550971446851" link_enabled={true}/>
          <ContactsElement img={youtube} alt="StackOverflow Logo" link="https://www.youtube.com/@TyTy-gm8yb/about" link_enabled={true}/>
          <ContactsElement img={gmail} alt="StackOverflow Logo" link="teodormihail07@gmail.com" link_enabled={false}/>

        </Terminal>
      </div>
    </div>
  );
}
