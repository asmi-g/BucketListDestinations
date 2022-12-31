import React from "react"
import globeicon from "./images/globeicon.png"

function Banner(){
    return(
        <section className="banner">
            <img src={globeicon} className="globe-icon"/>
            <h2 className="banner--text">My Bucket List Destinations</h2>
        </section>
    )
}

export default Banner