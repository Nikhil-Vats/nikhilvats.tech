import React from "react";

import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import Head from "../components/head";
import blogStyles from "../styles/blog.module.scss";

export const query = graphql`
    query($slug:String!) {
        markdownRemark ( fields: { slug: { eq: $slug } }) {
            timeToRead
            frontmatter {
                title
                date
            }
            html
        }
    }
`;

const Blog = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}></Head>
            <h1 className={blogStyles.heading}>{props.data.markdownRemark.frontmatter.title}</h1>
            <p className={blogStyles.date}>{props.data.markdownRemark.frontmatter.date} || {props.data.markdownRemark.timeToRead} min</p>
            <div className={blogStyles.layout} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog;
