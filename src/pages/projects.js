import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.css'
import ProjectCard from '../components/projectCard.js'

const Achievements = props => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects" name="projects">
      <div className="projects-title-container">
        <div className="subtitle">
        <h1>My Projects</h1>
        </div>
        <div className="project-img">
          <Img fluid={props.data.project.childImageSharp.fluid}
          />
        </div>
      </div>
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
export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    project: file(relativePath: { eq: "images/project.png" }) {
      ...firstSiteImages
    }
  }
`
export default Achievements
