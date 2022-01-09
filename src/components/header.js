import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css'
import '../styles/hamburgers.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-div">
      <h1 className="header-content">
        <Link className="title" id="desktop-title"
          to="/"
        >
          {siteTitle}
        </Link>
        <Link className="title" id="mobile-title"
          to="/"
        >
          Nathaniel Ryan M</Link>
        <div className="links">
          <Link className= "nav-link" to="/achievements/">Certifications</Link>
          <Link className= "nav-link" to="/projects/">Projects</Link>
          <Link className= "nav-link" to="/blog/">Blog</Link>
          {/* <a id="hamburger" href="#">H</a> */}
          <button className="hamburger hamburger--collapse" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </h1>
    </div>
    <div className="mobile-menu">
    <Link className="title" id="mobile-menu-title"to="/">Nathaniel Ryan M</Link>
            <Link className= "mobile-link" to="/achievements/">Achievements</Link>
            <Link className= "mobile-link" to="/projects/">Projects</Link>
            <Link className= "mobile-link" to="/blog/">Blog</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
