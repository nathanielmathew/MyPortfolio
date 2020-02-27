import React from "react"
import '../styles/projectCard.css'
const projectCard=(props)=>(
    <div className="project-card-content" data-sal="fade" data-sal-duration="1000">
            <a href={props.plink}>
                <h3 className="project-name">
                    {props.pname}
                </h3>
                <p className="project-info">
                    {props.pinfo}
                </p>
            </a>
    </div>
);

export default projectCard