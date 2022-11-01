import React from "react";
import pic from "../Statics/profilePic.jpg"
import camera from "../Statics/camera.png"

function Profile(){
    return (
        <div id="profileDiv">
            <div id="imageDiv">  

            <img id="profile_img" src={pic} alt= "profile pic"></img>

            <div id="overlay">
                <img src={camera} alt = "" id="camera"></img>
            </div>

            </div>
            <p id="twitter">_codeSavant</p>
            <p id="slack">ukuhor omotayo</p>
        </div>
    )
}


export default Profile;