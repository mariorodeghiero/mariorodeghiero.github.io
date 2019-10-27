import styled, { keyframes } from "styled-components"
import { zoomInUp } from 'react-animations';
const bounceAnimation = keyframes`${zoomInUp}`;

export const Card = styled.div`
    border-radius: 4px;
    max-width: 600px;
    min-height: 185px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
    a {
        color: #000000 !important;
        text-decoration: none !important;
    }
`

export const CardBody = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 24px 0 8px 0;
`

export const CardTitle = styled.h1`
    font-size: 2rem;
    font-weight: 400;    
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

export const ChipBox = styled.span`
        padding: 0 8px 0 0;
`

export const ContainerChip = styled.ul`
        margin-top: 28px;
`

export const Date = styled.li`
    float: right;
    opacity: 0.4;
    margin-top: 6px;
`