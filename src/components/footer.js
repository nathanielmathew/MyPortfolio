import React from "react"
import '../styles/footer.css'
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
    <footer>
    <div className="copyright light">
    © {new Date().getFullYear()}, 
    {` `}
    <a href="https://github.com/nathanielmathew">Nathaniel Ryan M</a>
    </div>
    <div className="footer-link-container">
    <Link to="/" className="footer-title">Nathaniel Ryan Mathew</Link>
    
    <div className="footer-links">
    <a href="https://www.linkedin.com/in/nathanielmathew">Linkedin</a>
    <a href="https://github.com/nathanielmathew">GitHub</a>
    <a href="https://twitter.com/nathanxmathew">Twitter</a>
    <a href="https://instagram.com/nathanxmathew">Instagram</a>
    <a href="https://www.facebook.com/nathanielryanmathew">Facebook</a>
    </div>

    <div className="footer-links">
    <Link to="/blog">Blog</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/achievements">Achievements</Link>
    <a href="https://trailblazer.me/nathanielmathew">Trailblazer Profile</a>
    <a href="https://dribbble.com/nathanielmathew">Dribbble</a>
    </div>


    </div>
  </footer>
)


export default Header