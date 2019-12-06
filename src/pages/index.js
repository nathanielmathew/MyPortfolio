import React from 'react'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import '../styles/index.css'
const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-container">
      
      <div className="intro">
        <h1>Hello there!</h1>
        <p>I'm <strong>Nathaniel Ryan M</strong>,<br />
        a 3rd Year Computer Science and Engineering Student at Sahyadri College of Engineering &amp; Management</p>
      </div>
      <div className="avatar">
        <Img fluid={props.data.imageOne.childImageSharp.fluid}
        />
      </div>
    </div>
    <div className="about-container">
      <div className="about">
        <h1>About Me</h1>
        <p>I'm an Engineering Student from Mangalore, with a passion for <b>Front-End Web Development</b>, <b>UI/UX Design</b> and <b>Graphic Design</b>.<br />
        I'm also a Music &amp; Art enthusiast and a Guitarist by hobby</p>
      </div>
      <div className="about-img">
      <Img fluid={props.data.about.childImageSharp.fluid}
      />
      </div>
    </div>
    <div className="contact-container">
      <div className="contact">
        <h1>Get in Touch!</h1>
        <p>Be sure to contact me for exciting Collaboration opportunities and more information:</p>
        <p>
        Drop me an e-mail at<br /> <a><b>nathanielmat2@gmail.com</b></a><br />
        Or give me a call/text at<br /> <a><b>+91 8088734430</b></a>
        </p>
      </div>
      <div className="contact-img">
      <Img fluid={props.data.MyFirst.childImageSharp.fluid}
      />
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
    MyFirst: file(relativePath: { eq: "images/mailbox.png" }) {
      ...firstSiteImages
    }
    about: file(relativePath: { eq: "images/about.png" }) {
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/nat.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
