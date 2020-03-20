import React from "react";
import Layout from "../components/layout/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import blogStyles from "../styles/blogs.module.scss";
import Head from "../components/head";
const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        timeToRead
                        frontmatter {
                            title
                            date
                            description
                            series
                            articleNo
                            featuredImage {
                                childImageSharp {
                                  fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    console.log(JSON.stringify(data.allMarkdownRemark.edges,undefined, 4));
    return (
        <Layout>
            <Head title="Blog"></Head>
            <ol className={blogStyles.posts}>
              {data.allMarkdownRemark.edges.map((edge) => {
                  let featuredImgFluid = edge.node.frontmatter.featuredImage.childImageSharp.fluid;
                  return (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <Img fluid={featuredImgFluid} className={blogStyles.thumbnail} />
                            <div className={blogStyles.summary}>
                                <h3 className={blogStyles.title}>{edge.node.frontmatter.title}</h3>
                                <span className={blogStyles.details}>
                                    <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
                                    <p className={blogStyles.timeToRead}>{edge.node.timeToRead} min</p>
                                    {edge.node.frontmatter.articleNo? <p className={blogStyles.articleNo}>Article {edge.node.frontmatter.articleNo}</p> : null}
                                </span>
                                {edge.node.frontmatter.series? <h5 className={blogStyles.series}>Series: {edge.node.frontmatter.series}</h5> : null}
                                <p className={blogStyles.description}>{edge.node.frontmatter.description}</p>
                            </div>
                        </Link>
                    </li>
                  )
              })}  
            </ol>
        </Layout>
    )
}

export default BlogPage;