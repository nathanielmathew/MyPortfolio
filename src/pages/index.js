import React from 'react'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import '../styles/index.css'
const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-container frame dark">
      <div className="intro">
        <h1 data-sal="fade" data-sal-duration="500">Hello there!</h1>
        <p data-sal="fade" data-sal-duration="1000">I'm <strong>Nathaniel Ryan M</strong>,<br />
        a 3rd Year Computer Science and Engineering Student at Sahyadri College of Engineering &amp; Management</p>
      </div>
      <div className="avatar" data-sal="slide-up" data-sal-duration="1000">
        <Img fluid={props.data.imageOne.childImageSharp.fluid}
        />
      </div>
    </div>
    <div className="about-container frame">
      <div className="about">
        <h1 data-sal="fade" data-sal-duration="500">About Me</h1>
        <p data-sal="fade" data-sal-duration="1000">I'm an Engineering Student Developer from Mangalore, with a passion for <b>Front-End Web Development</b>, <b>UI/UX Design</b> and <b>Graphic Design</b>.<br />
        I'm also a Music &amp; Art enthusiast and a Guitarist by hobby</p>
      </div>
      <div className="about-img" data-sal="slide-up" data-sal-duration="1000">
      <Img fluid={props.data.about.childImageSharp.fluid}
      />
      </div>
    </div>

    <div className="interests-container frame dark">
        <h1 align="center" data-sal="fade" data-sal-duration="500">Areas of Interest</h1>
        <div className="interests" data-sal="slide-up" data-sal-duration="1000">

        <div className="interest-card">
          <Img className="icon" fluid={props.data.webDev.childImageSharp.fluid}
          />  
          <p>Web Development</p>
        </div>

        <div className="interest-card">
          <Img className="icon" fluid={props.data.design.childImageSharp.fluid}
          />  
          <p>Graphic Design</p>
        </div>

        <div className="interest-card">
          <Img className="icon" fluid={props.data.gameDev.childImageSharp.fluid}
          />  
          <p>Game Development</p>
        </div>
      </div>
    </div>

    <div className="contact-container frame">
      <div className="contact">
        <h1 data-sal="fade" data-sal-duration="500">Get in Touch!</h1>
        <p data-sal="fade" data-sal-duration="1000">Be sure to contact me for exciting Collaboration opportunities and more information:</p>
        <p data-sal="fade" data-sal-duration="1000">
        Drop me an e-mail at<br /> <a href="mailto:nathanielmat2@gmail.com"><b>nathanielmat2@gmail.com</b></a><br />
        Or give me a call/text at<br /> <a href="tel:+91 8088734430"><b>+91 8088734430</b></a>
        </p>
      </div>
      <div className="contact-img" data-sal="slide-up" data-sal-duration="1000">
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
    webDev: file(relativePath: { eq: "images/web.png" }) {
      ...firstSiteImages
    }
    design: file(relativePath: { eq: "images/design.png" }) {
      ...firstSiteImages
    }
    gameDev: file(relativePath: { eq: "images/game.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
