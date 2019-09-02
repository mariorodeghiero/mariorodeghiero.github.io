import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Post from "../components/Post"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col md="4">
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "#c5c5c5" }}
        >
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </Col>
      <Col md="8">
        <StaticQuery
          query={indexQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    author={node.frontmatter.author}
                    path={node.frontmatter.path}
                    body={node.frontmatter.body}
                  />
                ))}
              </div>
            )
          }}
        />
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            layout
            title
            date(formatString: "MMM Do YYYY")
            description
            tags
            author
            introduction
            path
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
