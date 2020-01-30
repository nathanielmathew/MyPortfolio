import React from "react"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/achievements.css'
const Achievements = props => (
  <Layout>
    <SEO title="Achievements" />
    <div className="achievements">
        <div className="achievement-title-container-bg dark">
        <div className="achievement-title-container">
          <div className="subtitle">
          <h1>Achievements</h1>
          </div>
          <div className="achievement-img">
            <Img fluid={props.data.diploma.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <div className="achievement-card-container-bg">
        <div className="achievement-card">
          <h2>Selected as Microsoft Student Partner</h2>
          <p>Selected by Microsoft as a part of the Microsoft Student Partner (MSP) program which provides those selected with access to exclusive tools, to skill up with Microsoft Learn and other resources. Microsoft Student Partners epitomize Microsoft’s mission to empower every person and organization on the planet to achieve more—they are on-campus leaders with a passion for making a difference, building vibrant communities, and sharing the latest tech with their peers.  </p>
        </div>
      </div>
      <div className="achievement-card-container-bg dark">
        <div className="achievement-card">
        <h2>Grand Finalist at Smart India Hackathon 2019</h2>
        <p>I was selected for the Grand Final of "The world's largest Hackathon", The Smart India Hackathon, held at Lovely professional university, Punjab - in 2019</p>
        </div>
      </div>
      <div className="achievement-card-container-bg">
        <div className="achievement-card">
        <h2>Nitte Start-up Hack 2018 Gold Medalist</h2>
        <p>Winner and Gold Medalist of Nitte Startup Hack 2019, an inter-college contest where students were made to pitch their Entreprenual ideas and their plan</p>
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
