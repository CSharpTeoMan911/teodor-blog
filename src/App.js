import "./main_style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Render_Main_Page} from "./Main_Page";


function App() {
  var body = document.getElementById("main_body");
  body.classList.add("main_body_style");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" Component={Render_Main_Page}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
