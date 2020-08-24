import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import "../styles/blogCard.css"

const BlogCard = ({ data }) => (
  <div className="blog-card-content">
  <Link to={data.slug}>
    <div className="cover">
      <Img style={{ minWidth: '100%' }} fluid={data.cover.childImageSharp.fluid} />
    </div>
    <div className="blog-info">
      <div className="blog-name">{data.title}</div>
      <p className="blog-date">{data.date}</p>
      <div className="blog-desc">{data.description}</div>
      {/* <div className="blog-tags">{data.tags}</div> */}
    </div>
  </Link>
  </div>
)

export default BlogCard

// import React from "react"
// import Img from 'gatsby-image'
// import '../styles/blogCard.css'
// import bg from '../images/blog/SIH.jpg'
// const blogCard=(props)=>(
//     <div className="blog-card-content" data-sal="slide-up" data-sal-duration="1000">
//             <a href={props.blink}>
//                 <h3 className="blog-name">
//                     {props.bname}
//                 </h3>
//                 <p className="blog-info">
//                     {props.binfo}
//                 </p>
//             </a>
//     </div>
// );

// export default blogCard



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
