import "./main_style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import right from "./right.png";
import down from "./down.png";
import { useState, useEffect } from "react";

import Render_Main_Page from "./Main_Page";
import Render_Projects_Page from "./Projects";
import Render_Contacts_Page from "./Contacts";

import Render_Python_Student_Records_System_Page from "./Python_Student_Records_System";
import Render_C_Sharp_Student_Records_System from "./C_Sharp_Student_Records_System";
import Render_C_Sharp_Secure_Student_Records_System from "./C_Sharp_Secure_Student_Records_System";
import Render_Cisco_Large_Network_DHCP_VOIP_TELNET from "./Cisco_Large_Network_DHCP_VOIP_TELNET";
import Render_Cisco_Netwrok_DHCP_Voip from "./Cisco_Netwrok_DHCP_Voip";
import Render_E_ChatGPT from "./E-ChatGPT";
import Render_Smart_Event_Organiser from "./Smart_Event_Organiser";
import Render_TeodorMihailBlog from "./TeodorMihailBlog";
import Render_Transcryptor from "./Transcryptor";
import Render_Y2F from "./Y2F";
import Render_YouTube_2_File from "./YouTube_2_File";
import Render_EVA_AI_Page from "./Eva_AI";

// MAIN MENU ANIMATION VARIABLES
//
// [ BEGIN ]

var label_width = 0;

var menu_height = 0;

var expand_main_menu_label = undefined;

var expand_main_menu = undefined;

var expanded_or_contracted = 0;

// [ END ]

// MAIN MENU ANIMATION FUNCTIONS
//
// [ BEGIN ]

function Expand_Main_Menu_Label() {
  if (expanded_or_contracted === 0 || expanded_or_contracted === 2) {
    try {
      if (label_width < 25) {
        var menu_label = document.getElementById("menu_label");
        label_width++;

        menu_label.style.width = label_width + "vmin";
        menu_label.style.visibility = "visible";
      } else {
        clearInterval(expand_main_menu_label);
      }
    } catch {
      clearInterval(expand_main_menu_label);
    }
  } else {
    clearInterval(expand_main_menu_label);
  }
}

function Contract_Main_Menu_Label() {
  if (expanded_or_contracted === 0 || expanded_or_contracted === 2) {
    var menu_label = document.getElementById("menu_label");
    label_width = 0;
    menu_label.style.width = label_width + "vmin";
    menu_label.style.visibility = "hidden";
  }
  clearInterval(expand_main_menu_label);
}

function Expand_Or_Contract_Main_Menu() {
  expanded_or_contracted++;

  if (expanded_or_contracted === 1) {
    Expand_Main_Menu();
  } else if (expanded_or_contracted === 2) {
    Contract_Main_Menu();
    expanded_or_contracted = 0;
  }
}

function Expand_Main_Menu_Animation() {
  var menu = document.getElementById("main_menu");
  if (menu_height < 32) {
    menu_height++;
    menu.style.height = menu_height + "vmin";
    menu.style.visibility = "visible";
  } else {
    var items = document.getElementById("items_container").children;
    for (var i = 0; i < items.length; i++) {
      items[i].style.visibility = "visible";
      items[i].style.minHeight = "6.5vmin";
      items[i].style.height = "auto";
    }
    menu.style.height = "32vmin";

    clearInterval(expand_main_menu);
  }
}

function Expand_Main_Menu() {
  var menu_label = document.getElementById("menu_label");
  label_width = 25;
  menu_label.style.width = label_width + "vmin";
  menu_label.style.visibility = "visible";

  if (expanded_or_contracted === 1) {
    var img = document.getElementById("main_menu_button_img");
    img.src = down;

    expand_main_menu = setInterval(() => {
      Expand_Main_Menu_Animation();
    }, 10);
  } else {
    clearInterval(expand_main_menu);
  }
}

function Contract_Main_Menu() {
  var img = document.getElementById("main_menu_button_img");
  img.src = right;

  var menu_label = document.getElementById("menu_label");
  label_width = 0;
  menu_label.style.width = label_width + "vmin";
  menu_label.style.visibility = "hidden";

  menu_height = 0;
  var menu = document.getElementById("main_menu");
  menu.style.height = menu_height + "vmin";
  menu.style.visibility = "hidden";

  var items = document.getElementById("items_container").children;
  for (var i = 0; i < items.length; i++) {
    items[i].style.visibility = "hidden";
    items[i].style.minHeight = "0vmin";
    items[i].style.height = "0vmin";
  }

  clearInterval(expand_main_menu);
}

//
// [ END ]

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
                onMouseEnter={() => {
                  expand_main_menu_label = setInterval(() => {
                    Expand_Main_Menu_Label();
                  }, 10);
                }}
                onMouseLeave={() => {
                  Contract_Main_Menu_Label();
                }}
                onClick={() => {
                  Expand_Or_Contract_Main_Menu();
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

window.addEventListener("beforeunload", (event) => {
  try {
    clearInterval(expand_main_menu);
    clearInterval(expand_main_menu_label);
  } catch {}
});

window.addEventListener("beforeload", (event) => {
  try {
    clearInterval(expand_main_menu);
    clearInterval(expand_main_menu_label);
  } catch {}
});

export default App;
