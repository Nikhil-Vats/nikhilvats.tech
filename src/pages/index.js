import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Head from "../components/head";

import link from "../assets/link.svg";
import location from "../assets/location.svg";
import date from "../assets/date.svg"
import logo from "../assets/logo.png";
import arrow from "../assets/up-arrow.svg";
import indexStyles from "../styles/index.module.scss";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    resumeLink
                    projects {
                        heading
                        location
                        role
                        date
                        description
                        link
                    }
                    work {
                        heading
                        location
                        role
                        date
                        description
                        link
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Head title="Home"/>
            <div className={indexStyles.introduction}>
                <div>
                    <h2 className={indexStyles.line1}>Hello, I'm Nikhil, a full-stack developer living in India!</h2>
                    <a className={indexStyles.resumeLink} href={data.site.siteMetadata.resumeLink} target="_blank">Resume</a>
                </div>
                <img className={indexStyles.image} src={logo} alt="" />
            </div>
            <div className={indexStyles.work}>
                <h3>Work</h3>
                <div className={indexStyles.projects}>
                    {data.site.siteMetadata.work.map((a, index) => {
                        return (
                            <div key={index} className={indexStyles.project}>
                                <div className={indexStyles.tools}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h4 className={indexStyles.heading}>{a.heading} (<span className={indexStyles.title}>{a.role}</span>) {'{'}</h4>
                                <div className={indexStyles.details}>
                                    <span><img src={link} className={indexStyles.link} alt="link" /><a href={a.link} target="_blank">{a.heading}</a></span>
                                    <span><img src={location} className={indexStyles.link} alt="link" /><p>{a.location}</p></span>
                                    <span><img src={date} className={indexStyles.link} alt="link" /><p>{a.date}</p></span>
                                </div>
                                <ul className={indexStyles.description}>{'/*'} {a.description.map(val => <li>{val}</li>)} {'*/'}</ul>
                                <p className={indexStyles.end}>{'}'}</p>
                            </div>
                        )
                    })}
                </div>
                <h3>Other projects</h3>
                <div className={indexStyles.projects}>
                    {data.site.siteMetadata.projects.map((a, index) => {
                        return (
                            <div key={index} className={indexStyles.project}>
                                <div className={indexStyles.tools}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h4 className={indexStyles.heading}>{a.heading} (<span className={indexStyles.title}>{a.role}</span>) {'{'}</h4>
                                <div className={indexStyles.details}>
                                    <span><img src={link} className={indexStyles.link} alt="link" /><a href={a.link} target="_blank">{a.heading}</a></span>
                                    <span><img src={location} className={indexStyles.link} alt="link" /><p>{a.location}</p></span>
                                    <span><img src={date} className={indexStyles.link} alt="link" /><p>{a.date}</p></span>
                                </div>
                                <ul className={indexStyles.description}>{'/*'} {a.description.map(val => <li>{val}</li>)} {'*/'}</ul>
                                <p className={indexStyles.end}>{'}'}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <img onClick={() => window.scrollTo(0,0)} className={indexStyles.upArrow} src={arrow} alt="Arrow" />
        </Layout>
    );
}

export default IndexPage;