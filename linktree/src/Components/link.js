import React from "react";



function Links({linksData}){
    return(
        <div id="linksDiv">
            {linksData.map(function(data){
                        return(
                            <Link linkData={data}/>
                        )
                    }
                )
            }
        </div>
    )
}


function Link({linkData}){
    return (
            <a href={linkData.href} id={linkData.id} className="a_link"> {linkData.text} </a>
    );
}



export default Links;