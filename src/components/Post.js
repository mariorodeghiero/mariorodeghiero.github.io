import React from "react"
import { Link } from "gatsby"
import { slugify } from "../utils"
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
    <Card>
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
        <div onClick={setOpenPost} to={path} className="btn btn-outline-primary float-right">
          Read more
        </div>
      </CardBody>
    </Card>
  )
}

export default Post
