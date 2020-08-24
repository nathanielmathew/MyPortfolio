import React from 'react'
import BlogCard from '../components/blogCard'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import "../styles/blog.css"

function getBlogs(data) {
  let blogs = []
  let blogList = data.allMarkdownRemark.edges

  blogList.forEach(element => {
    blogs.push(<BlogCard data={element.node.frontmatter} />)
  })

  return blogs
}

const BlogsPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
     <div className="blog-container dark">
       <div className="blog-image">
       <div className="blog-title-container">
         <div className="btitle" data-sal="slide-up" data-sal-duration="1000">
         <h1>Blog</h1>
         </div>
       </div>
        
        <div className="blog-cards-container">
          {getBlogs(data)}
        </div>
          {/*
          
            <div className="blog-newsletter">
              <div className="news-card">
                <img alt="" src="" />
              </div>
            </div>
            */}
        </div>
    </div>
  </Layout>
)

export default BlogsPage

export const blogsQuery = graphql`
  query blogsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blogs/.*md$/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            slug
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  srcSet
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            tags
            title
            description
            date(formatString: "DD-MMM-YYYY")
          }
        }
      }
    }
  }
`


// import React from "react"
// import BlogCard from '../components/blogCard'
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import '../styles/blog.css'
// import Img from 'gatsby-image'


// const Blog = (props) => (
//   <Layout>
//     <SEO title="Blog" />
//     <div className="blog-container dark" name="projects">
//       <div className="blog-image">
//       <div className="blog-title-container">
//         <div className="btitle" data-sal="slide-up" data-sal-duration="1000">
//         <h1>Blog</h1>
//         </div>
//       </div>
//         <div className="blog-cards-container">
//         <Img style={{ height: '100%' }} fluid="props.data.sih.childImageSharp.fluid" className="blog-images" />
//             <BlogCard bname="The Smart India Hackathon Experience - SIH 2019" binfo="A Short blog on the experience of being selected for the Grand Final of the World's biggest Hackathon, the Smart India Hackathon (SIH), 2019" blink="facebook.com" bvalue="sih.jpg">
//               <Img style={{ height: '100%' }} fluid="props.data.sih.childImageSharp.fluid" className="blog-images" />
//             </BlogCard>
//             <BlogCard bname="The Smart India Hackathon Experience - SIH 2019" binfo="A Short blog on the experience of being selected for the Grand Final of the World's biggest Hackathon, the Smart India Hackathon (SIH), 2019" blink="facebook.com"/>
//             <BlogCard bname="The Smart India Hackathon Experience - SIH 2019" binfo="A Short blog on the experience of being selected for the Grand Final of the World's biggest Hackathon, the Smart India Hackathon (SIH), 2019" blink="facebook.com"/>
            
//         </div>
//       </div>
//     </div>
//   </Layout>
// )

// export default Blog

// export const firstSiteImages = graphql`
//   fragment firstSiteImages on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     sih: file(relativePath: { eq: "images/blog/SIH.jpg" }) {
//       ...firstSiteImages
//     }
//   }
// `
