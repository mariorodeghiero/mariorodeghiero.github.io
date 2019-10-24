import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../utils"

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
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul>
          {tags.map(tag => {
            return (
              <Link to={`tag/${slugify(tag)}`}>
                <Badge color="light">{tag}</Badge>
              </Link>
            )
          })}
        </ul>
        <div onClick={setOpenPost} to={path} className="btn btn-outline-primary">
          Read more
        </div>
      </CardBody>
    </S.Card>
  )
}

export default Post
