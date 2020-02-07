import React from "react";
import Layout from "../components/layout/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

import blogStyles from "../styles/blogs.module.scss";
import Head from "../components/head";
import thumbnail from "../assets/data-thumbnail.webp";

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
                  return (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <img src={thumbnail} className={blogStyles.thumbnail}/>
                            <div className={blogStyles.summary}>
                                <h3 className={blogStyles.title}>{edge.node.frontmatter.title}</h3>
                                <span className={blogStyles.details}>
                                    <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
                                    <p className={blogStyles.timeToRead}>{edge.node.timeToRead} min</p>
                                </span>
                                <p className={blogStyles.description}>As web developers we spend a lot of time going through complex nested data, read this blog to learn two ways to pretty print data to save time and make debugging easier! </p>
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