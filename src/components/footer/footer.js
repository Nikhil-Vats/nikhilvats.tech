import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Form from "../form/form";
import Waves from "../waves/waves"

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import react from "../../assets/react.svg";
import gatsby from "../../assets/gatsby.svg";
import like from "../../assets/like.svg";
import codeSVG from "../../assets/code_music.svg"
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
            <h6>{'</> by'} {data.site.siteMetadata.author} with <img src={like}/> using <img src={gatsby}/> and <img src={react} />© {new Date().getFullYear()}.</h6>
        </div>
    )
}

export default Footer;