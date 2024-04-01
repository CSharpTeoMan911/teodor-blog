import terminal_logo from "./Images/terminal-logo.png"
import terminal_controls from "./Images/terminal controls.png"
import { useEffect } from "react";
import { Terminal_Startup, Name_Animation } from "./GUI_Animations";

export default function Terminal(prop) {
  let width = undefined;
  let height = undefined;
  let marginTop = undefined

  if(prop.size === "normal") {
    width = "85vw";
    height = "70vh";
    marginTop = "100px";
  }
  else if(prop.size === "large") {
    width = "95vw";
    height = "80vh";
    marginTop = "50px";
  }

  useEffect(()=>{
    Terminal_Startup();
    Name_Animation();
  },[])
  return (
    <div className="terminal-skeleton" style={{width:width, marginTop:marginTop}}>
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
        <div className="terminal-element" style={{height:height}}>
          <div style={{ width: "98%", display: "flex", alignSelf: "center", flexDirection: "column" }}>
            {prop.children}
          </div>
        </div>
      </div>
    </div>
  );
}