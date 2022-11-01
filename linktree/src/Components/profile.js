import React from "react";
import pic from "../Statics/profilePic.jpg"

function Profile(){
    return (
        <div id="profileDiv">
            <img id="profile_img" src={pic} alt= "profile pic">
            </img>
            <p id="twitter">_codeSavant</p>
            <p id="slack">ukuhor omotayo</p>
        </div>
    )
}


export default Profile;