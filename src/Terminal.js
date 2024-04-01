import terminal_logo from "./Images/CMD logo.png"
import terminal_controls from "./Images/terminal controls.png"

export default function Terminal({ children }) {
    return(
        <div className="page_content_style">
          <div className="terminal">
            <div className="terminal-handle">

              <div>
                <img style={{ marginLeft: "20px" }} src={terminal_logo} />
              </div>

              <div></div>

              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <img style={{ marginRight: "20px" }} src={terminal_controls} />
              </div>

            </div>
            <div className="terminal-element">
              <div style={{width:"98%", display:"flex", alignSelf:"center", flexDirection:"column"}}>
                {children}
              </div>
            </div>
          </div>
        </div>
    );
}