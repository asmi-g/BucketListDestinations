import React from "react"
import pin from "./images/pin.png"


function Destination(props){
    return(
        <section className="destination">
            <img className="destination--pic" src={props.object.img}></img>
            <div className="destination--text">
                <h4 className="destination--location"><img className="pin" src={pin}/> {props.object.location} 
                <a href= {props.object.googleMapsUrl} className="destination--link">View on Google Maps</a></h4>
                <h1 className="destination--title">{props.object.destination}</h1>
                <h4 className="destination--date">{props.object.date}</h4>
                <p className="destination--description">{props.object.description}</p>
            </div>
        </section>
    )
}

export default Destination