// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SVGGithub from "./svgs/svg-git"
import SVGLinkedIn from "./svgs/svg-linkedin"
import SVGTwitter from "./svgs/svg-twitter"
import Image from "../components/image"
import HeaderLogo from "../images/sunmoon.png"
import styled from "styled-components"

const ShadowedHeader = styled.header`
  background: #efdede;
  box-shadow: 0.05em 0.05em 0.25em 0.05em rgba(0, 0, 0, 0.4);

  h2 {
    font-family: Georgia, Serif;
    margin: 0.5em;
  }
`

const Header = ({ siteTitle }) => (
  <ShadowedHeader>
    <h2>The Mode of Code - Natalie Olivo</h2>
    <section className="social-links-section">
      <a
        className="social-links"
        href="https://www.linkedin.com/in/natalieolivo/"
        target="_blank"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <SVGLinkedIn />
      </a>
      <a
        className="social-links"
        href="https://twitter.com/nataliie"
        target="_blank"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <SVGTwitter />
      </a>
      <a
        className="social-links"
        href="https://github.com/natalieolivo"
        target="_blank"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <SVGGithub />
      </a>
    </section>
  </ShadowedHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
