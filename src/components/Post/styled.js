import styled, { keyframes } from "styled-components"
import { zoomInUp } from 'react-animations';
const bounceAnimation = keyframes`${zoomInUp}`;

export const Card = styled.div`
    border-radius: 4px;
    padding: 8px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
`