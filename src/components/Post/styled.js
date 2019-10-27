import styled, { keyframes } from "styled-components"
import { zoomInUp } from 'react-animations';
const bounceAnimation = keyframes`${zoomInUp}`;

export const Card = styled.div`
    border-radius: 4px;
    padding: 24px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
`

export const CardBody = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const CardTitle = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    
    a {
        color: #000000;
        text-decoration: none;
    }
`

export const CardSubtitle = styled.div`
    color: #030303;
`
export const CardText = styled.div`
  margin-top: 1rem;
  color: #333;
  font-size: 0.7em;
  font-weight: 300;
  line-height: 1.3rem;
  text-align: left;
`