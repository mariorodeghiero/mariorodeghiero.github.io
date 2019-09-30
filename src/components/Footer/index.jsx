import React from "react"
import { Link } from "gatsby"

import Twitter from "../../images/twitter-icon.svg"
import LinkedIn from "../../images/linkedin-icon.svg"
import GitHub from "../../images/github-icon.svg"
import Perfil from "../../images/perfil.jpeg"

import * as S from './index.styles'
import { grey } from "ansi-colors"

const Footer = (props) => {
  return (
    <div
    style={{
      width: "100%",
      textAlign: "center",
      padding: "24px",
      backgroundColor: "grey",
    }}
  >
   <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
  )
}

export default Footer
