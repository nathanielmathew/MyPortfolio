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
    <div className="projects dark" name="projects">
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
          <ProjectCard pname="Portfolio WebPage" pinfo="A Personal Portfolio web page to display my Information, Achievements and Projects" plink="/"/>
          <ProjectCard pname="VTU Study Material Website" pinfo="MyVTU.me is a website for all your VTU related needs; Find Relevant VTU Notes and Question Papers with ease!" plink="https://myvtu.me"/>
          <ProjectCard pname="Bulk Mailer" pinfo="A web application to send mass E-mails and mass SMS's on a large scale" plink="https://github.com/sih-sosc"/>
          <ProjectCard pname="Weather API page" pinfo="A web application to display the weather conditions of any location" plink="https://nathanielmathew.github.io/weather-api/"/>
          <ProjectCard pname="Mozilla Sahyadri Website" pinfo="A website for the official Mozilla Campus Club of Sahyadri" plink="https://mozilla-sahyadri.netlify.com/"/>
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
