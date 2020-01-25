import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Form from "../form/form";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import react from "../../assets/react.svg";
import gatsby from "../../assets/gatsby.svg";
import like from "../../assets/like.svg";
import codeSVG from "../../assets/master_plan1.svg"
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
            <div className={footerStyles.contact}>
                <h3>Contact me</h3>
                <Form />
            </div>
            <div className={footerStyles.links}>
                <div className={footerStyles.logo}> <img src={codeSVG}></img></div>
                <span>
                    <a href="https://github.com/Nikhil-Vats" target="_blank"><img src={github} /></a>
                    <a href="https://www.linkedin.com/in/nikhil-vats/" target="_blank"><img src={linkedin} /></a>
                    <a href="https://twitter.com/NikhilVatss" target="_blank"><img src={twitter} /></a>
                </span>
            </div>
            <p>Created by {data.site.siteMetadata.author} with <img src={like}/> using <img src={gatsby}/> and <img src={react} />© {new Date().getFullYear()}.</p>
        </div>
    )
}

export default Footer;