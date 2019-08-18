import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Test = styled.div`
  background-color: #000;
  color: #fff;
`

const AboutPage = () => (
  <Test>
    <SEO title="About" />
    <h1>About</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/home">Go to page 2</Link>
  </Test>
)

export default AboutPage
