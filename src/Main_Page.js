import "./home_page_style.css";
import matrix from "./matrix.gif";
import teodor from "./teodor.png";

export function Render_Main_Page()
{
    return(
        <div className="main_page_div_style">
            <img className="matrix_img_style" src={matrix}/>

            <div className="profile_div_style">
                <div className="profile_picture_div_style">
                    <img className="profile_image_style" src={teodor}/>
                </div>
            </div>
        </div>
    );
}