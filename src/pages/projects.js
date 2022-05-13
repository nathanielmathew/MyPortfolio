import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.css'
import ProjectCard from '../components/projectCard.js'

const Achievements = props => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects" name="projects">
      <div className="projects-title-container">
        <div className="subtitle" data-sal="slide-up" data-sal-duration="1000">
        <h1>My Projects</h1>
        </div>
        <div className="project-img" data-sal="slide-up" data-sal-duration="1000">
          <Img fluid={props.data.project.childImageSharp.fluid}
          />
        </div>
      </div>
        <div className="project-card-container">
          <ProjectCard pname="Cogeco connexion FSM Software" pinfo="Cogeco Inc. is a Canadian telecommunications and media company for which Diabsolut Inc developed a field service solution using Salesforce Field Service" plink=""/>
          <ProjectCard pname="Eurotech Safety Inventory Management Software" pinfo="Eurotech Safety Inc. is a company based in Toronto and its surrounding areas that provides Fire, Life Safety, and Security services to the residential and commercial sector in Ontario. The Inventory Management solution for this project was Implemented using Salesforce." plink=""/>
          <ProjectCard pname="Portfolio WebPage" pinfo="A Personal Portfolio web page to display my Information, Achievements and Projects" plink="/"/>
          <ProjectCard pname="VTU Study Material Website" pinfo="MyVTU.me is a website for all your VTU related needs; Find Relevant VTU Notes and Question Papers with ease!" plink="https://myvtu.me"/>
          <ProjectCard pname="Browser Extension for The Visually Impaired" pinfo="A Chrome Browser Extension to dictate selected text on a web page whenever the hotkey is clicked" plink="https://github.com/nathanielmathew/Text2Speech"/>
          <ProjectCard pname="Bulk Mailer" pinfo="A web application to send mass E-mails and mass Messages at a large scale in Institutions" plink="https://github.com/sih-sosc"/>
          <ProjectCard pname="Instagram AR Filter" pinfo="An augmented reality instagram face filter that shows you 'which Liverpool football player you are'" plink="https://www.instagram.com/ar/2971913382851650/?ch=OWE2YTdjOWVmMzEyZmY5NTlmODZiZDA4ZjkwMThiZTk%3D" />
          <ProjectCard pname="Weather API page" pinfo="A web application to display the weather conditions of any location" plink="https://nathanielmathew.github.io/weather-api/"/>
        </div>
    </div>
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
