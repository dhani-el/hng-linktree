import React from "react";
import { useState } from "react";
import share from "../Statics/share.png"
import shareDef from "../Statics/shareDef.png"
import shareModal from "../Statics/Content.png"

function Share(){
    const [toggleState , setToggleState] = useState(false);
    function toggle(){
        setToggleState(!toggleState);
        // setToggleState(toggleState);
    }
    return (
        <div id="shareNmoreDiv"  onMouseDown = {toggle} onMouseUp = {toggle}>
            <img src={shareModal} alt="" id = "shareModal"></img>
            {toggleState ? <img src={share}></img> : <img src={shareDef}></img> }
        </div>
    )
}



export default Share