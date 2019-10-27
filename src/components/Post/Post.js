import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../utils"
import Chip from "@material-ui/core/Chip"

import * as S from "./styled"

import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge,
} from "reactstrap"

const Post = ({ title, author, path, date, body, tags, setOpenPost }) => {
  return (
    <S.Card onClick={setOpenPost} to={path}>
      <Link to={path}>
        <S.CardBody>
          <S.CardTitle>
            {title}
          </S.CardTitle>

          <S.CardText>{body}</S.CardText>
          <S.ContainerChip>
            {tags.map(tag => {
              return (
                <Link to={`tag/${slugify(tag)}`}>
                  <S.ChipBox>
                    <Chip label={tag} />
                  </S.ChipBox>
                </Link>
              )
            })}
            <S.Date>
              <S.CardSubtitle>
                <span>{date}</span>
              </S.CardSubtitle>
            </S.Date>
          </S.ContainerChip>

        </S.CardBody>
      </Link>
    </S.Card>
  )
}

export default Post
