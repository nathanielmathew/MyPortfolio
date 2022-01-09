import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/achievements.css'
const Achievements = props => (
  <Layout>
    <SEO title="Achievements" />
    <div className="achievements">
        <div className="achievement-title-container-bg">
        <div className="achievement-title-container">
          <div className="subtitle" data-sal="slide-up" data-sal-duration="1000">
          <h1>Certifications and Achievements</h1>
          </div>
          <div className="achievement-img" data-sal="slide-up" data-sal-duration="1000">
            <Img fluid={props.data.diploma.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <div className="achievement-card-container-bg" data-sal="slide-up" data-sal-duration="1000">
        <div className="achievement-card" data-sal="slide-up" data-sal-duration="1000">
          <h2>Microsoft Certified Azure Fundamentals</h2>
          <p>Azure Fundamentals certification proves knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.</p>
        </div>
      </div>
      <div className="achievement-card-container-bg light" data-sal="fade" data-sal-duration="1000">
        <div className="achievement-card" data-sal="slide-up" data-sal-duration="1000">
        <h2>Salesforce Certified Service Cloud Consultant</h2>
        <p>The Salesforce Service Cloud Consultant credential is designed for those who have experience implementing Service Cloud solutions in a customer-facing role. Candidates should be able to successfully design and implement Service Cloud solutions that meet customer business requirements, are maintainable and scalable, and contribute to long-term customer success.</p>
        </div>
      </div>
      <div className="achievement-card-container-bg light" data-sal="fade" data-sal-duration="1000">
        <div className="achievement-card" data-sal="slide-up" data-sal-duration="1000">
        <h2>Salesforce Certified Administrator</h2>
        <p>The Salesforce Administrator credential is designed for those who have experience with Salesforce and continuously look for ways to assist their companies in getting even more from additional features and capabilities.</p>
        </div>
      </div>
      <div className="achievement-card-container-bg light" data-sal="slide-up" data-sal-duration="1000">
        <div className="achievement-card" data-sal="slide-up" data-sal-duration="1000">
          <h2>Google Cloud Fundamentals: Core Infrastructure</h2>
          <p>This course introduces you to important concepts and terminology for working with Google Cloud Platform (GCP). You learn about, and compare, many of the computing and storage services available in Google Cloud Platform, including Google App Engine, Google Compute Engine, Google Kubernetes Engine, Google Cloud Storage, Google Cloud SQL, and BigQuery. You learn about important resource and policy management tools, such as the Google Cloud Resource Manager hierarchy and Google Cloud Identity and Access Management.</p>
        </div>
      </div>
      <div className="achievement-card-container-bg light" data-sal="slide-up" data-sal-duration="1000">
        <div className="achievement-card" data-sal="slide-up" data-sal-duration="1000">
          <h2>Neural Networks and Deep Learning by DeepLearning.AI</h2>
          <p>The Deep Learning Specialization is our foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. It provides a pathway for you to gain the knowledge and skills to apply machine learning to your work, level up your technical career, and take the definitive step in the world of AI.</p>
        </div>
      </div>
      <div className="achievement-card-container-bg light" data-sal="slide-up" data-sal-duration="1000">
        <div className="achievement-card" data-sal="slide-up" data-sal-duration="1000">
          <h2>Former Microsoft Student Partner</h2>
          <p>Selected by Microsoft as a part of the Microsoft Student Partner (MSP) program which provides those selected with access to exclusive tools, to skill up with Microsoft Learn and other resources. Microsoft Student Partners epitomize Microsoft’s mission to empower every person and organization on the planet to achieve more—they are on-campus leaders with a passion for making a difference, building vibrant communities, and sharing the latest tech with their peers.  </p>
        </div>
      </div>
      <div className="achievement-card-container-bg" data-sal="slide-up" data-sal-duration="1000">
        <div className="achievement-card" data-sal="slide-up" data-sal-duration="1000">
        <h2>Grand Finalist at Smart India Hackathon 2019</h2>
        <p>Was selected for the Grand Final of The Smart India Hackathon dubbed as "The world's largest Hackathon", held at Lovely professional university, Punjab - in 2019</p>
        </div>
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
    diploma: file(relativePath: { eq: "images/diploma.png" }) {
      ...firstSiteImages
    }
  }
`

export default Achievements
