import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import SVGHeadphone from "../components/svgs/svg-headphone"
import SVGBold from "../components/svgs/svg-bold"
import styled from "styled-components"

const UnderlinedHeader = styled.h3`
  font-family: Georgia, Serif;
  text-decoration: underline;
`
const FeatureApp = styled.div`
  border-radius: 5px;
  background: #fff;
  padding: 2em;
  cursor: pointer;
  text-align: center;
  opacity: 0.8;
  margin: 0 2em;
  width: 50em;
  height: 15em;
  border: solid 1px #999;

  &:hover {
    background: rgb(42, 33, 46);
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

    <UnderlinedHeader>Recent Blogs:</UnderlinedHeader>

    <UnderlinedHeader>Recent Projects:</UnderlinedHeader>
    <section className="feature-sections">
      <FeatureApp>
        <h2>Harmony</h2> - Using speech to text recognition web api to aggregate
        related content
        <SVGHeadphone />
      </FeatureApp>
      {/* <section class="feature-app">
        Harlem Scrabble - Scrabble with an interesting twist
        <SVGBold />
      </section> */}
    </section>
  </Layout>
)

export default IndexPage
