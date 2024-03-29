import React from 'react'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import '../styles/index.css'
import '../styles/slider.css'
const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-container frame">
      <div className="intro">
        <p data-sal="fade" data-sal-duration="500">Hello, I'm</p>
        <h1 data-sal="fade" data-sal-duration="1000"><strong>Nathaniel Ryan Mathew</strong></h1>
        <p>A Salesforce Certified Administrator, Software Developer, and an overall Tech Geek!</p>
        <div className="socials-container">
        <a href="https://github.com/nathanielmathew/" target="_blank" rel="noopener noreferrer"><Img fluid={props.data.github.childImageSharp.fluid} className="socials" alt="github" title="github"/></a>
        <a href="https://www.linkedin.com/in/nathanielmathew/" target="_blank" rel="noopener noreferrer"><Img fluid={props.data.linkedin.childImageSharp.fluid} className="socials" alt="linkedin" title="linkedin"/></a>
        <a href="https://www.facebook.com/nathanielryanmathew" target="_blank" rel="noopener noreferrer"><Img fluid={props.data.facebook.childImageSharp.fluid} className="socials" alt="facebook" title="facebook"/></a>
        <a href="https://twitter.com/nathanxmathew" target="_blank" rel="noopener noreferrer"><Img fluid={props.data.twitter.childImageSharp.fluid} className="socials" alt="twitter" title="twitter"/></a>
        <a href="https://dribbble.com/nathanielmathew" target="_blank" rel="noopener noreferrer"><Img fluid={props.data.dribbble.childImageSharp.fluid} className="socials" alt="dribbble" title="dribbble"/></a>
        </div>
      </div>
      <div className="avatar" data-sal="slide-up" data-sal-duration="1000">
        <Img fluid={props.data.imageOne.childImageSharp.fluid}
        />
      </div>
    </div>
    <div className="about-container frame light">
      <div className="about">
        <h1 data-sal="fade" data-sal-duration="500">About Me</h1>
        <p data-sal="fade" data-sal-duration="1000">I work with the development of Software and Cloud Technologies. I am 4x certified in Salesforce technologies including SF Administrator, Service Cloud Consultant, Field Service Consultant and Advanced Field Service Accredited Professional. <br />
          <br />
          I love learning new things and expanding the horizons of my knowledge by working with a plethora of other Technologies, building websites, developing software, designing, and trading. I also like playing the guitar in my free time.</p>
      </div>
      <div className="about-img" data-sal="slide-up" data-sal-duration="1000">
      <Img fluid={props.data.about.childImageSharp.fluid}
      />
      </div>
    </div>

    <div className="interests-container frame">
        <h1 align="center" data-sal="fade" data-sal-duration="500">My Skills</h1>
        <div className="interests" data-sal="slide-up" data-sal-duration="1000">

        <div className="interest-card">
          <Img className="icon" fluid={props.data.webDev.childImageSharp.fluid}
          />  
          <p>Software Development</p>
        </div>

        <div className="interest-card">
          <Img className="icon" fluid={props.data.cloud.childImageSharp.fluid}
          />  
          <p>Cloud Computing</p>
        </div>

        <div className="interest-card">
          <Img className="icon" fluid={props.data.design.childImageSharp.fluid}
          />  
          <p>Graphic Designing</p>
        </div>

      </div>
    </div>



<div className="organizations-container frame light">
  <h1 align="center" data-sal="fade" data-sal-duration="500">Associated Organizations</h1>
   <section className="customer-logos slider organizations" data-sal="slide-up" data-sal-duration="1000">
      <div className="slide"><img src="https://github.com/so-sc/open-design/blob/master/SAHYADRI/SAHYADRI-LOGO-01.png?raw=true" alt="SCEM"/></div>
      <div className="slide"><img src="https://raw.githubusercontent.com/so-sc/open-design/master/SOSC/Logos/logo_x_text.png" alt='SOSC'/></div>
      <div className="slide"><img style={{marginTop:'50px'}} src="https://raw.githubusercontent.com/so-sc/open-design/master/mozilla/moz-logo-1color-white-rgb.png" alt='Mozilla'/></div>
      <div className="slide"><img style={{marginTop:'20px'}} src="https://raw.githubusercontent.com/so-sc/open-design/master/Microsoft%20Learn%20Student%20Ambassadors/Program%20Badge(Logo)/MSLearn_SA_badge_generic_rgb_300ppi.png" alt='Microsoft Learn Student Ambassadors' /></div>
      <div className="slide"><img src="https://avatars3.githubusercontent.com/u/12551863?s=400&amp;v=4" alt='Gatsby'/></div>
      <div className="slide"><img style={{marginTop:'30px'}} src="https://diabsolut.com/wp-content/uploads/2020/03/Logo-Diabsolut.png" alt='Diabsolut' /></div>
   </section>
</div>

    <div className="contact-container frame">
      <div className="contact">
        <h1 data-sal="fade" data-sal-duration="500">Get in Touch!</h1>
        <p data-sal="fade" data-sal-duration="1000">Got a relevant opportunity for me? Please contact me to collaborate, or for more information!</p>
        <p data-sal="fade" data-sal-duration="1000">
        Drop me an e-mail at<br /> <a className="nxm" href="mailto:nathanielmat2@gmail.com"><b className="nxm">nathanielmat2@gmail.com</b></a><br />
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
    cloud: file(relativePath: { eq: "images/cloud.png" }) {
      ...firstSiteImages
    }
    dribbble: file(relativePath: { eq: "images/socials/dribbble.png" }) {
      ...firstSiteImages
    }
    facebook: file(relativePath: { eq: "images/socials/facebook.png" }) {
      ...firstSiteImages
    }
    github: file(relativePath: { eq: "images/socials/github.png" }) {
      ...firstSiteImages
    }
    instagram: file(relativePath: { eq: "images/socials/instagram.png" }) {
      ...firstSiteImages
    }
    linkedin: file(relativePath: { eq: "images/socials/linkedin.png" }) {
      ...firstSiteImages
    }
    twitter: file(relativePath: { eq: "images/socials/twitter.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
