import styled, { keyframes } from "styled-components"
import { zoomInUp } from 'react-animations';
const bounceAnimation = keyframes`${zoomInUp}`;

export const Header = styled.div`
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 95% 5%; 
  grid-template-areas: "chip filter";
  align-items: center;
  height: 80px;
`

export const ChipBox = styled.div`
  grid-area:  chip;
`

export const FilterBox = styled.div`
  grid-area:  filter;
  cursor: pointer;
  outline: 0;
  animation: 1s ${bounceAnimation};
`
