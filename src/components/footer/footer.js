import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import footerStyles from "./footer.module.scss";
const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.blog}>
                <h3>Recent Blogs</h3>
                <div className={footerStyles.blogList}>
                    <a href="">A full tutorial to CSS Grids and list of resources</a>
                    <a href="">GatsbyJS tutorial and resources with Contentful and netlify</a>
                    <a href="">10 tips to increase your productivity in VS Code</a>
                    <a href="">A full tutorial to CSS Grids and list of resources</a>
                    <a href="">GatsbyJS tutorial and resources with Contentful and netlify</a>
                    <a href="">10 tips to increase your productivity in VS Code</a>
                </div>
            </div>
            <div className={footerStyles.links}>
                <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="/">Home</Link>
                <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="/blog">Blog</Link>
                <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="/about">About</Link>
                <Link className={footerStyles.navItem} activeClassName={footerStyles.activeNavItem} to="/contact">Contact</Link>
                <span>
                    <a href="https://github.com/Nikhil-Vats" target="_blank"><img src={github} /></a>
                    <a href="https://www.linkedin.com/in/nikhil-vats/" target="_blank"><img src={linkedin} /></a>
                    <a href="https://twitter.com/NikhilVatss" target="_blank"><img src={twitter} /></a>
                </span>
            </div>
            <p>Created by {data.site.siteMetadata.author} © {new Date().getFullYear()}.</p>
        </div>
    )
}

export default Footer;