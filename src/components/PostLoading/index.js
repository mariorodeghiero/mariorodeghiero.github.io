
import React from "react"

import * as S from "./styled"

const PostLoading = () => {
    return (
        <S.PostCard>
            <S.LoadingBox>
                <S.WhiteSpace>
                    <S.HeadOne></S.HeadOne>
                    <S.HeadTwo></S.HeadTwo>
                    <S.HeadThree></S.HeadThree>
                    <S.HeadFour></S.HeadFour>
                </S.WhiteSpace>
                <S.WhiteSpace>
                    <S.BodyOne></S.BodyOne>
                    <S.BodyTwo></S.BodyTwo>
                    <S.BodyThree></S.BodyThree>
                    {/* <S.BodyFour></S.BodyFour>
                    <S.BodyFive></S.BodyFive> */}
                </S.WhiteSpace>
            </S.LoadingBox>
        </S.PostCard>
    )
}

export default PostLoading
