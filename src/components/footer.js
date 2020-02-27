import React from "react"
import '../styles/footer.css'
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
    <footer>
    <div className="copyright">
    © {new Date().getFullYear()}, 
    {` `}
    <a href="https://github.com/nathanielmathew">Nathaniel Ryan M</a>
    </div>
    <div className="footer-link-container dark">
    <Link to="/" className="footer-title">Nathaniel Ryan Mathew</Link>
    
    <div className="footer-links">
    <a href="https://github.com/nathanielmathew">GitHub</a>
    <a href="https://twitter.com/nathanxmathew">Twitter</a>
    <a href="https://instagram.com/nathanxmathew">Instagram</a>
    <a href="https://www.facebook.com/nathanielryanmathew">Facebook</a>
    </div>

    <div className="footer-links">
    <a href="mailto:nathanielmat2@gmail.com">E-mail</a>
    <a href="tel:+91 8088734430">Phone</a>
    <a href="https://dribbble.com/nathanielmathew">Dribbble</a>
    <a href="https://www.linkedin.com/in/nathanielmathew">Linkedin</a>
    </div>


    </div>
  </footer>
)


export default Header