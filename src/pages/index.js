import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SVGHeadphone from "../components/svgs/svg-headphone"
import styled from "styled-components"
import BlogFeed from "../components/blogfeed"

const UnderlinedHeader = styled.h3`
  font-family: Georgia, Serif;
  text-decoration: underline;
`
const FeatureLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  max-width: 100%;
  width: 100%;
`

const FeatureSection = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #fff;
  width: 100%;
  margin: 0 0 4em;
`

const FeatureApp = styled.div`
  border-radius: 5px;
  background: #fff;
  padding: 2em;
  cursor: pointer;
  text-align: center;
  opacity: 0.8;
  height: 15em;
  border: solid 1px #999;

  &:hover {
    background: rgb(75, 50, 86);
    color: #fff;
    opacity: 1;
    transition: opacity 600ms ease-in-out;
  }

  &:hover path {
    fill: #fff;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <UnderlinedHeader>Recent Projects:</UnderlinedHeader>
    <FeatureSection>
      <FeatureLink href="https://harmonyfe.herokuapp.com/">
        <FeatureApp>
          <h2>Harmony</h2> - Using speech to text recognition web api to
          aggregate related content
          <SVGHeadphone />
        </FeatureApp>
      </FeatureLink>
      {/* <section class="feature-app">
        Harlem Scrabble - Scrabble with an interesting twist
        <SVGBold />
      </section> */}
    </FeatureSection>

    <UnderlinedHeader>Recent Blogs:</UnderlinedHeader>
    <BlogFeed />
  </Layout>
)

export default IndexPage
