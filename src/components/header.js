import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-div">
      <h1 className="header-content">
        <Link className="title"
          to="/"
        >
          {siteTitle}
        </Link>
        <div className="links">
          <Link to="/achievements/">Achievements</Link>
          <Link to="/projects/">Projects</Link>
        </div>
      </h1>
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
