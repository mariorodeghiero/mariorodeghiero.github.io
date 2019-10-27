import styled from "styled-components"

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 6px;
  opacity: 0.9;
  transition: opacity 0.5s ease-in-out;

  :hover {
    opacity: 0.6;
  }
`

export const ProfileSecton = styled.div`
  margin: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template: "position work"
                 "contact contact";
  justify-items: center;

  p {
    text-align: left;
  }
`

export const Position = styled.p`
  grid-area: position;
`

export const Work = styled.p`
  grid-area: work;
`
export const Contact = styled.p`
  grid-area: contact;
`
export const AboutSection = styled.div`
  margin: 24px;
`
export const AboutTitle = styled.h2`
  font-size: 1.25rem;
	font-weight: 400;
`

export const AboutDescription = styled.p`
  font-size: 0.875rem;
	font-weight: 300;
`
export const AboutMore = styled.button`
  font-size: 0.875rem;
	font-weight: 500;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  :hover {
    opacity: 0.6;
  }
`

export const SocialSection = styled.div`
  position: fixed;
  bottom: 16px;
  left: 12%;
`

export const Picture = styled.img`
    width: 90px;
    height: 90px;
    box-sizing: border-box;
    background-clip: content-box;
    border: 1px solid transparent;
    border-radius: 49.9%;
    margin: 24px; 
`