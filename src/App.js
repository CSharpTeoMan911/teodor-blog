import "./Styles/main_style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SetAutoSizeElements } from "./GUI_Animations"

import Render_Main_Page from "./Main_Page";
import Render_Projects_Page from "./Projects";
import Render_Contacts_Page from "./Contacts";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Render_Python_Student_Records_System_Page from "./Personal_Projects_Modules/Python_Student_Records_System";
import Render_C_Sharp_Secure_Student_Records_System from "./Personal_Projects_Modules/C_Sharp_Secure_Student_Records_System";
import Render_Cisco_Large_Network_DHCP_VOIP_TELNET from "./Personal_Projects_Modules/Cisco_Large_Network_DHCP_VOIP_TELNET";
import Render_Smart_Event_Organiser from "./Personal_Projects_Modules/Smart_Event_Organiser";
import Render_TeodorMihailBlog from "./Personal_Projects_Modules/TeodorMihailBlog";
import Render_Y2F from "./Personal_Projects_Modules/Y2F";
import Render_EVA_AI_Page from "./Personal_Projects_Modules/Eva_AI";
import { useEffect } from "react";



function App() {
  useEffect(()=>{
    
  }, []);
  return (
    <div>
      <div id="background-image" className="background_image" alt="matrix animation background"/>
      <Navbar id="app-navbar" expand="lg" className="navbar-dark bg-dark">
        <Container style={{width:"100%", minWidth:"95%"}}>
          <Navbar.Brand href="/" style={{  fontFamily:"JetBrains Mono, monospace", fontSize:"25px", marginRight:"30px", fontWeight:"700", color:"rgb(244,113,10)"}}>Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navbar-element" href="/">Home</Nav.Link>
              <Nav.Link className="navbar-element" href="/projects">Projects</Nav.Link>
              <Nav.Link className="navbar-element" href="/contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


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
            path="/CSharp_Secure_Student_Records_System"
            Component={Render_C_Sharp_Secure_Student_Records_System}
          />
          <Route
            exact
            path="/SmartEventOrganiser"
            Component={Render_Smart_Event_Organiser}
          />
          <Route exact path="/Y2F" Component={Render_Y2F} />
          <Route
            exact
            path="/Large_Cisco_Network_VOIP_DHCP_TELNET"
            Component={Render_Cisco_Large_Network_DHCP_VOIP_TELNET}
          />
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
