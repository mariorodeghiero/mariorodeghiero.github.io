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
      width: "33%",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
    }}
  >
    <S.Picture src={Perfil} alt="Mario Antonio do Amaral Rodeghiero" />
    <h5>Mario Antonio A. Rodeghiero</h5>
    <p>Front-End Developer at @VanHack</p>
    <div>
      <a href="https://twitter.com/mariorodeghiero" target="_blank">
        <S.Icon src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/mariorodeghiero/" target="_blank">
       <S.Icon src={LinkedIn} alt="LinkedIn" />
      </a>
      <a href="https://github.com/mariorodeghiero" target="_blank">
        <S.Icon src={GitHub} alt="GitHub" />
      </a>
    </div>
    {/* <div>
      <Chip />
    </div> */}
    <div>
      <S.AboutTitle>
        Let me introduce myself.
      </S.AboutTitle>
      <S.AboutDescription>
        Hi, It's me Mário Rodeghiero. I'm a Front-End Developer focus on ReactJS working remotely for a Canadian company. Designing and creating new things is my passion and I have been working on various open-sorce projects.
      </S.AboutDescription>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
  )
}

export default Sidebar
