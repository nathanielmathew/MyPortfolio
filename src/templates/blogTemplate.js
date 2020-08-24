import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/Layout'
import SEO from '../components/seo'
import "../styles/blogPost.css"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <SEO title={frontmatter.title}/>
    <div className="container dark">
      <div className="blog-post-container">
        <h1 className="blog-title">{frontmatter.title}</h1>
        <p className="date">{frontmatter.date}</p>
      <Img className="coverimg" style={{ minWidth: '100%' }} fluid={frontmatter.cover.childImageSharp.fluid} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              srcSet
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`