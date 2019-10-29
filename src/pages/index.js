import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.css'

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
        <p>I'm an Engineering Undergrad at Sahyadri College of Engineering and Management, Mangalore, with an active interest for Graphic Design, UI/UX Design and Full Stack Web Development.<br /> i'm also a music + art enthusiast and guitarist by hobby</p>
      </div>
      <div className="contact">
        <h1>Wanna get in touch?</h1>
        <p>I would love for you to get in touch with me for exciting opportunities:</p>
        <p>Drop an e-mail at <a>nathanielmat2@gmail.com</a></p>
        <p>Or give me a call/text at <a>+91 8088734430</a></p>
      </div>
  </Layout>
)

export default IndexPage
