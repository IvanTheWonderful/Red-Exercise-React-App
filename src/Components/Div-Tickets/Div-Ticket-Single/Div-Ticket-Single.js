import React from "react";
import "./Div-Ticket-Single.css"

const SingleTicket = (props) => {
    return(
        <div className = "Div-Ticket-Single">
            <h1>{props.title}</h1>
            <article>{props.subtitle}</article>
            <p>{props.p}</p>
        </div>
    )
}

export default SingleTicket;