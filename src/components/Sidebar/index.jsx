import React from "react"
import { Link } from "gatsby"

import Twitter from "../../images/twitter-icon.svg"
import LinkedIn from "../../images/linkedin-icon.svg"
import GitHub from "../../images/github-icon.svg"
import Perfil from "../../images/perfil.jpeg"
import { MdEmail, MdWork, MdComputer } from "react-icons/md";

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
    <S.AboutSection>
      <S.Picture src={Perfil} alt="Mario Antonio do Amaral Rodeghiero" />
      <S.AboutTitle>
        Let me introduce myself.
      </S.AboutTitle>
      <S.AboutDescription>
        Hi, It's me Mário Rodeghiero. I'm a Front-End Developer focus on ReactJS working remotely for a Canadian company. Designing and creating new things is my passion and I have been working on various open-sorce projects.
      </S.AboutDescription>
      <S.AboutMore>
        More about me...
      </S.AboutMore>
    </S.AboutSection>
    <S.ProfileSecton>
      <p><MdComputer/> Front-End Developer</p>
      <p><MdWork /> @VanHack</p>
      <p><MdEmail/> mario.rodeghiero@gmail.com</p>
    </S.ProfileSecton>
    <S.SocialSection>
      <a href="https://twitter.com/mariorodeghiero" target="_blank">
        <S.Icon src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/mariorodeghiero/" target="_blank">
       <S.Icon src={LinkedIn} alt="LinkedIn" />
      </a>
      <a href="https://github.com/mariorodeghiero" target="_blank">
        <S.Icon src={GitHub} alt="GitHub" />
      </a>
    </S.SocialSection>
    {/* <div>
      <Chip />
    </div> */}
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
  )
}

export default Sidebar
