import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.css'
import ProjectCard from '../components/projectCard.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-container">
      
      <div className="intro">
        <h1>Hello there!</h1>
        <p>I'm <strong>Nathaniel Ryan M</strong>,<br />
        an Engineering Undergrad<br /> at SCEM</p>
      </div>
    </div>
      <div className="about">
        <h1>About Me</h1>
        <p>I'm an Engineering Undergrad at Sahyadri College of Engineering and Management, Mangalore</p>
      </div>
      
      <div className="projects">
        <h1>My Projects</h1>
        <p>here are  a few of the projects that I've been working on</p>
        <div className="project-card-container">
          <ProjectCard pname="Portfolio WebPage"/>
          <ProjectCard pname="Bulk Mailer"/>
          <ProjectCard pname="Weather API page"/>
          <ProjectCard pname="Mozilla Sahyadri Website"/>
        </div>
      </div>

      <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
