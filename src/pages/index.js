import React, { useState } from 'react';
import { Link, graphql, StaticQuery } from "gatsby"

import Post from "../components/Post/Post"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"
import Chip from "../components/Chip"

import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
  }
  ol, ul {
    list-style: none;
  }
`

const IndexPage = () => {
  const [openPost, setOpenPost] = useState(false);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <SEO title="Home" />
        <Row>
          <Col md="4">
            <Sidebar />
          </Col>
          <Col md="8">
            <Header />
            <StaticQuery
              query={indexQuery}
              render={data => {
                if (openPost) {
                  return (
                    <div>
                      view
                      <button onClick={() => setOpenPost(!openPost)}>back</button>
                    </div>
                  )
                }
                return (
                  <div>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                      <Post
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        author={node.frontmatter.author}
                        path={node.frontmatter.path}
                        body={node.frontmatter.body}
                        tags={node.frontmatter.tags}
                        setOpenPost={() => setOpenPost(!openPost)}
                      />
                    ))}
                  </div>
                )
              }}
            />
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  )
}

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
