import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/footer.css'

const Header = ({ siteTitle }) => (
    <footer>
    <div className="copyright">
    © {new Date().getFullYear()}, 
    {` `}
    <a href="https://github.com/nathanielmathew">Nathaniel Ryan M</a>
    </div>
    <div className="footer-link-container dark">
    <div className="footer-links">
    <a href="https://github.com/nathanielmathew">GitHub</a>
    <a href="https://dribbble.com/nathanielmathew">Dribbble</a>
    <a href="https://github.com/nathanielmathew">Instagram</a>
    <a href="https://github.com/nathanielmathew">Facebook</a>
    </div>

    <div className="footer-links">
    <a href="mailto:nathanielmat2@gmail.com"><b>E-mail</b></a>
    <a href="tel:+91 8088734430"><b>Phone</b></a>
    <a href="https://github.com/nathanielmathew">Website</a>
    </div>


    </div>
  </footer>
)


export default Header