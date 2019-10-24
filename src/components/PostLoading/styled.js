import styled, { keyframes } from "styled-components"

const shimmer = keyframes`
    0% {
        background-position: 0px 0;
    }
    100% {
        background-position: 600px 0;
    }
`

export const PostCard = styled.div`
    width: 600px;
    margin: 60px auto 0;
    border-radius: 2px;
    padding: 16px;
    background: #fff;
    box-shadow: 0 0 3px #ccc;
`

export const LoadingBox = styled.div`
    height: 180px;
    width: 100%;
    position: relative;
    background-image: linear-gradient(to right, #EEE 0%, #FAFAFA 20%, #EEE 100%);
    background-color: #EEE;
    animation: 1s shimmer infinite linear;
`

export const WhiteSpace = styled.div`
    div {
        background: #fff;
        position: absolute;
    }
`
export const HeadOne = styled.div`
    left: 40px;
    width: 8px;
    height: 40px;
`
export const HeadTwo = styled.div`
    width: 60%;
    height: 16px;
    left: 40%;
    top: 0px;
`
export const HeadThree = styled.div`
    width: calc(100% - 48px);
    height: 8px;
    top: 16px;
    left: 48px;
`
export const HeadFour = styled.div`
    width: 50%;
    height: 16px;
    left: 50%;
    top: 24px;
`

export const BodyOne = styled.div`
    width: 100%;
    height: 20px;
    top: 40px;
`
export const BodyTwo = styled.div`
    width: 30%;
    height: 0px;
    top: 88px;
    right: 0;
`
export const BodyThree = styled.div`
    width: 100%;
    height: 8px;
    top: 108px;
`
export const BodyFour = styled.div`
    width: 100%;
    height: 24px;
    top: 150px;
`
export const BodyFive = styled.div`
    width: 8px;
    height: 26px;
    top: 174px;
    left: 40px;
`


