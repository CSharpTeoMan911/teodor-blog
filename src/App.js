import "./Styles/main_style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import right from "./Images/right.png";
import { useState, useEffect } from "react";

import Render_Main_Page from "./Main_Page";
import Render_Projects_Page from "./Projects";
import Render_Contacts_Page from "./Contacts";

import { Expand_Or_Contract_Main_Menu, Expand_Main_Menu_Label, Contract_Main_Menu_Label } from "./GUI_Animations";
import Render_Python_Student_Records_System_Page from "./Personal_Projects_Modules/Python_Student_Records_System";
import Render_C_Sharp_Student_Records_System from "./Personal_Projects_Modules/C_Sharp_Student_Records_System";
import Render_C_Sharp_Secure_Student_Records_System from "./Personal_Projects_Modules/C_Sharp_Secure_Student_Records_System";
import Render_Cisco_Large_Network_DHCP_VOIP_TELNET from "./Personal_Projects_Modules/Cisco_Large_Network_DHCP_VOIP_TELNET";
import Render_Cisco_Netwrok_DHCP_Voip from "./Personal_Projects_Modules/Cisco_Netwrok_DHCP_Voip";
import Render_E_ChatGPT from "./Personal_Projects_Modules/E-ChatGPT";
import Render_Smart_Event_Organiser from "./Personal_Projects_Modules/Smart_Event_Organiser";
import Render_TeodorMihailBlog from "./Personal_Projects_Modules/TeodorMihailBlog";
import Render_Transcryptor from "./Personal_Projects_Modules/Transcryptor";
import Render_Y2F from "./Personal_Projects_Modules/Y2F";
import Render_YouTube_2_File from "./Personal_Projects_Modules/YouTube_2_File";
import Render_EVA_AI_Page from "./Personal_Projects_Modules/Eva_AI";


function Navigate_To_Page(page) {
  window.location.pathname = "/" + page;
}

function App() {
  const [current_title_value, set_title_value] = useState("");
  var body = document.getElementById("main_body");
  body.classList.add("main_body_style");

  //set_title_value("Personal details");

  useEffect(() => {
    if (window.location.pathname === "/") {
      set_title_value("Personal Details");
    } else if (window.location.pathname === "/contacts") {
      set_title_value("Contacts");
    } else {
      set_title_value("Projects");
    }
  });
  return (
    <div>
      {/*// MAIN MENU STRUCTURE
           //
           // [ BEGIN ] */}

      <div className="navigation_bar_style">
        <div className="main_menu_div_style">
          <div className="main_menu_controls_div_style">
            <button className="main_menu_button_style">
              <img
                id="main_menu_button_img"
                alt="menu button"
                className="main_menu_button_img_style"
                src={right}
                onMouseEnter={async() => {
                  await Expand_Main_Menu_Label();
                }}
                onMouseLeave={async() => {
                  await Contract_Main_Menu_Label();
                }}
                onClick={async() => {
                  await Expand_Or_Contract_Main_Menu();
                }}
              />
            </button>
            <div
              id="menu_label_container"
              className="menu_label_container_style"
            >
              <p id="menu_label" className="menu_label_style">
                Menu
              </p>
            </div>
          </div>

          <h1 className="page_title_style">{current_title_value}</h1>
        </div>
      </div>

      <div id="main_menu" className="main_menu_div_items_style">
        <div id="items_container" className="items_container_style">
          <button
            className="menu_item_style"
            onClick={() => {
              Navigate_To_Page("");
            }}
          >
            Details
          </button>
          <button
            className="menu_item_style"
            onClick={() => {
              Navigate_To_Page("projects");
            }}
          >
            Projects
          </button>
          <button
            className="menu_item_style"
            onClick={() => {
              Navigate_To_Page("contacts");
            }}
          >
            Contacts
          </button>
        </div>
      </div>
      {/* // END */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/static/sitemap.xml" Component={Render_Main_Page} />
          <Route exact path="/" Component={Render_Main_Page} />
          <Route exact path="/projects" Component={Render_Projects_Page} />
          <Route exact path="/contacts" Component={Render_Contacts_Page} />
          <Route exact path="/EVA_AI" Component={Render_EVA_AI_Page} />
          <Route
            exact
            path="/Python_Student_Records_System"
            Component={Render_Python_Student_Records_System_Page}
          />
          <Route
            exact
            path="/CSharp_Student_Records_System"
            Component={Render_C_Sharp_Student_Records_System}
          />
          <Route
            exact
            path="/CSharp_Secure_Student_Records_System"
            Component={Render_C_Sharp_Secure_Student_Records_System}
          />
          <Route exact path="/YouTube2File" Component={Render_YouTube_2_File} />
          <Route
            exact
            path="/SmartEventOrganiser"
            Component={Render_Smart_Event_Organiser}
          />
          <Route exact path="/Y2F" Component={Render_Y2F} />
          <Route exact path="/TransCryptor" Component={Render_Transcryptor} />
          <Route
            exact
            path="/Cisco_Network_VOIP_DHCP"
            Component={Render_Cisco_Netwrok_DHCP_Voip}
          />
          <Route
            exact
            path="/Large_Cisco_Network_VOIP_DHCP_TELNET"
            Component={Render_Cisco_Large_Network_DHCP_VOIP_TELNET}
          />
          <Route exact path="/E_ChatGPT" Component={Render_E_ChatGPT} />
          <Route
            exact
            path="/TeodorMihailBlog"
            Component={Render_TeodorMihailBlog}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
