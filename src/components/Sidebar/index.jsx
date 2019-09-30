import React from "react"
import { Link } from "gatsby"

import Twitter from "../../images/twitter-icon.svg"
import LinkedIn from "../../images/linkedin-icon.svg"
import GitHub from "../../images/github-icon.svg"
import Perfil from "../../images/perfil.jpeg"
import Chip from "../Chip"

import * as S from './index.styles'

const Sidebar = (props) => {
  return (
    <div
    style={{
      height: "100vh",
      width: "100%",
      textAlign: "center",
      padding: "40px",
    }}
  >
    <S.Picture src={Perfil} alt="Mario Antonio do Amaral Rodeghiero" />
    <p>Mario Antonio A. Rodeghiero</p>
    <p>Front-End Developer - ReactJS</p>
    <div>
      <S.Icon src={Twitter} alt="Twitter" />
      <S.Icon src={LinkedIn} alt="LinkedIn" />
      <S.Icon src={GitHub} alt="GitHub" />
    </div>
    <div>
      <Chip />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
  )
}

export default Sidebar
