import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Post from "../components/Post"
import Chip from "../components/Chip"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"

import Twitter from "../images/twitter-icon.svg"
import LinkedIn from "../images/linkedin-icon.svg"
import GitHub from "../images/github-icon.svg"
import Perfil from "../images/perfil.jpeg"

import styled from "styled-components"

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`

export const Picture = styled.img`
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-radius: 50%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col md="4">
        <div
          style={{
            height: "100vh",
            width: "100%",
            // backgroundColor: "#c5c5c5",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <Picture src={Perfil} alt="Mario Antonio do Amaral Rodeghiero" />
          <p>Mario Antonio A. Rodeghiero</p>
          <p>Front-End Developer - ReactJS</p>
          <div>
            <Icon src={Twitter} alt="Twitter" />
            <Icon src={LinkedIn} alt="LinkedIn" />
            <Icon src={GitHub} alt="GitHub" />
          </div>
          <div>
            <Chip />
          </div>
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
                    tags={node.frontmatter.tags}
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
