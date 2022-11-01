import React from "react";
import i4g from "../Statics/I4G.png"
import zuri from "../Statics/zuri.png"
import footerTxt from "../Statics/FooterText.png"


function Footer(){
    return (
        <footer id="footer">
            <img src={zuri} alt = "" ></img>
            <img src={footerTxt} alt = "" ></img>
            <img src={i4g} alt = "" ></img>
        </footer>
    )
}



export default Footer
