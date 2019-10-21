import styled, { keyframes } from "styled-components"
import { fadeIn } from 'react-animations'

const FadeIn = keyframes`${fadeIn}`;

export const ContainerChip = styled.div`
    animation: 1s ${FadeIn};
`