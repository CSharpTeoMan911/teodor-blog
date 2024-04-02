import terminal_logo from "./Images/terminal-logo.png"
import terminal_controls from "./Images/terminal controls.png"
import { useEffect } from "react";
import { Terminal_Startup, SetAutoSizeElements } from "./GUI_Animations";
import { MobileView, BrowserView, isMobile } from "react-device-detect";

export default function Terminal(prop) {
  let width = undefined;
  let height = undefined;
  let marginTop = undefined

  if (prop.size === "normal") {
    width = "85vw";
    height = "70vh";
    marginTop = "100px";
  }
  else if (prop.size === "large") {
    width = "95vw";
    height = "80vh";
    marginTop = "50px";
  }

  useEffect(() => {
    if (isMobile === false) {
      if(prop.animation === true){
        Terminal_Startup();
      }
    }
    SetAutoSizeElements(prop.size);
  }, []);
  
  return (
    <div style={{ alignSelf: "center" }}>
      <BrowserView>
        <div id="terminal-skeleton" className="terminal-skeleton" style={{ width: width, marginTop: marginTop }}>
          <div id="terminal" className="terminal">
            <div id="terminal-handle" className="terminal-handle">

              <div>
                <img id="terminal-logo" style={{ marginLeft: "20px", height: "100%" }} src={terminal_logo} />
              </div>

              <div></div>

              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <img id="terminal-control" style={{ marginRight: "20px", height: "100%" }} src={terminal_controls} />
              </div>

            </div>
            <div id="terminal-element" className="terminal-element" style={{ height: height }}>
              <div style={{ width: "98%", display: "flex", alignSelf: "center", flexDirection: "column" }}>
                {prop.children}
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div id="terminal-skeleton" className="terminal-skeleton" style={{ width: "100vw", marginTop: "0px" }}>
          <div id="terminal" className="terminal">
            <div id="terminal-element" className="terminal-element" style={{ height: "100vh" }}>
              <div style={{ width: "98%", display: "flex", alignSelf: "center", flexDirection: "column" }}>
                {prop.children}
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
  );
}