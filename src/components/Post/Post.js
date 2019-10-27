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
    <S.Card>
      <S.CardBody>
        <S.CardTitle>
          <Link to={path}>{title}</Link>
        </S.CardTitle>
        <S.CardSubtitle>
          <span>{date}</span> by{" "}
          <span>{author}</span>
        </S.CardSubtitle>
        <S.CardText>{body}</S.CardText>
        <ul>
          {tags.map(tag => {
            return (
              <Link to={`tag/${slugify(tag)}`}>
                <S
                  <Chip label={tag} />
              </Link>
            )
          })}
        </ul>
        <div onClick={setOpenPost} to={path} className="btn btn-outline-primary">
          Read more
        </div>
      </S.CardBody>
    </S.Card>
  )
}

export default Post
