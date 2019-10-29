import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.css'
import ProjectCard from '../components/projectCard.js'

const Achievements = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects" name="projects">
        <h1>My Projects</h1>
        <div className="project-card-container">
          <ProjectCard pname="Portfolio WebPage" pinfo="A webpage to display my Information, Achievement and Projects" plink="/"/>
          <ProjectCard pname="Bulk Mailer" pinfo="A web application to send mass E-mails and mass SMS's on a large scale" plink="https://github.com/sih-sosc"/>
          <ProjectCard pname="Weather API page" pinfo="A web application to display the weather conditions of any location" plink="https://nathanielmathew.github.io/weather-api/"/>
          <ProjectCard pname="Mozilla Sahyadri Website" pinfo="A website for the official Mozilla Campus Club of Sahyadri" plink="https://mozilla-sahyadri.netlify.com/"/>
        </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Achievements
