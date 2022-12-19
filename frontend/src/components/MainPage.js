import React from "react";
import MyIcon from "../icons/app-logo.png"

export default function Navbar() {
    return(
        <main-page>
            <div className="icon-text">
                <h1>Welcome to cohort!</h1>
                <p>Find like-minded people.<br/>
                    learn together.</p>
                <img src={MyIcon}/>    
            </div> 
            <button>Join now</button>
        </main-page>
    )

}
