import React from "react"
import { Link } from "gatsby"
import '../styles/projectCard.css'
const projectCard=(props)=>(
    <div className="project-card-content">
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