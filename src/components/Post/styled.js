import styled, { keyframes } from "styled-components"
import { zoomInUp } from 'react-animations';
const bounceAnimation = keyframes`${zoomInUp}`;

export const Card = styled.div`
    border-radius: 4px;
    border: 1px solid #c3c3c3;
    padding: 8px;
`