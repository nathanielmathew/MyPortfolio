import React from "react"
import { Link } from "gatsby"
import '../styles/projectCard.css'
const projectCard=(props)=>(
    <div className="project-card-content">
            <Link to="/">
                <h3 className="project-name">
                    {props.pname}
                </h3>
                <p className="project-info">
                    Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
                </p>
            </Link>
    </div>
);

export default projectCard