import terminal_logo from "./Images/terminal-logo.png"
import terminal_controls from "./Images/terminal controls.png"
import { useEffect } from "react";
import { Terminal_Startup, Name_Animation } from "./GUI_Animations";

export default function Terminal(prop) {
  useEffect(()=>{
    Terminal_Startup();
    Name_Animation();
  },[])
  return (
    <div className="terminal-skeleton">
      <div id="terminal" className="terminal">
        <div className="terminal-handle">

          <div>
            <img style={{ marginLeft: "20px", height: "38px" }} src={terminal_logo} />
          </div>

          <div></div>

          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <img style={{ marginRight: "20px", height: "38px" }} src={terminal_controls} />
          </div>

        </div>
        <div className="terminal-element">
          <div style={{ width: "98%", display: "flex", alignSelf: "center", flexDirection: "column" }}>
            {prop.children}
          </div>
        </div>
      </div>
    </div>
  );
}