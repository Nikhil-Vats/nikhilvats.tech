import React from "react";
import Layout from "../components/layout/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

import blogStyles from "../styles/blogs.module.scss";
import Head from "../components/head";
import thumbnail from "../assets/blog_background.jpg";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
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
    console.log(data)
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
                                <span className={blogStyles.details}>
                                    <h2>{edge.node.frontmatter.title}</h2><p>{edge.node.frontmatter.date}</p>
                                </span>
                                <p>As a web developer, you spend most of your day in front of your IDE. If that's Visual Studio Code, here are some extension suggestions that can make you more productive. </p>
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