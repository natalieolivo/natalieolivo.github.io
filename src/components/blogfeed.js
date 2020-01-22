import React from "react"
import styled from "styled-components"

const BlogFeedList = styled.ul`
  margin: 0 0 4em;
  list-style: none;
  a,
  a:hover,
  a:active {
    text-decoration: none;
    font-family: Georgia, Serif;
    color: rgb(75, 50, 86);
    display: block;
  }
  h3 {
    margin: 0;
  }
  li {
    margin-bottom: 4em;
  }
`
const BlogFeed = () => {
  return (
    <BlogFeedList>
      <li>
        <a href="https://medium.com/@nataliie/a-restful-first-week-at-recurse-730214b6aa91">
          <h3>A RESTful week at Recurse</h3>
          <span>2019</span>
          <img
            alt="bees"
            src="https://miro.medium.com/fit/c/1400/420/1*EQ6UecWiqJaGZLWyPvVSMg.jpeg"
          />
        </a>

        <p>At the Recurse Center, I'm learning a lot about how to learn.</p>
      </li>
      <li>
        <a href="https://medium.com/@nataliie/community-recurse-day-1-436d8c8af24c">
          <h3>Community Recurse, Day 1</h3>
          <span>2019</span>
          <img
            alt="code"
            src="https://miro.medium.com/fit/c/1400/420/1*EVA4aCT-6dfC_X5Bk7J8CA.jpeg"
          />
        </a>
      </li>
    </BlogFeedList>
  )
}

export default BlogFeed
